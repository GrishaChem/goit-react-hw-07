import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [{ id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },],
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
});


export const selectContacts = state => state.contacts.items;
export const contactsReducer = slice.reducer;
export const { deleteContact } = slice.actions;
export const { addContacts } = slice.actions;