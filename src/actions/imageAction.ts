import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { CONFIG } from '../helpers/constants'

export const actionTypes = {
  IMAGE: 'image/fetchImages',
}

export const fetchImages = createAsyncThunk(
  actionTypes.IMAGE,
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios(CONFIG)
      return response.data
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)
