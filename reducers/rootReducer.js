import * as t from "./types";
import {combineReducers} from "redux"
import homeReducer from "../Containers/Home/reducers";

const main = (state = {
}, action) => {
  switch(action.type){
    case t.GENERIC_ACTION:
      return { 
        ...state,
        actionValue: action.payload
      };
    default:
      return {...state};
    }
}






const reducers = {main,homeReducer}



export default combineReducers(reducers);