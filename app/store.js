import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import imagerReducer from '../features/counter/imagerSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    imager: imagerReducer,
  },
})