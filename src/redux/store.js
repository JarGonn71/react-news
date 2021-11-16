import { configureStore } from '@reduxjs/toolkit'
import {newsReducer} from './slices/news'


export function makeStore() {
  return configureStore({
    reducer: { 
        news: newsReducer
    },
  })
}

export const store = makeStore()