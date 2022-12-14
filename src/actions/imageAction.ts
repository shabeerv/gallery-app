import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const apiRoot = "https://api.unsplash.com"
const accessKey = process.env.REACT_APP_ACCESSKEY

export const actionTypes = {
    IMAGE: "image/fetchImages",
  };

export const fetchImages = createAsyncThunk(actionTypes.IMAGE, async (_, { rejectWithValue }) => {
    const config = {
        method: "GET",
        url: `${apiRoot}/photos/random`,
        params: {
            count: 8
        },
        headers: {
            Authorization: `Client-ID ${accessKey}`
        },
    }
    try{        
        const response = await axios(config)
        // console.log(response)
        // console.log(response.data)
        // console.log(response.data.length)
        return response.data;
    }
    catch(error) {
        //console.log(error.message)
       return rejectWithValue(error);
    }
})