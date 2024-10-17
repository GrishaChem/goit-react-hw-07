import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

axios.defaults.baseURL = 'https://6710f98f4eca2acdb5f3065b.mockapi.io'

export const fetchContact = createAsyncThunk('fetchContact', async (_, thunkApi) => {
    try {
        const { data } = await axios.get('Contacts')
        return data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
});


