import { configureStore } from '@reduxjs/toolkit'

import logger from 'redux-logger'

import PostsReducer from './posts/PostsReducer'
import userReducer from './user/userreducer'
export default configureStore({
  reducer:{
    posts:PostsReducer,
    user:userReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})
