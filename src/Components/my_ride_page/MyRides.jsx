import { Box, Button, Card, CardBody, Flex, Grid, Link, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import MyRideFilter from './MyRideFilter';
import RideCard from './RideCard';

function MyRides(props) {
    const[data,setData]=useState([]);

    const dataArr=[{
        'vehicle':'Honda Activa 5G DELUXE',
        'image':'https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/268/medium/HONDA_ACTIVA_5G.png?1660805373',
        'timefrom':'10:00 am',
        'datefrom':'17 Mar 2023',
        'timeto':'09:30 am',
        'dateto':'25 Mar 2023',
        'location':'YMCA Cross Road (Near HDFC Bank)',
        'amount':'2887',
        'km':'611',
        'status':'completed'
},
{
    'vehicle':'Honda CB Hornet 160',
    'image':'https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/151/medium/HONDA_HORNET_160.png?1660730840',
    'timefrom':'10:00 am',
    'datefrom':'17 Mar 2023',
    'timeto':'09:30 am',
    'dateto':'25 Mar 2023',
    'location':'YMCA Cross Road (Near HDFC Bank)',
    'amount':'3002',
    'km':'611',
    'status':'pending'

},
{
    'vehicle':'Honda Unicorn 150',
    'image':'https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/062/medium/HONDA_UNICORN_150.png?1660727098',
    'timefrom':'10:00 am',
    'datefrom':'17 Mar 2023',
    'timeto':'09:30 am',
    'dateto':'25 Mar 2023',
    'location':'YMCA Cross Road (Near HDFC Bank)',
    'amount':'',
    'km':'611',
    'status':'completed'

},
{
    'vehicle':'Honda X Blade',
    'image':'https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/267/medium/HONDA_X-BLADE.png?1660733037',
    'timefrom':'10:00 am',
    'datefrom':'17 Mar 2023',
    'timeto':'09:30 am',
    'dateto':'25 Mar 2023',
    'location':'YMCA Cross Road (Near HDFC Bank)',
    'amount':'3003',
    'km':'611',
    'status':'pending'

},
{
    'vehicle':'TVS Ntorq 125',
    'image':'https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/257/medium/TVS_NTORQ_125.png?1660732837',
    'timefrom':'10:00 am',
    'datefrom':'17 Mar 2023',
    'timeto':'09:30 am',
    'dateto':'25 Mar 2023',
    'location':'YMCA Cross Road (Near HDFC Bank)',
    'amount':'3241',
    'km':'611',
    'status':'completed'

},
{
    'vehicle':'Yamaha FZ V3',
    'image':'https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/248/medium/YAMAHA_FZ_V3.png?1660732450',
    'timefrom':'10:00 am',
    'datefrom':'17 Mar 2023',
    'timeto':'09:30 am',
    'dateto':'25 Mar 2023',
    'location':'YMCA Cross Road (Near HDFC Bank)',
    'amount':'3363',
    'km':'611',
    'status':'completed'

},
{
    'vehicle':'Royal Enfield Classic 350',
    'image':'https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/007/medium/ROYAL_ENFIELD_CLASSIC_350.png?1660720171',
    'timefrom':'10:00 am',
    'datefrom':'17 Mar 2023',
    'timeto':'09:30 am',
    'dateto':'25 Mar 2023',
    'location':'YMCA Cross Road (Near HDFC Bank)',
    'amount':'9235',
    'km':'611',
    'status':'pending'

},
{
    'vehicle':'Bajaj Pulsar NS200',
    'image':'https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/076/medium/BAJAJ__PULSAR_200NS.png?1660727897',
    'timefrom':'10:00 am',
    'datefrom':'17 Mar 2023',
    'timeto':'09:30 am',
    'dateto':'25 Mar 2023',
    'location':'YMCA Cross Road (Near HDFC Bank)',
    'amount':'3953',
    'km':'611',
    'status':'completed'

},
{
    'vehicle':'Honda Activa 6G',
    'image':'https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/272/medium/Activa-6G.png?1666077785',
    'timefrom':'10:00 am',
    'datefrom':'17 Mar 2023',
    'timeto':'09:30 am',
    'dateto':'25 Mar 2023',
    'location':'YMCA Cross Road (Near HDFC Bank)',
    'amount':'4213',
    'km':'611',
    'status':'completed'

},
{
    'vehicle':'Honda Dio',
    'image':'https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/035/medium/HONDA_DIO.png?1660722410',
    'timefrom':'10:00 am',
    'datefrom':'17 Mar 2023',
    'timeto':'09:30 am',
    'dateto':'25 Mar 2023',
    'location':'YMCA Cross Road (Near HDFC Bank)',
    'amount':'2887',
    'km':'611',
    'status':'completed'

},
{
    'vehicle':'Royal Enfield Thunderbird 350X',
    'image':'https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/230/medium/ROYAL_ENFIELD_THUNDERBIRD_350X.png?1660728994',
    'timefrom':'10:00 am',
    'datefrom':'17 Mar 2023',
    'timeto':'09:30 am',
    'dateto':'25 Mar 2023',
    'location':'YMCA Cross Road (Near HDFC Bank)',
    'amount':'9235',
    'km':'611',
    'status':'pending'

}
];
    return (
        <Box m={5}
        >
            <Button m={5}
            onClick={()=>{
                setData(dataArr)
            }}
            fontFamily={'Mulish'}>ADD DATA</Button>
            {
                data.length>0 ? 
                
                <Flex columnGap={5}>
                    <Box  w={'30%'}>
                       <MyRideFilter data={data}></MyRideFilter>
                    </Box>
                    <Grid width={'70%'} templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(2, 1fr)','repeat(3, 1fr)']} gap={6}>
                   {
                    data.map((el)=>{
                        return  (<RideCard
                    data={el}
                    ></RideCard>)
                    })
                   }
                     </Grid>
                </Flex>
                :
                <NoData></NoData>
            }
    </Box>
    );
}

function NoData(){
    return(
        <Box
        mt={10}
        >
            <Card w={'40%'} m='auto'
            shadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}
            >
                <CardBody>
                    <Text  fontFamily={'Mulish'}>
                        No upcoming trips.
                        <Link  fontFamily={'Mulish'}
                        color={'yellow.400'}
                        >
                        Plan one now!
                        </Link>
                    </Text>
                </CardBody>
            </Card>
        </Box>
    )
}

export default MyRides;