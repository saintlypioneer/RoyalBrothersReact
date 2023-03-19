import React from 'react'
import { HIGHT_TO_LOW, LOW_TO_HIGH } from './actionType';

let initialState ={
    lowToHigh : [],
    highToLow : []
}

export default function sortNfilterReducer(state=initialState,{type,payload}) {
  switch(type){
    case LOW_TO_HIGH:
    return{
        ...state,
        lowToHigh:payload
    }
    case HIGHT_TO_LOW:
    return{
        ...state,
        highToLow:payload
    }
    default:
        return state;
  }
}
