import {combineReducers} from "redux";
import userReducer from "../features/auth/reducers/userReducer";
import fileReducer from "../features/files/reducers/fileReducer";
import uploadReducer from "../features/files/reducers/uploadReducer";
import {configureStore} from "@reduxjs/toolkit";


const rootReducer = combineReducers({
    user: userReducer,
    files: fileReducer,
    upload: uploadReducer,
    // app: appReducer
})

export const store = configureStore({
    reducer: rootReducer, middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
    })
})