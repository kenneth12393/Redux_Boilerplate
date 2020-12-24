import { combineReducers } from "redux"
import demoReducer from "./demoReducer" //all reducers imported here

export default combineReducers({
    demo: demoReducer //all reducers go here
})