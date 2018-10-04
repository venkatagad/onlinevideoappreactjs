// @flow
import * as types from '../constants/ActionTypes';
import axios from 'axios';

const mock= {"videodetails":[{"budjet":100,"discription":"After Gordon, Dent  organised ","heroin":"NA","release_date":"20-10-2016","director":"Christopher Nolan","name":"The Dark Knight","produced_by":"DC Comics","language":"English","hero":"Joker","id":1,"category":"premium"},{"budjet":10,"discription":"After , Dent  organised ","heroin":"NA","release_date":"20-10-216","director":"Chrtopher Nolan","name":"The  Knight","produced_by":"DC Comics","language":"English","hero":"Jokr","id":5,"category":"premium"},{"budjet":10,"discription":"After , Dent  organised ","heroin":"NA","release_date":"20-10-216","director":"Chrtopher Nolan","name":"The  Knight","produced_by":"DC Comics","language":"English","hero":"Jokr","id":7,"category":"premium"},{"budjet":100,"discription":"After Gordon, Dent  organised ","heroin":"NA","release_date":"20-10-2016","director":"Christopher Nolan","name":"The Dark Knight","produced_by":"DC Comics","language":"English","hero":"Joker","id":2,"category":"free"},{"budjet":100,"discription":"After Gordon, Dent  organised ","heroin":"NA","release_date":"20-10-2016","director":"Christopher Nolan","name":"The Dark Knight","produced_by":"DC Comics","language":"English","hero":"Joker","id":3,"category":"tier1"},{"budjet":10,"discription":"After , Dent  organised ","heroin":"NA","release_date":"20-10-216","director":"Chrtopher Nolan","name":"The  Knight","produced_by":"DC Comics","language":"Spanish","hero":"Jokr","id":4,"category":"premium"},{"budjet":10,"heroin":"NA","release_date":"20-10-216","director":"Chrtopher Nolan","name":"The  Knight","produced_by":"DC Comics","language":"Spanish","hero":"Jokr","id":6,"category":"free"}]};

const baseUrl = "http://localhost:8080/video"

export const getVideos = () => (dispatch) => {

return axios.get(`${baseUrl}/getJsonResponce`)
  .then(function (response) {
    // handle success
    console.log('response', response.data);
    console.log(response)
    dispatch({ type: types.GET_VIDEO, data:response.data })
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
};



export const addVideo = (obj) => (dispatch) => {

return	axios.post(`${baseUrl}/videoaddjson`, obj)
  .then(function (response) {
  	dispatch({ type: types.ADD_SUCCESS })
    alert('successfully added')
  })
  .catch(function (error) {
    console.log(error);
  });

};

export const updateVideos = (obj) => (dispatch) => {

return	axios.post(`${baseUrl}/videoaddjson`, obj)
  .then(function (response) {
  	dispatch({ type: types.UPDATE_SUCCESS })
    alert('successfully updated')
  })
  .catch(function (error) {
    console.log(error);
  });

};