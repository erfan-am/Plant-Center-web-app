import React from 'react'
import {useLocation,Link} from 'react-router-dom'
import { data } from './data'
const Details = ({addTools}) => {
    const param=useLocation().pathname
    const include=param.split('/shop/seeDetails/')
    const item=data.map(item=>item.items.find(item=>item.name == include[1])).filter(item=>item !==undefined)[0]
    console.log(item);
  return (
    <div className='container'>
        <h1>See Details</h1>
        <div className="row">
            <div className="col-lg-6">
                <img src={item.img} style={{width:'100%',height:'450px'}} alt={item.name+ "w"} />
            </div>
            <div className="col">
                <ul className='list-group p-4'>
                    <li className='list-group-item h3'>Name : {item.name}</li>
                    <li className='list-group-item h3'>Price: {item.price}</li>
                    <li className='list-group-item h3'>how to keep:Get started with Bootstrap Bootstrap is a powerful, feature-packed frontend toolkit. Build anything—from prototype to production—in minutes</li>
                    <li className='list-group-item h3'>
                    <button onClick={()=>addTools(item)} className='btn btn-success'>Add To Box</button>
                    </li>
                    <li className='list-group-item h3'>
                    <Link to="/shop" className='btn btn-success'>Back</Link >
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Details