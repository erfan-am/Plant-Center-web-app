import React from 'react'

const Input = (props) => {
  return (
    <div className='mb-3'>
        <input  
        value={props.value}
        type={props.type}
        name={props.name}
        onChange={props.onChange}
        className='form-control' 
        placeholder={props.placeholder}/>
    </div>
  )
}

export default Input