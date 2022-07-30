import { configureStore } from '@reduxjs/toolkit'

import logger from 'redux-logger'

import PostsReducer from './posts/PostsReducer'
export default configureStore({
  reducer:{
    posts:PostsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})
