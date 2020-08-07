import { combineReducers } from "redux";
import { useReducer } from "react";

const leaguesReducer = (state= null, action) => {
    switch(action.type){
   
    default:
         return state
    }
}

const userReducer = (state=null, action) => {
    switch(action.type){
        case "NEW_USER":
            return action.payload
        default:
            return state
    }
}

const leagueReducer = (state= null, action) => {
    switch(action.type){
        case "SET_CURRENT_LEAGUE":
            return action.payload
        default:
            return state
    }
}


const rootReducer = combineReducers({
    leagues: leaguesReducer,
    currentUser: userReducer,
    currentLeague: leagueReducer
  });
  
  export default rootReducer;