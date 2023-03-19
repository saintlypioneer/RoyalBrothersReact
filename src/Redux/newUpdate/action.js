import axios from "axios";
import { HIGHT_TO_LOW, LOW_TO_HIGH } from "./actionType";
const url = "https://updatedroyalbrothers-api.onrender.com/banglore";

export const sortFunction = (payload) => (dispatch) => {
  axios
    .get(`${url}?_sort=price&_order=${payload}`)
    .then((res) => dispatch({ type: LOW_TO_HIGH, payload: res.data }))
    .catch((e) => console.log(e));
};

export const sortHighFunction = (payload) => (dispatch) => {
  axios
    .get(`${url}?_sort=price&_order=${payload}`)
    .then((res) => dispatch({ type: HIGHT_TO_LOW, payload: res.data }))
    .catch((e) => console.log(e));
};

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Bike Search Filter >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

export const bikeFilterFunction = (bikeFilter, dataArrayCity) => (dispatch) => {
  console.log("Ander aaya", bikeFilter);
  const result = dataArrayCity.filter((ele) => {
    return bikeFilter.includes(ele);
  });
  console.log(result);
};
