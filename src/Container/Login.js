import {Link} from 'react-router-dom'
import { useFormik } from 'formik';

const Login = () => {
   
      
const validate = values => {
    const errors = {};
    if (!values.username) {
      errors.username = 'Required';
    } else if (values.username.length > 15) {
      errors.username = 'Must be 15 characters or less';
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
      username: '',
      password: ''
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
                <input type="submit"className="form-control" value="Sign up" />
            </div>
        </form>

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