import { combineReducers } from "redux";
import shopReducer from './reducer/reducers'
const rootReducer = combineReducers(
    {
        shop: shopReducer,
    })

export default rootReducer