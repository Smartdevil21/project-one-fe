import {combineReducers} from "@reduxjs/toolkit";
import { counterReducer } from "@/store/reducers/counter.reducer";

const combinedReducers = combineReducers({
    counter: counterReducer
})

export {combinedReducers}