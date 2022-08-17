import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import { SwiperSlide } from 'swiper/react'
import Motive from '../Components/Motive'
import SwiperCaro from '../Components/Swiper'

const Shop = ({addTools,data,checkExistEmail,user}) => {
  
    
  return (
    <div className=''>
          <div className="filterAndShop">
          <div className="filter">
              <h3>Setting Filter</h3>
              <ul className="list-group">
                <li className="list-group-item" id="dropdwonButtonBranchName" type="button" data-bs-toggle="dropdown" aria-expanded="false">Base on Branch Name
                <ul class="menuDropdown list-group">
                {data.map(item=>(
                  <li class="list-group-item" ><span key={item.od}>{item.branchName}</span></li>
                ))}
               
              </ul>
                </li>
                
                <li id="dropdwonButtonPrcie" className='list-group-item'>Base on Price
                <ul class="menuDropdownPrice list-group">
                  <form>
                    <li className="list-group-item">
                    <input className='form-control' type="text" placeholder='from' />    
                    </li> 
                    <li className="list-group-item">
                    <input className='form-control' type="text" placeholder='to' />    
                    </li>  
                    <li className="list-group-item">
                    <input className='form-control text-white bg-primary' type="submit" value="filter" />    
                    </li>                
                  </form>
              </ul>
              </li>
                <li id="dropdwonButtonQuantity" className='list-group-item'>Base on quantity not 0</li>
              </ul>
          </div>

            <div className="col shopData">
            {
              data &&  data.map(item=>(
                 <Motive  key={Math.random()}>
                         <div className="col">
                          <div className="col">
                            <h2>branchName: {item.branchName}</h2>
                            <p>List of prodcuts</p>
                          </div>
                          <div className="col"><SwiperCaro>
                              <SwiperSlide  className="card m-3" style={{width: "11rem",height:'180px'}} >
                                <h3 className='text-center mt-1'>Go to All Products</h3>
                                
                              </SwiperSlide>
                              {item.items.map(item=>(
                               <SwiperSlide id="shopCard" key={Math.random()} className="card m-3" style={{width: "11rem"}}>
                                <img  style={{width:'100%',height:'180px'}} className="card-img-top" src={item.image} alt="Card image cap"/>
                              <div  className="card-body card-body-shop row">
                               <div className="d-flex" style={{justifyContent:'space-around'}}>
                               {item.mainQuantity >0 && <p className="card-title">{item.price}$</p>}
                                <p className={item.mainQuantity  ===0 ? `card-title text-danger` : 'card-title '}>quantity: {item.mainQuantity}</p>
                               </div>
                                <Link to={`/shop/seeDetails/${item.name}`} className='btn btn-primary mb-1 ss'>See Details</Link>
                               {item.mainQuantity > 0 ? <button onClick={()=>addTools(item)} className='btn btn-success'>Add To Box</button>
                                :<button onClick={()=>checkExistEmail(item.name)} className='btn btn-success'>call me</button>}
                                 </div>
                            </SwiperSlide>
                        ))}
                          </SwiperCaro></div>
                         </div>
                        <hr/>
                    </Motive>
                ))
            }
            </div>
          
          </div>
    </div>
  )
}

export default Shop