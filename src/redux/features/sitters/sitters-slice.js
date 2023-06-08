import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {SITTERS_API} from "../../../api/sitter";
import {sitters} from "./sitters";

const getSitters = createAsyncThunk(
    'sitters/getSitters',
    async ({query}, thunkAPI) => {
    try {
        const response = await SITTERS_API.getSitters(query);
        return response.data;
    }catch (e) {
        const {message} = e.response.data;
        thunkAPI.rejectWithValue(message);
    }
});

const sittersSlice = createSlice({
    name: 'sitters',
    initialState: {
        sitters: [...sitters],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getSitters.pending, state => {
            state.loading = true;
            state.error = null;
        }).addCase(getSitters.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.sitters = action.payload.data;
        }).addCase(getSitters.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
});

const {reducer} = sittersSlice;

export const selectSitter = state => state.sitters;

export const SITTER_ACTION_CREATORS = {getSitters};

export default reducer;