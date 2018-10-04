// @flow
import {
  ADD_VIDEO
} from '../constants/ActionTypes';

export default function addVideo(
  state={},
  action
) {
  switch (action.type) {
    case ADD_VIDEO:
    return Object.assign({}, state, {add:action.text  });

    default:
      return state
  }
};
