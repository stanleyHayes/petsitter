import {createSlice} from "@reduxjs/toolkit";
import {getStorage, setStorage} from "../../../utils/lib";
import {PET_SITTER_THEME_VARIANT_KEY} from "../../../utils/constants";

const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        theme: getStorage(PET_SITTER_THEME_VARIANT_KEY, 'dark'),
        drawerOpen: false,
        language: 'EN',
    },
    reducers: {
        toggleDrawer: state => {
            state.drawerOpen = !state.drawerOpen;
        },
        toggleTheme: state => {
            state.theme = state.theme === 'dark' ? 'light': 'dark';
            setStorage(PET_SITTER_THEME_VARIANT_KEY, state.theme);
        }
    }
});

const {reducer, actions} = uiSlice;
export const UI_ACTION_CREATORS = {toggleDrawer: actions.toggleDrawer, toggleTheme: actions.toggleTheme};
export const selectUI = state => state.ui;
export default reducer;