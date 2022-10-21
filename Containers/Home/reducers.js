import * as Actions from "./types";


const Home = (state = {
    user: {name:"cool",lastName:"guy"},
}, action) => {
  switch(action.type){
    case Actions.SET_USER:
      return {
        ...state,
        user: action.payload
      };
    default:
      return {...state};
    }
}


export default Home;