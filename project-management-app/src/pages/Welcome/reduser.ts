import React from "react";
const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
  id: null,
  name: null,
  login: null,
  //isFetching: false,
}

const authReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data
      }
      default:
        return state;
  }
}

export const setUserData = (id, name, login) => ({type: SET_USER_DATA, data: {id, name, login}});
export default authReduser;
