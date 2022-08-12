import React from 'react'
import {Link} from 'react-router-dom'
const Shop = ({addTools,data,checkExistEmail,user}) => {
  return (
    <div className='container'>
            <div className="col">
                <h1>Shop Center</h1>
            </div>
            {
              data &&  data.map(item=>(
                    <div key={Math.random()} className='row mt-3'>
                        <div className="col-lg-6 ImageShopTitle">
                            <img src={item.branchImage} alt={item.branchName} />
                        </div>
                        <div className="col">
                        <div className='row ff'>
                        {item.items.map(item=>(
                                <div key={Math.random()} className="card m-3" style={{width: "11rem"}}>
                                <img style={{width:'100%',height:'180px'}} className="card-img-top" src={item.image} alt="Card image cap"/>
                                <div className="card-body row">
                               <div className="d-flex" style={{justifyContent:'space-around'}}>
                               {item.mainQuantity >0 && <p className="card-title">{item.price}$</p>}
                                <p className={item.mainQuantity  ===0 ? `card-title text-danger` : 'card-title '}>quantity: {item.mainQuantity}</p>
                               </div>
                                <Link to={`/shop/seeDetails/${item.name}`} className='btn btn-primary mb-1 ss'>See Details</Link>
                               {item.mainQuantity > 0 ? <button onClick={()=>addTools(item)} className='btn btn-success'>Add To Box</button>
                                :<button onClick={()=>checkExistEmail()} className='btn btn-success'>call me</button>}
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