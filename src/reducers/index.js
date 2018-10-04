// @flow
import { combineReducers } from 'redux';
import addVideo from './addVideo';
import getVideos from './getVideos';

const rootReducer = combineReducers({
  addVideo,
  getVideos
});

export default rootReducer;
