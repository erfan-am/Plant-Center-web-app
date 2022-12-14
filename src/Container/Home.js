import React from 'react'
import Carousel from '../Components/Carousel';
import SwiperCaro from '../Components/Swiper';
import {  SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

const Home = ({data}) => {

  const  links=[{slid:"1",img:"https://www.komar.de/en/media/catalog/product/cache/5/image/9df78eab33525d08d6e5fb8d27136e95/l/j/ljx8-060.jpg"},
{slid:'2',img:"https://static6.depositphotos.com/1031174/597/i/950/depositphotos_5977156-stock-photo-jungle.jpg"},
{slid:'3',img:"https://cdn.britannica.com/90/3890-050-F451C580/rainforest-coast-lowland-rainforests-Ecuador-tropics-evergreen.jpg"}]
  return (
        <div className='container'>
            <div id="row_titel" className="row p-4">
                
             <Carousel links={links} />
            </div>
            <div id='homeCol'>
                <h2 className='text-center'>Shop center</h2>
                <div className="">
                <img id='imagehome' src="https://d2j6dbq0eux0bg.cloudfront.net/images/36080001/2786090769.jpg" alt="" />
                </div>
            </div>
            <div className="row mt-5 p-5">
                <SwiperCaro>
                {data && data.map(item=>(
            <SwiperSlide id="homeCard" key={Math.random()} className='col'>
                <div className="card" style={{width: "19rem"}}>
                    <img style={{width:'100%',height:'250px'}} 
                    className="card-img-top" src={item.branchImage} alt="Card image cap"/>
                <div className="card-body card-body-home">
                    <h5 className="card-title text-center">Branch Name: {item.branchName}</h5>
                    <Link to={`shop/${item.branchName}`} className="btn btn-primary">Go Shop</Link>
                </div>
                </div>
            </SwiperSlide>
                    ))}
                </SwiperCaro>
            </div>
        </div>
    )
}

export default Home