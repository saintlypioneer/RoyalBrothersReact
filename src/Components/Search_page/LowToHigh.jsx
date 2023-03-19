import React, { useEffect } from "react";
import { Grid, Stack, Text } from "@chakra-ui/react";
import CardComp from "./CardComp";
import { useDispatch, useSelector } from "react-redux";
import SkeletonComp from "./SkeletonComp";
// import { sortingFunction } from "../../Redux/search/action";

export default function LowToHigh() {
  const LowToHigh = useSelector((store) => store.searchReducer.cityData);
  const duration = useSelector((store)=>store.searchReducer.rentalDetails)
  const loading = useSelector((store)=> store.searchReducer.isLoading)
  const filterData = useSelector((store)=>store.searchReducer.filterData)
  let sortHighToLowFilterData = filterData;
  function sortLow(a,b){
    return a.price - b.price;
  }

  const lowArray = LowToHigh.sort(sortLow);
  const sortFilteredData = sortHighToLowFilterData.sort(sortLow)
  useEffect(()=>{

  },[duration,filterData])
  
  return (
    <Stack>
      <Text textAlign={"center"} mb="1rem" fontFamily={"Mulish"}>
        *All prices are exclusive of taxes and fuel. Images used for
        representation purposes only, actual color may vary.
      </Text>
      <Grid
        templateColumns={[
          "repeat(1,1fr)",
          "repeat(2,1fr)",
          "repeat(2,1fr)",
          "repeat(3,1fr)",
        ]}
        gap={6}
      >
        {loading && <SkeletonComp/>}
        {sortFilteredData.length>0 ? sortFilteredData.map((ele)=>{
          return <CardComp {...ele} key={ele.id} {...duration}/>
        }) :lowArray.map((ele, idx) => {
          return <CardComp {...ele} key={ele.id} {...duration}/>;
        })}
      </Grid>
    </Stack>
  );
}
