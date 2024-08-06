import {configureStore} from '@reduxjs/toolkit';
import addReducer from '../features/AddSlice';

const Store = configureStore({
    reducer:{
        todos : addReducer
    }
})

export default Store;