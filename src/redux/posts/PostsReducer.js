import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const URL="http://127.0.0.1:8000/";
const initialState={
    data:null,
    loading:false,
}

export const syncData=createAsyncThunk("PostsReducer/syncData",async()=>{
    const {data}=await axios.get(URL+'postBranch/')
    return data
})

const PostsReducer=createSlice({
    name:'PostsReducer',
    initialState,
    reducers:{
      
    },
    extraReducers:{
        [syncData.pending]:(state)=>{
            state.loading=true
        },
        [syncData.fulfilled]:(state,action)=>{
            state.loading=false
            state.data=action.payload
        },
        [syncData.rejected]:(state)=>{
            state.loading=false
        }
    }
})


// export const {}=PostsReducer.actions;
export default PostsReducer.reducer;
