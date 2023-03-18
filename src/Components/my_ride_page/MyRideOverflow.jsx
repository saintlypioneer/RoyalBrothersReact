import { Stack, Flex, Checkbox, Box, Divider } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOCATION_TAG_ADD,LOCATION_TAG_REMOVE } from "./redux/myride/actiontype";

export default function MyRideOverflow() {

  const locationData = useSelector((store)=>store.myRideReducer.vehicles);
  const dispatch = useDispatch();
  // const [isChecked,setIsChecked] = useState(false)


  const handleClick = (event,payload)=>{
    if(event.target.checked===true){
      dispatch({type:LOCATION_TAG_ADD,payload})
    }
    else{
      dispatch({
        type:LOCATION_TAG_REMOVE,
        payload
      })
    }
  }

  return (
    <Stack h={"100px"} overflow="auto" border={'1px solid #c1c1c1'}p="5px 0px">
      {locationData.map((ele,idx) => {
        return (
          <Flex
            alignItems={"center"}
            p="0px 25px"
            fontSize={"12px"}
            gap={3}
            h="25px"
            key={idx}
            _hover={{
              background: "#f2f2f2",
            }}
            borderBottom="1px solid #f2f2f2"
            fontFamily={"Mulish"}
            fontWeight='light'
          >
            <Checkbox border={"grey"} bg={"white"} size={"sm"} onChange={(e)=>handleClick(e,ele.location)}></Checkbox>
            {ele.location}
          </Flex>
        );
      })}
    </Stack>
  );
}
