import { Grid, Stack, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import CardComp from "./CardComp";
import {useDispatch, useSelector} from 'react-redux'
import { getData } from "../../Redux/search/action";
import SkeletonComp from "./SkeletonComp";
import { useSearchParams } from "react-router-dom";
// import { sortingFunction } from "../../Redux/search/action";

export default function Relevance() {
  const cityData = useSelector((store)=> store.searchReducer.cityData)
  const loading = useSelector((store)=> store.searchReducer.isLoading)
  const duration = useSelector((store)=>store.searchReducer.rentalDetails)
  const dispatch = useDispatch();
// console.log(duration);
  useEffect(()=>{
    dispatch(getData())
  },[dispatch,duration])
  return (
    <Stack>
      <Text textAlign={"center"} mb='1rem'>
        *All prices are exclusive of taxes and fuel. Images used for
        representation purposes only, actual color may vary.
      </Text>
      <Grid templateColumns={["repeat(1,1fr)","repeat(2,1fr)","repeat(2,1fr)","repeat(3,1fr)"]} gap={6}>
        {loading && <SkeletonComp/>}
        {cityData.map((ele) => {
          return <CardComp {...ele} key={ele.id} {...duration}/>;
        })}
      </Grid>
    </Stack>
  );
}

