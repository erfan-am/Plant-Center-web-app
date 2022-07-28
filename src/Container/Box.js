import React, { useEffect, useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'

const Box = ({tools,removeItem,totalPrices,addQuantity,onPay,decQuantity}) => {
    let i=1
    const navigate=useNavigate()
 useEffect(()=>{
    tools.length ==0 && navigate('/shop')
 },[tools])
 console.log(tools);
  return (
    <div className='container'>
      <div className="row">
      <h2>See All You Want To Buy</h2>
      <h3 className='text-success'>Total Price : {totalPrices}$</h3>
      </div>

        <table className="table">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">price</th>
            <th scope="col">Remove</th>
            </tr>
        </thead>
        <tbody>
           {tools.map(tool=>(
             <tr key={Math.random()}>
             <th className='h3' scope="row">{i++}</th>
             <td className='h3'><img width={50} src={tool.img} alt={tool.name+"09"} /></td>
             <td className='h3'><Link to={`/shop/seeDetails/${tool.name}`}>{tool.name}</Link></td>
             <td className='h3'><button onClick={()=> decQuantity(tool)} className='text-danger btn'>-</button> 
             <h4 className='d-inline'>{tool.quantity}</h4> 
             <button onClick={()=>addQuantity(tool)} 
             className=' btn text-success'>+</button></td>
             <td className='h3'>{tool.price}</td>
             <td className='h3'><button onClick={()=>removeItem(tool)} className='btn'>X</button></td>
             </tr>
           ))}
        </tbody>
        </table>


        { tools.length !==0 && <button onClick={()=>onPay()} className="btn btn-primary">Go To Pay</button>}
    </div>
  )
}

export default Box