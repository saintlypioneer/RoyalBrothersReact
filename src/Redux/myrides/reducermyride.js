import { ADD_MYRIDES, BIKE_TAG_ADD, BIKE_TAG_REMOVE, ERROR_MYRIDES, LOCATION_TAG_ADD, LOCATION_TAG_REMOVE, REQUEST_MYRIDES } from "./actiontype"

const initState=
    {
        'vehicles' : [],
        'loading' : false,
        'error':false,
        'locationTags': [],
        'bikeTags': []
    }

export const myRideReducer=(state=initState,action)=>{
        
    if(action.type===REQUEST_MYRIDES){
        return {
            ...state,loading:true
        }
    }
    else if(action.type===ADD_MYRIDES){
        return{
            ...state,vehicles:action.payload,loading:false
        }
    }else if(action.type===ERROR_MYRIDES){
        return{
            ...state,error:true
        }
    }
    
    
    else if(action.type===LOCATION_TAG_ADD){
        return{
            ...state,locationTags:[...state.locationTags,action.payload]
        }
    }
    else if(action.type===LOCATION_TAG_REMOVE){
        return {
            ...state,
            locationTags: state.locationTags.filter((ele) => ele !== action.payload),
          };
    }



    else if(action.type===BIKE_TAG_ADD){
        return {
            ...state,
            bikeTags: [...state.bikeTags, action.payload],
          };
    }
    else if(action.type===BIKE_TAG_REMOVE){
        return {
            ...state,
            bikeTags: state.bikeTags.filter((ele) => ele !== action.payload),
          };
    }


    return state
}