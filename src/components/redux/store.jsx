import { createStore, applyMiddleware, combineReducers } from "redux";
import { DrawerRedusor } from "./drawerreducer";


const reducer = combineReducers({
  drawerReducer: DrawerRedusor,
});
const store = createStore(reducer);

export default store