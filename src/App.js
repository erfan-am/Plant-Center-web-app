import './App.css';
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
import { getToken, getUserTokenDecode, LogoutValidate } from './redux/user/userreducer';
import UserInformation from './Container/UserInformation';

function App() {

  // const [choices,setTools]=useState([])
  const [totalPrices,setTotalPrice]=useState(0)
  const navigate=useNavigate()
  const {data,choices}=useSelector(state=>state.posts)
  const {user,tokens}=useSelector(state=>state.user)
  const dispatch=useDispatch()
  console.log(tokens);
  useEffect(()=>{
      dispatch(getToken(localStorage.getItem('ddd') ? JSON.parse(localStorage.getItem('ddd')) : null))
  },[])
  // localStorage.removeItem('ddd')

useEffect(()=>{
    dispatch(getUserTokenDecode(tokens))
},[])

useEffect(()=>{
  dispatch(syncData())
},[])

useEffect(()=>{
  setTotalPrice(0)
  for (let i in choices){
       setTotalPrice(totalPrices => totalPrices+ (choices[i].price * choices[i].quantity))
     }
  },[choices])



  let updateToken=async()=>{
   if(tokens !==null){
    let response=await fetch('http://127.0.0.1:8000/api/token/refresh/',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({'refresh':tokens?.refresh})
    })
    let data=await response.json()
    if(response.status === 200){
      dispatch(getToken(data))
      dispatch(getUserTokenDecode(data))
      localStorage.setItem('ddd',JSON.stringify(data))
    }else{
      console.log('wrong');
      dispatch(logOut())
    }
   }
  } 

  useEffect(()=>{
    let twoMin=4000
      let interval=setInterval(()=>{
       updateToken()
      },twoMin)
      return ()=>clearInterval(interval)
  },[tokens])


  // ############################
  const logOut=()=>{
    localStorage.removeItem('ddd')
    dispatch(LogoutValidate(null))
    navigate('authentication/login')
  }
  // #####################

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
    user ? alert(`Ok we send your orders`): navigate("/authentication/login")
    }
  return (
    <div className="">
    {/* <Nav choices={choices}/> */}
    <Navbar user={user} choices={choices} logOut={logOut} />
      <Routes>
        <Route path='/' element={<Home data={data}/>} />
        <Route path='/shop' element={<Shop data={data}  addTools={addTools} />} />
        <Route path='/shop/:name' element={<Shop data={data} addTools={addTools} />} />
        <Route path='/authentication/login' element={<Login />} />
        <Route path='/user/:username' element={<UserInformation user={user} />} />
        <Route path='/authentication/signup' element={<Singup />} />
        <Route path='/shop/seeDetails/:name' element={<Details data={data} addTools={addTools} />} />
        <Route path='/box' element={<Box onPay={onPay} decQuantity={decQuantity} addQuantity={addQuantity} totalPrices={totalPrices} choices={choices} removeItem={removeItem} />} />
      </Routes>
    </div>
  );
}

export default App;
