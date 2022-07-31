import {Link} from 'react-router-dom'
import { useFormik } from 'formik';
import  axiosInstance  from '../axios';

const Login = () => {
   

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
        errors.password = 'Invalid password address';
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


  const handleData=()=>{
    axiosInstance
    .post('token/',{
      email:formik.values.email,
      password:formik.values.password,
    })
    .then((res) => {
      localStorage.setItem('access_token', res.data.access);
      localStorage.setItem('refresh_token', res.data.refresh);
      axiosInstance.defaults.headers['Authorization'] =
        'JWT ' + localStorage.getItem('access_token');
        console.log(res);
    })
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
                id="email"
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
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
        />
        {formik.errors.password ? <div>{formik.errors.password}</div> : null}
        </div>
          
        </form>
        <div className="mb-3">
                <input onClick={handleData} type="submit"className="form-control" value="Sign up" />
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