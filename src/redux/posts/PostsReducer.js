import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
const URL="http://127.0.0.1:8000/";
const initialState={
    data:null,
    loading:false,
    choices:[]
}

export const syncData=createAsyncThunk("PostsReducer/syncData",async()=>{
   const res= await fetch('http://127.0.0.1:8000/branch')
    const data=await res.json()
    if(res.status ===200){
        console.log(data);
        return data
    }else{
        throw "no conection"
    }
})

const PostsReducer=createSlice({
    name:'PostsReducer',
    initialState,
    reducers:{
      choiceData:(state,action)=>choiceDataItem(state,action),
      removeData:(state,action)=>removeTools(state,action),
      addchoice:(state,action)=>addchoiceItem(state,action),
      decchoice:(state,action)=>decchoiceItem(state,action),
      removeallchoices:(state,action)=>{
        return{
            ...state,
            choices:[]
        }
      },
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


export const {choiceData,removeData,addchoice,decchoice,removeallchoices}=PostsReducer.actions;
export default PostsReducer.reducer;



// ##########################
// 
const choiceDataItem=(state,action)=>{
   
    if(state.choices.find(it=>it.name === action.payload.name)){
      return {
        ...state
    }
    }
    return {
        ...state,
        choices:[...state.choices,action.payload]
    }
  }

  const removeTools=(state,acttion)=>{
    return{
        ...state,
        choices:state.choices.filter(it=>it.id !== acttion.payload)
    }
  }

const addchoiceItem=(state,action)=>{
    const newState=state.choices.map(obj=>{
     if(obj.id == action.payload){
       return {...obj,  quantity:obj.quantity + 1}
     }
     return obj
    })
    return{
        ...state,
        choices:newState
    }
}



const decchoiceItem=(state,action)=>{
    const newState=state.choices.map(obj=>{
        if(obj.id == action.payload.id){
            return {...obj,  quantity:action.payload.quantity - 1}}
        return obj
        })
    return{
        ...state,
        choices:newState
}
}


   