import { createSlice } from "@reduxjs/toolkit";
import { fetchContact } from "./contactsOps";

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
        })
    }
});


export const selectContacts = state => state.contacts.items;
export const contactsReducer = slice.reducer;
export const { deleteContact } = slice.actions;
export const { addContacts } = slice.actions;