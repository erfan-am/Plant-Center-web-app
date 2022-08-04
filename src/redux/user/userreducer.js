import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import jwtDecode from 'jwt-decode';

const initialState={
    loading:false,
    user:null,
    tokens:null
}


const userreducer=createSlice({
    name:'userreducer',
    initialState,
    reducers:{
    getToken:(state,action)=>{
        return{
            ...state,
            tokens:action.payload,
        }
        },
      getUserTokenDecode:(state,action)=>{
        return{
            ...state,
            user:action.payload && jwtDecode(action.payload.access)
        }
      },
      LogoutValidate:(state)=>{
        return{
            ...state,
            user:null,
            tokens:null
        }
      }
    },
    extraReducers:{
     
    }
})


export const {getUserTokenDecode,LogoutValidate,getToken}=userreducer.actions;
export default userreducer.reducer;

