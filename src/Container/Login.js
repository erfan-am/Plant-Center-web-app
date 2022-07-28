import React, { useState } from 'react'
import Input from '../Components/Input'
import {Link} from 'react-router-dom'

const Login = () => {
    const [valuse,setValuse]=useState({username:'',password:''})
    const inputs=[
        {
            value:valuse.username,
            name:'username',
            id:1,
            placeholder:'Enter Your account username',
        },
        {
            value:valuse.password,
            name:'password',
            id:2,
            placeholder:'Enter Your Password',
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

        <h3>if you don't have any account please click <Link 
        to="/authentication/signup"
        className='h3 text-primary'>here</Link> </h3>
        
        </div>
        <div className="col">
            
        </div>
        </div>
       
    </div>
  )
}

export default Login