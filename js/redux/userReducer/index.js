import { combineReducers } from '@reduxjs/toolkit';
import { modelsDataReducer } from './ModelsData';


export const userReducer = combineReducers({
    modelsData:modelsDataReducer
})