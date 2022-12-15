import { createAsyncThunk } from "@reduxjs/toolkit"
import httpClient from '../controllers/httpClient';
import { LOGIN } from '../helpers/constants';

export const actionTypes = {
    LOGIN: "user/LOGIN",
    LOGOUT: "user/LOGOUT",
}

type EmailProps = {
    email: string,
    password: string
}

export const login = createAsyncThunk(actionTypes.LOGIN, async ({email, password}: EmailProps, { rejectWithValue }) => {
    console.log(email, password)
    try {
        const response = await httpClient.post(LOGIN, {email, password})
        return response.data
    }
    catch(error) {
        return rejectWithValue(error)
    }
})