import { configureStore } from '@reduxjs/toolkit'
import pasteReducer from './Redux/pasteSlice.js' 

export default configureStore({
  reducer: {
    paste: pasteReducer,
  },
})