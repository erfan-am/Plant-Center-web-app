import './App.css';
import Nav from './Components/Nav';
import Navbar from './Components/Navbar';
import { Routes,Route,useNavigate} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {syncData,choiceData,removeData,addchoice,decchoice} from './redux/posts/PostsReducer'
import Home from './Container/Home';
import Shop from './Container/Shop';
import Details from './Container/Details';
import Box from './Container/Box';
import {  useEffect, useState } from 'react';
import Login from './Container/Login';
import Singup from './Container/Singup';

function App() {
  // const [choices,setTools]=useState([])
  const [totalPrices,setTotalPrice]=useState(0)
  const [user,setUser]=useState(true)
  const navigate=useNavigate()
  const {data,choices}=useSelector(state=>state.posts)
  const dispatch=useDispatch()




useEffect(()=>{
  dispatch(syncData())
},[])

useEffect(()=>{
  setTotalPrice(0)
  for (let i in choices){
       setTotalPrice(totalPrices => totalPrices+ (choices[i].price * choices[i].quantity))
     }
  },[choices])

  const addTools=(item)=>{
    dispatch(choiceData({name:item.name,price:item.price,image:item.image,quantity:1,id:Math.random()}))
  }
  const removeItem=(item)=>{
   dispatch(removeData(item))
  }
  
  const addQuantity=(item)=>{
    dispatch(addchoice(item.id))
  }

  const decQuantity=(item)=>{
    if(item.quantity == 1){
      dispatch(removeData(item.id))
    }else{
    dispatch(decchoice(item))
    }
  }

  const onPay=()=>{
    user ? alert(`Ok wee send your orders`): navigate("/authentication/login")
    }
  return (
    <div className="">
    {/* <Nav choices={choices}/> */}
    <Navbar choices={choices}/>
      <Routes>
        <Route path='/' element={<Home data={data}/>} />
        <Route path='/shop' element={<Shop data={data}  addTools={addTools} />} />
        <Route path='/shop/:name' element={<Shop data={data} addTools={addTools} />} />
        <Route path='/authentication/login' element={<Login />} />
        <Route path='/authentication/signup' element={<Singup />} />
        <Route path='/shop/seeDetails/:name' element={<Details data={data} addTools={addTools} />} />
        <Route path='/box' element={<Box onPay={onPay} decQuantity={decQuantity} addQuantity={addQuantity} totalPrices={totalPrices} choices={choices} removeItem={removeItem} />} />
      </Routes>
    </div>
  );
}

export default App;
