import {Link} from 'react-router-dom'
import { useFormik } from 'formik';

const Signup = () => {
   
const validate = values => {
    const errors = {};
    if (!values.username) {
      errors.username = 'Required';
    } else if (values.username.length > 15) {
      errors.username = 'Must be 15 characters or less';
    }
  
    if (!values.phone) {
      errors.phone = 'Required';
    } else if (values.phone.length > 20) {
      errors.phone = 'Must be 20 characters or less';
    }
  
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
      if (!values.confirm) {
        errors.confirm = 'Required';
      }else if (values.confirm !== values.password ){
        errors.confirm = 'Password is not match';
      }
  
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      username: '',
      phone: '',
      email: '',
      password: '',
      confirm: '',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className='container'>
      <div className="row p-2 mt-3">
        <div className="col">
        <form onSubmit={formik.handleSubmit}>
        <div className="mb-3">
        <label htmlFor="username" className={formik.errors.username && `text-danger`}>Username</label>
            <input
                className='form-control'
                id="username"
                name="username"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.username}
            />
             {formik.errors.username ? <div>{formik.errors.username}</div> : null}

        </div>
        <div className="mb-3">
        <label htmlFor="phone" className={formik.errors.phone && `text-danger`}>Phone Number</label>
        <input
            className='form-control'
            id="phone"
            name="phone"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.phone}
        />
        {formik.errors.phone ? <div>{formik.errors.phone}</div> : null}

        </div>
        <div className="mb-3">
        <label htmlFor="email" className={formik.errors.email && `text-danger`}>Email Address</label>
        <input
            className='form-control'
            id="email"
            name="email"
            type="email"
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
        <div className="mb-3">
        <label htmlFor="confirm" className={formik.errors.confirm && `text-danger`}>Confirm Password</label>
        <input
            className='form-control'
            id="confirm"
            name="confirm"
            type="confirm"
            onChange={formik.handleChange}
            value={formik.values.confirm}
        />
        {formik.errors.confirm ? <div>{formik.errors.confirm}</div> : null}
        </div>
            <div className="mb-3">
                <input type="submit"className="form-control" value="Sign up" />
            </div>
        </form>

        <h3>if you have an account please click <Link 
        to="/authentication/login"
        className='h3 text-primary'>here</Link> </h3>

        </div>
        <div className="col">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6k_1pA4Np9OmpNZ0upwnoSsp6KsuKH2u3gQ&usqp=CAU" 
                width={400}
            alt="fa" />
        </div>
        </div>        
    </div>
  )
}

export default Signup




  