import {createSlice} from "@reduxjs/toolkit";

const authenticationSlice = createSlice({
    name: 'authentication',
    initialState: {
        data: {
            first_name: 'Pontifex',
            last_name: 'Maximus',
            email: 'pontifex.maximus@vatican.org',
            image: {
                secure_url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
            },
            username: 'pontifex'
        },
        token: ''
    },
    reducers: {},
    extraReducers: builder => {}
});

const {reducer} = authenticationSlice;

export const selectAuth = state => state.auth;
export const AUTH_ACTION_CREATORS = {};
export default reducer;