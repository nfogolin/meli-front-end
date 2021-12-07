/* Hacemos la combinación de los reducers */



import productsReducer from "./productsReducer";
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    searchResults : productsReducer
});

export default allReducers;