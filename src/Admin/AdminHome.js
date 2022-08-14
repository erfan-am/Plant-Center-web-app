import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from '../Components/Modal'

const AdminHome = ({data }) => {
    const [password,setPassword]=useState('')
    const [branchNew,setbranchNew]=useState('')
    const [postName,setPostName]=useState('')
    const [id,setId]=useState('')
    const [postquantity,setPostquantity]=useState(null)
    const [off,setOff]=useState(null)
    const [totalPrice,setTotoalPrice]=useState(null)
    const [modalShow,setModlaShow]=useState(false)
    const [emails,setEmails]=useState([])

    const [branchNewimage]=useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdalYFQ90SY9borQ579S-gt9WeEFzc-N1mzVL6o8I7GZzx3VA1aD-NQXk1fy979qX4eAQ&usqp=CAU')
    const [select,setSelect]=useState('')
    const pass="12345678";

    const colors=['primary','secondary','success','danger','warning','info']
    const handleChange=(e)=>{
        const {value}=e.target
        setSelect(value)
        if(value !=="Choose..."){
            setbranchNew(e.target.value)
        }
    }
 
    const createPost=()=>{
        return axios({
         method:'post',
         url:'http://127.0.0.1:8000/createpost/',
         data:{
          "BranchName":branchNew,
          "BranchImage":branchNewimage,
          "postName":postName,
          "postImage":branchNewimage,
          "totalPrice":totalPrice,
          "mainQuantity":postquantity,
          "off":off
        }
         }).then((res)=>{
           console.log(res.data);
         }).catch(
         err=>{
           console.log(err);
         })
       }

    const setModalValue=(item)=>{
        setModlaShow(true)
        setPostName(item.name)
        setId(item._id)
        setEmails(item.emails)
        setTotoalPrice(item.price)
        setPostquantity(item.mainQuantity)
       }
  return (
        <div className="row">
            <div style={{height:'100vh',width:'30%'}}>
            <nav id="sidebarMenu" style={{height:'80%',width:'100%'}} className="collapse d-lg-block sidebar collapse bg-white">
        <div className="position-sticky">
          <div className="list-group list-group-flush mx-3 mt-4">
            <Link to="#" className="list-group-item list-group-item-action active py-2 ripple" aria-current="true">
              <i className="fas fa-tachometer-alt fa-fw me-3"></i><span>Main dashboard</span>
            </Link>
            <Link to="#" className="list-group-item list-group-item-action py-2 ripple ">
              <i className="fas fa-chart-area fa-fw me-3"></i><span>Webiste traffic</span>
            </Link>
            <Link to="#" className="list-group-item list-group-item-action py-2 ripple"><i
                className="fas fa-lock fa-fw me-3"></i><span>Password</span></Link>
            <Link to="#" className="list-group-item list-group-item-action py-2 ripple"><i
                className="fas fa-chart-line fa-fw me-3"></i><span>Analytics</span></Link>
            <Link to="#" className="list-group-item list-group-item-action py-2 ripple">
              <i className="fas fa-chart-pie fa-fw me-3"></i><span>SEO</span>
            </Link>
            <Link to="#" className="list-group-item list-group-item-action py-2 ripple"><i
                className="fas fa-chart-bar fa-fw me-3"></i><span>Orders</span></Link>
            <Link to="#" className="list-group-item list-group-item-action py-2 ripple"><i
                className="fas fa-globe fa-fw me-3"></i><span>International</span></Link>
            <Link to="#" className="list-group-item list-group-item-action py-2 ripple"><i
                className="fas fa-building fa-fw me-3"></i><span>Partners</span></Link>
            <Link to="#" className="list-group-item list-group-item-action py-2 ripple"><i
                className="fas fa-calendar fa-fw me-3"></i><span>Calendar</span></Link>
            <Link to="#" className="list-group-item list-group-item-action py-2 ripple"><i
                className="fas fa-users fa-fw me-3"></i><span>Users</span></Link>
            <Link to="#" className="list-group-item list-group-item-action py-2 ripple"><i
                className="fas fa-money-bill fa-fw me-3"></i><span>Sales</span></Link>
          </div>
        </div>
      </nav>
            </div>
<div className='container' style={{overflowY:'scroll', height:'100vh',width:'70%',borderLeft:'1px solid'}}>
    <h1>Create Post</h1>
    <form className='p-3'>
  <div className="row">
    <div className="col">
      <input  type="text" onChange={e=>setbranchNew(e.target.value)} value={branchNew} name="branchNew" className="form-control" placeholder="Create new branch or choose from list"/>
    </div>
   
    <div className="col">
      <label className="mr-sm-2 sr-only" for="inlineFormCustomSelect">Preference</label>
      <select value={select} onChange={handleChange}  className="custom-select mr-sm-2" id="inlineFormCustomSelect">
        <option selected>Choose...</option>
        {data && data.map(item=>(
           <option key={item.id} value={item.branchName}>{item.branchName}</option>
        ))}
      </select>
    </div>
  </div>
  <div className="row mt-2">
  <div className="col">
    <label for="exampleFormControlFile1">Chose Image for branch</label>
    <input type="file" className="form-control-file" id="exampleFormControlFile1"/>
    </div>
  </div>
  <div className="row mt-2">
    <div className="col">
      <input type="text" value={postName} onChange={e=>setPostName(e.target.value)} className="form-control" placeholder="Post name"/>
    </div>
    <div className="col">
        <input type="number" value={totalPrice} onChange={e=>setTotoalPrice(e.target.value)} className="form-control" placeholder="Total Price"/>
    </div>
    <div className="col">
        <input type="number" value={off} onChange={e=>setOff(e.target.value)} className="form-control" placeholder="OFF"/>
    </div>
    <div className="col">
      <input type="number" value={postquantity} onChange={e=>setPostquantity(e.target.value)}  className="form-control" placeholder="Quantity"/>
    </div>
  </div>
  <div className="row mt-2">
  <div className="col">
    <label for="exampleFormControlFile1">Chose Image for Post</label>
    <input type="file" className="form-control-file" id="exampleFormControlFile1"/>
    </div>
  </div>
  <div className="row mt-2">
    <div className="col">
    <label for="exampleFormControlTextarea1">Details</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea> 
   </div>
  </div>
</form>
<button onClick={()=>createPost(branchNew,branchNewimage)} className='btn btn-primary'>Post Data</button>
  <hr />    
  <h2>Posts of Branches</h2>
    <div style={{
        display:'flex',
        flexDirection:'row',
        minHeight:'200px'
    }}>
       <Modal 
        postName={postName}
        emails={emails}
        id={id}
        setModlaShow={setModlaShow}
        setPostName={setPostName}
        setOff={setOff}
        setTotoalPrice={setTotoalPrice}
        setPostquantity={setPostquantity}
        postquantity={postquantity}
        off={off}
        totalPrice={totalPrice}        
         />
        {data && data.map(item=>(
          <div key={Math.random()} className='dropdown'>
           <button className={`btn text-white btn-${colors[Math.floor(Math.random(colors)*colors.length)]}  dropdown-toggle`}  id={item.id} data-bs-toggle="dropdown" aria-expanded="false">
                {item.branchName}
            </button>
            <div className="dropdown-menu" aria-labelledby={item.id}>
                {item.items.map(it=>(
                <span 
                key={Math.random()}
                onClick={()=>setModalValue(it)}
                data-bs-toggle="modal" 
                data-bs-target="#exampleModal" 
                className="dropdown-item">{it.name}</span>
                ))}
            </div>
            </div>
        ))}
    </div>
    </div>
    </div>
  )
}

export default AdminHome