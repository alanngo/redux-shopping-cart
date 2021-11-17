import { combineReducers } from "redux";
import shopReducer from '../redux/reducer/reducers'
const rootReducer = combineReducers(
    {
        shop: shopReducer,
    })

export default rootReducer