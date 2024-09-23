import { configureStore } from '@reduxjs/toolkit'
import lmcReducer from './lmcSlice'

export const store = configureStore({
  reducer: {
    lmcData: lmcReducer
  },
})