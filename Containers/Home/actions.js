import * as Actions from "./types";

export const setUser = (name) => dispatch => {
  dispatch({
    type: Actions.SET_USER,
    payload: name
  });
}