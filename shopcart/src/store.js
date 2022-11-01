import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './redux/reducer/main';

let store = configureStore(
    rootReducer
);

export default store;