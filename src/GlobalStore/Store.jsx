import { configureStore } from "@reduxjs/toolkit";
import themeReducer from './ThemeSlicer'

export const Store = configureStore({
    reducer:{
        theme : themeReducer
    }
})