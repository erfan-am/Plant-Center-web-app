import React from 'react'

const Carousel = ({links}) => {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  {/* <div className="carousel-indicators">
    {links.map(link=>(
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={link.slid} className="active" aria-current="true" aria-label={link.slid}></button>
    ))}
   </div> */}
  <div className="carousel-inner">
   {links.map(link=>(
    <div className="carousel-item active">
    <img height={500} src={link.img} key={Math.random()} className="d-block w-100" alt="..."/>
  </div>
   )) }
    {/* <div className="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOh_Z3jD4iRxvSBlcoe2RJPOh0n-xLqFhyUw&usqp=CAU" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjZvCsvSt-bn1FGcK_OGx4qxIhN1HFXAWaVQ&usqp=CAU" className="d-block w-100" alt="..."/>
    </div> */}
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Carousel