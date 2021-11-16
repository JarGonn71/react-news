import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  news: [],
  country: 'ru',
  category: '',
}


export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setNewsData: (state, action) => {
      state.news = action.payload
    },
    setNewsCountry: (state, action) => {
      state.country = action.payload
    },
    setNewsCategory: (state, action) => {
      state.category = action.payload
    },
    updateNewsData: (state, action) => {
      state.news = [...state.news, action.payload]
    }
  },
})

export const { setNewsData } = newsSlice.actions
export const { updateNewsData } = newsSlice.actions
export const { setNewsCountry } = newsSlice.actions
export const { setNewsCategory } = newsSlice.actions






export const newsReducer = newsSlice.reducer