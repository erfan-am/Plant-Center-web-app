import './App.css';
import Nav from './Components/Nav';
import { Routes,Route,useNavigate} from 'react-router-dom'
import Home from './Container/Home';
import Shop from './Container/Shop';
import Details from './Container/Details';
import Box from './Container/Box';
import {  useEffect, useState } from 'react';
import Login from './Container/Login';
import Singup from './Container/Singup';
function App() {
  const [tools,setTools]=useState([])
  const [totalPrices,setTotalPrice]=useState(0)
  const [user,setUser]=useState(true)
  const navigate=useNavigate()
useEffect(()=>{
  setTotalPrice(0)
  for (let i in tools){
       setTotalPrice(totalPrices => totalPrices+ (tools[i].price * tools[i].quantity))
     }
  },[tools])
  console.log(tools);
  console.log(totalPrices);
 
  const addTools=(item)=>{
    if(tools.find(it=>it.name === item.name)){
      return tools
    }
    setTools([...tools,{name:item.name,price:item.price,img:item.img,quantity:1}])
  }
  const removeItem=(item)=>{
    setTools(tools =>
      tools.filter(tool => {
        return tool !== item;
      }), )
  }

  const addQuantity=(item)=>{
   const newState=tools.map(obj=>{
    if(obj == item){
      return {...obj,  quantity:obj.quantity + 1}
    }
    return obj
   })
   setTools(newState)
  }
  const decQuantity=(item)=>{
    if(item.quantity == 1){
      removeItem(item)
    } 
    else{
    const newState=tools.map(obj=>{
    if(obj == item){
      return {...obj,  quantity:obj.quantity - 1}
    }
    return obj
  })
  setTools(newState)
    }}

    const onPay=()=>{
    user ? alert(`Ok wee send your orders`): navigate("/authentication/login")
    }
  return (
    <div className="">
    <Nav tools={tools}/>
      <Routes>

        <Route path='/' element={<Home/>} />
        <Route path='/shop' element={<Shop  addTools={addTools} />} />
        <Route path='/shop/:name' element={<Shop addTools={addTools} />} />
        <Route path='/authentication/login' element={<Login />} />
        <Route path='/authentication/signup' element={<Singup />} />
        <Route path='/shop/seeDetails/:name' element={<Details addTools={addTools} />} />
        <Route path='/box' element={<Box onPay={onPay} decQuantity={decQuantity} addQuantity={addQuantity} totalPrices={totalPrices} tools={tools} removeItem={removeItem} />} />
      </Routes>
    </div>
  );
}

export default App;
