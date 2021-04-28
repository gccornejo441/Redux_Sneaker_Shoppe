import { createStore, combineReducers } from "React";
import homePageReducer from "../container/reducers";

const reducers = combineReducers({ homepage });

export default createStore(reducers);