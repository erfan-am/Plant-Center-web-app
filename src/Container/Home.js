import React from 'react'
import {Link} from 'react-router-dom'
import Carousel from '../Components/Carousel'
const Home = ({data}) => {

  const  links=["https://www.ikea.com/om/en/images/products/fejka-artificial-potted-plant-in-outdoor-monstera__0614197_pe686822_s5.jpg","https://www.bigw.com.au/medias/sys_master/images/images/ha9/h67/17304762155038.jpg"]
  return (
        <div className='container'>
            <div id="row_titel" className="row p-4">
            {/* <Carousel links={links} key={Math.random()}/> */}
                   
            </div>
            <div id='homeCol'>
                <h2 className='text-center'>Shop center</h2>
                <div className="">
                <img id='imagehome' src="https://d2j6dbq0eux0bg.cloudfront.net/images/36080001/2786090769.jpg" alt="" />
                </div>
            </div>
            <div className="row mt-5 p-5">
                    {data && data.map(item=>(
                       <div key={Math.random()} className='col'>
                            <div className="card" style={{width: "19rem"}}>
                                <img style={{width:'100%',height:'250px'}} 
                                className="card-img-top" src={item.branchImage} alt="Card image cap"/>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{item.branchName}</h5>
                                <Link to={`shop/${item.branchName}`} className="btn btn-primary">Go Shop</Link>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default Home