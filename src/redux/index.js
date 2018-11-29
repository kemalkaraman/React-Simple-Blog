import reducer from './reducers';
import {combineReducers} from "redux"
import products from "../redux/reducers/productReducer";

const reducersCombined = combineReducers({
    reducer,products
 
})
export default reducersCombined;