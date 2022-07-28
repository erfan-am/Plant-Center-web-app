import React from 'react'
import { data } from './data'
import {Link} from 'react-router-dom'
const Shop = ({addTools}) => {
  return (
    <div className='container'>
            <div className="col">
            <h1>Shop Center</h1>
            </div>

            {
                data.map(item=>(
                    <div key={Math.random()} className='row mt-3'>
                        <div className="col-lg-6 ImageShopTitle">
                            <img src={item.img} alt={item.name} />
                        </div>
                        <div className="col">
                        <div className='row ff'>
                        {item.items.map(item=>(
                                <div key={Math.random()} className="card m-3" style={{width: "10rem"}}>
                                <img style={{width:'100%',height:'180px'}} className="card-img-top" src={item.img} alt="Card image cap"/>
                                <div className="card-body row">
                                <h5 className="card-title">{item.price}$</h5>
                                <Link to={`/shop/seeDetails/${item.name}`} className='btn btn-primary mb-1 ss'>See Details</Link>
                                <button onClick={()=>addTools(item)} className='btn btn-success'>Add To Box</button>
                                 </div>
                            </div>
                        ))}
                            </div>
                        </div>
                        <hr/>
                    </div>
                    
                ))
            }
    </div>
  )
}

export default Shop