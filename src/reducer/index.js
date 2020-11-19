import { combineReducers } from "redux";
import { shoppingCartReducer } from './shoppingCartReducer';
import { productDetailsReducer } from './productDetailsReducer';
import { menuReducer } from './menuReducer';


export default combineReducers({
    shoppingCartReducer,
    productDetailsReducer,
    menuReducer
});