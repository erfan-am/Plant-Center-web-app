import {Link,useNavigate} from 'react-router-dom'
import { useFormik } from 'formik';
import {useDispatch,useSelector} from 'react-redux'
import React from 'react'
import { getToken, getUserTokenDecode, logIn } from '../redux/user/userreducer';
import userEvent from '@testing-library/user-event';

const Login = () => {
  const dispatch=useDispatch()
  const {tokens} =useSelector(state=>state.user)
  const navigate=useNavigate()
const validate = values => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!values.password) {
        errors.password = 'Required';
      }else if (values.password.length < 8){
        errors.password = 'Invalid password';
      }
     
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });


  const handleData=async()=>{
    const {email,password} =formik.values
    const response= await fetch('http://127.0.0.1:8000/api/token/', {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({'email':email, 'password':password})
            })
    const data=await response.json()
    if(response.status === 200){
      localStorage.setItem('ddd',JSON.stringify(data));
      dispatch(getToken(data))
      dispatch(getUserTokenDecode(data))
      navigate('/shop')
    }else{
        alert('Something went wrong!')
    }
  }
  return (
    <div className='container'>
      <div className="row p-2 mt-3">
        <div className="col">
        <form onSubmit={formik.handleSubmit}>
        <div className="mb-3">
        <label htmlFor="email" className={formik.errors.email && `text-danger`}>Email</label>
            <input
                className='form-control'
                id="emailLogin"
                name="email"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.email}
            />
             {formik.errors.email ? <div>{formik.errors.email}</div> : null}
        </div>
        <div className="mb-3">
        <label htmlFor="email" className={formik.errors.password && `text-danger`}>Password</label>
        <input
            className='form-control'
            id="passwordLogin"
            name="password"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.password}
        />
        {formik.errors.password ? <div>{formik.errors.password}</div> : null}
        </div>
          
        </form>
        <div className="mb-3">
                <input onClick={handleData} type="submit"className="form-control" value="Login" />
            </div>
        <h3>if you haven't any account please click <Link 
        to="/authentication/signup"
        className='h3 text-primary'>here</Link> </h3>

        </div>
        <div className="col">
            <img width={500} className="" src="https://pikaplant.com/wp-content/uploads/pikaplant-musa-acuminata-coco-fibre-1200x675.jpg"
             alt="ef"
              />
        </div>
     </div>
 </div>
  )
}

export default Login