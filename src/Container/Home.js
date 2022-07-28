import React from 'react'
import {Link} from 'react-router-dom'
import { data } from './data'
const Home = () => {

  const  links=["https://www.ikea.com/om/en/images/products/fejka-artificial-potted-plant-in-outdoor-monstera__0614197_pe686822_s5.jpg","https://www.bigw.com.au/medias/sys_master/images/images/ha9/h67/17304762155038.jpg"]
  return (
        <div className='container'>
            <div id="row_titel" className="row p-4">
                {links.map(item=>(
                     <div key={Math.random()} className="card" style={{width: "32rem"}}>
                     <img className="card-img-top" src={item} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to="/shop" className="btn btn-primary">Go somewhere</Link>
                    </div>
                    </div>
                ))}
            </div>
            <div id='homeCol'>
                <h2 className='text-center'>Shop center</h2>
                <div className="">
                <img id='imagehome' src="https://d2j6dbq0eux0bg.cloudfront.net/images/36080001/2786090769.jpg" alt="" />
                </div>
            </div>
            <div className="row mt-5 p-5">
                    {data.map(item=>(
                       <div key={Math.random()} className='col'>
                         <div className="card" style={{width: "19rem"}}>
                        <img style={{width:'100%',height:'250px'}} className="card-img-top" src={item.img} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <Link to={`shop/${item.name}`} className="btn btn-primary">Go Shop</Link>
                        </div>
                        </div>
                       </div>
                    ))}
            </div>
        </div>
    )
}

export default Home