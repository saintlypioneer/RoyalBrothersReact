import React, { useEffect } from 'react'
import { Grid,Stack,Text } from '@chakra-ui/react'
import CardComp from './CardComp'
import { useSelector } from 'react-redux'
import SkeletonComp from './SkeletonComp'

export default function HighToLow() {
  const highToLow = useSelector((store)=>store.searchReducer.cityData)
  const duration = useSelector((store)=>store.searchReducer.rentalDetails)
  const loading = useSelector((store)=> store.searchReducer.isLoading)

  const detailsHightoLowData = highToLow
    function sortHigh(a,b){
      return b.price - a.price
    }
    const highArray = detailsHightoLowData.sort(sortHigh);
    useEffect(()=>{

    },[duration])
  return (
    <Stack>
      <Text textAlign={"center"} mb='1rem' fontFamily={'Mulish'}>
        *All prices are exclusive of taxes and fuel. Images used for
        representation purposes only, actual color may vary.
      </Text>
      <Grid templateColumns={["repeat(1,1fr)","repeat(2,1fr)","repeat(2,1fr)","repeat(3,1fr)"]} gap={6}>
      {loading && <SkeletonComp/>}
        {highArray.map((ele, idx) => {
          return <CardComp {...ele} key={ele.id} {...duration}/>;
        })}
      </Grid>
    </Stack>
  );
}
