import {
  GET_DATA_FAILURE,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  RENTAL_DETAILS_ERROR,
  RENTAL_DETAILS_REQUEST,
  RENTAL_DETAILS_SUCCESS,
  SET_DURATION
} from "./actionType";
import axios from "axios";

const url = "https://updatedroyalbrothers-api.onrender.com";

export const getData = () => (dispatch) => {
  dispatch({ type: GET_DATA_REQUEST });
  axios
    .get(`${url}/banglore`)
    .then((res) => {
      dispatch({
        type: GET_DATA_SUCCESS,
        payload: res.data,
      });
      console.log(res);
    })
    .catch((e) => dispatch({ type: GET_DATA_FAILURE }));
};

//put request to change pickup and drop off time

export const rentalDateAndTimeFunction = (payload) => (dispatch) => {
  dispatch({ type: RENTAL_DETAILS_REQUEST });
  axios
    .put(`${url}/rentalDetails`, payload)
    .then((res) => {
      dispatch({
        type: RENTAL_DETAILS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((e) => dispatch({ type: RENTAL_DETAILS_ERROR }));
};

//<<<<<<<<<<<<<<<<<<<<<<<<< duration function >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

export const findingDfferenceFunction = (payload) => (dispatch) => {
  let pickDate = payload.pickupDate;
  let dropDate = payload.dropoffDate;
  let pickTime = payload.pickupTime;
  let dropTime = payload.dropoffTime;

  var pickDatetime = new Date(pickDate + " " + pickTime);
  var dropDatetime = new Date(dropDate + " " + dropTime);

  var time_difference_ms = dropDatetime.getTime() - pickDatetime.getTime();

  var days = Math.floor(time_difference_ms / (1000 * 60 * 60 * 24));
  var hours = Math.floor(
    (time_difference_ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes = Math.floor(
    (time_difference_ms % (1000 * 60 * 60)) / (1000 * 60)
  );

  let durationDetails = {
    days,
    hours,
    minutes
  }
  dispatch({type:SET_DURATION,payload:durationDetails})
};
