import { createSlice } from "@reduxjs/toolkit";
import { deleteContact, fetchContact } from "./contactsOps";

const initialState = {
    items: [],
    loading: false,
    error: null
};

const slice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        deleteContact: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        },
        addContacts: (state, action) => {
            state.items.push(action.payload)
        },
    },
    extraReducers: builder => {
        builder.addCase(fetchContact.fulfilled, (state, action) => {
            state.items = action.payload
        }).addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload)
    })
    }
    

});


export const selectContacts = state => state.contacts.items;
export const contactsReducer = slice.reducer;