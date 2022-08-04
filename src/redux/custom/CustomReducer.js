import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
const URL="http://127.0.0.1:8000/";
const initialState={
    customs:null,
}

export const orderData=createAsyncThunk("CustomReducer/orderData",async()=>{
    const res= await fetch('http://127.0.0.1:8000/getorders')
    const data=await res.json()
    if(res.status ===200){
        console.log(data);
        return data
    }else{
        throw "no conection"
    }
})

const CustomReducer=createSlice({
    name:'CustomReducer',
    initialState,
    reducers:{
   
    },
    extraReducers:{
        [orderData.pending]:(state)=>{
        },
        [orderData.fulfilled]:(state,action)=>{
            state.customs=action.payload
        },
        [orderData.rejected]:(state)=>{
        }
    }
})


export const {}=CustomReducer.actions;
export default CustomReducer.reducer;






   