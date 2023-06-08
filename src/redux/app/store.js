import {configureStore} from "@reduxjs/toolkit";
import uiReducer from "./../features/ui/ui-slice";
import authReducer from "./../features/authentication/authentication-slice";
import sitterReducer from "./../features/sitters/sitters-slice";

const store = configureStore({
    reducer: {
        ui: uiReducer,
        sitters: sitterReducer,
        auth: authReducer
    }
});

export default store;