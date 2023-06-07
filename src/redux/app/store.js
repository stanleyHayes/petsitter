import {configureStore} from "@reduxjs/toolkit";
import uiReducer from "./../features/ui/ui-slice";
import sitterReducer from "./../features/sitters/sitters-slice";

const store = configureStore({
    reducer: {
        ui: uiReducer,
        setters: sitterReducer
    }
});

export default store;