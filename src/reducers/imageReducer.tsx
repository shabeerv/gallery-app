import { createSlice } from '@reduxjs/toolkit'
import { fetchImages } from '../actions/imageAction'

const initialState = {
  images: [],
}

const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchImages.fulfilled, (state, action) => {
      state.images = action.payload
    })
  },
})

export default imageSlice.reducer
