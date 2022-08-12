import React, { useEffect, useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'
import axios from 'axios'


const Box = ({choices,removeItem,totalPrices,addQuantity,onPay,decQuantity}) => {
    let i=1
    const navigate=useNavigate()

  
const sendOrders=async()=>{
  await axios({
    method: 'post',
    url: 'http://127.0.0.1:8000/orders/',
    data:choices
  }).then(res=>{
    console.log(res);
  }).catch(err=>{
    console.log(err);
  })
}

 useEffect(()=>{
    choices.length ==0 && navigate('/shop')
 },[choices])
 console.log(choices);
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
            <th scope="col">MainQuantity</th>
            <th scope="col">Quantity</th>
            <th scope="col">price</th>
            <th scope="col">Remove</th>
            </tr>
        </thead>
        <tbody>
           {choices.map(tool=>(
             <tr key={Math.random()}>
             <th className='h4' scope="row">{i++}</th>
             <td className='h4'><img width={50} src={tool.image} alt={tool.name+"09"} /></td>
             <td className='h4'><Link to={`/shop/seeDetails/${tool.name}`}>{tool.name}</Link></td>
             <td className='h4'><span>{tool.mainQuantity}</span></td>
             <td className='h4'><button onClick={()=> decQuantity(tool)} className='text-danger btn'>-</button> 
             <h4 className='d-inline'>{tool.quantity}</h4> 
             <button disabled={tool.quantity == tool.mainQuantity && true} onClick={()=>addQuantity(tool)} 
             className=' btn text-success'>+</button></td>
             <td className='h3'>{tool.price}</td>
             <td className='h3'><button onClick={()=>removeItem(tool.id)} className='btn btn-danger'>X</button></td>
             </tr>
           ))}
        </tbody>
        </table>


        { choices.length !==0 && <button onClick={()=>sendOrders()} className="btn btn-primary">Go To Pay</button>}
    </div>
  )
}

export default Box