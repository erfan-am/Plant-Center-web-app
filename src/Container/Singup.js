import React, { useState } from 'react'
import Input from '../Components/Input'
import {Link} from 'react-router-dom'

const Signup = () => {
    const [valuse,setValuse]=useState({username:'',phone:'',email:'',password:'',confirm:''})
    const inputs=[
        {
            value:valuse.username,
            type:'text',
            name:'username',
            id:1,
            placeholder:'Enter Your account username',
        },
        {
            value:valuse.phone,
            type:'number',
            name:'phone',
            id:3,
            placeholder:'Enter Your Phone number',
        },
        {
            value:valuse.email,
            name:'email',
            type:'email',
            id:4,
            placeholder:'Enter Valid Email',
        },
        {
            value:valuse.password,
            type:'password',
            name:'password',
            id:2,
            placeholder:'Enter Your Password',
        },
        {
            value:valuse.confirm,
            type:'password',
            name:'confirm',
            id:5,
            placeholder:'Enter Your Password Again',
        }
    ]

    const onChage=(e)=>{
        setValuse({...valuse,[e.target.name]:e.target.value})
    }
  return (
    <div className='container'>
      <div className="row p-2 mt-3">
        <div className="col">
        <form>
            {inputs.map(input=>(
                <Input key={input.id} 
                value={input.value} 
                onChange={onChage} 
                placeholder={input.placeholder}
                name={input.name} />
            ))}
        </form>

        <h3>if you have an account please click <Link 
        to="/authentication/login"
        className='h3 text-primary'>here</Link> </h3>

        </div>
        <div className="col"></div>
        </div>        
    </div>
  )
}

export default Signup