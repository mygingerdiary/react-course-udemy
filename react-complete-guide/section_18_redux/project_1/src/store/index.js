import {configureStore} from '@reduxjs/toolkit';
// const redux = require('redux');

import counterReducer from "./counter";
import authReducer from "./auth";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer,
    }
});

// const store = redux.createStore(counterSlice.reducer);

export default store;