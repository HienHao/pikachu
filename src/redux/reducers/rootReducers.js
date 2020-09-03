import { combineReducers } from 'redux';
import PikachuReducer from "./PikachuReducer";

const RootReducer = combineReducers({
    PikachuReducer,
})

export default RootReducer;