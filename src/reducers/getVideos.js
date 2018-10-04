// @flow
import {
    GET_VIDEO
  } from '../constants/ActionTypes';
  
  export default function getVideos(
    state={},
    action
  ) {
    switch (action.type) {
      case GET_VIDEO:
      return Object.assign({}, state, {getVideos:action.data  });
  
      default:
        return state
    }
  };
  