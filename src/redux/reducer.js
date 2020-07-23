import { combineReducers } from "redux";

const leaguesReducer = (state= null, action) => {
    switch(action.type){
   
    default:
         return state
    }
}


const rootReducer = combineReducers({
    leagues: leaguesReducer
  });
  
  export default rootReducer;