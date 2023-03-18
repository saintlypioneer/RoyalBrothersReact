import { Box, Grid, Heading, Text,Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,useDisclosure, FormLabel, Input,FormControl, Button } from "@chakra-ui/react";
import React from "react";
import TariffCard from "./TariffCard";

function TariffPage(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const tariffData=[{
      'vehicle':'Suzuki Access 125',
      'image':'https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/001/medium/SUZUKI_ACCESS_125.png?1660719780',
      'hourly':{
        'btime':'19',
        'btimeabove':'19',
        'kmlimit':'5.0',
        'excess':'4.0'
      },
      'seven':{
        'rental':'1588',
        'kmlimit':'540',
        'excess':'4.0'
      },
      'fifteen':{
        'rental':'2647',
        'kmlimit':'900',
        'excess':'4.0'
      },
      'thirty':{
        'rental':'4412',
        'kmlimit':'1500',
        'excess':'4.0'
      },
    },{
      'vehicle':'Honda Dio',
      'image':'https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/035/medium/HONDA_DIO.png?1660722410',
      'hourly':{
        'btime':'19',
        'btimeabove':'19',
        'kmlimit':'5.0',
        'excess':'4.0'
      },
      'seven':{
        'rental':'2412',
        'kmlimit':'540',
        'excess':'4.0'
      },
      'fifteen':{
        'rental':'3216',
        'kmlimit':'900',
        'excess':'4.0'
      },
      'thirty':{
        'rental':'4287',
        'kmlimit':'1500',
        'excess':'4.0'
      },
    },{
      'vehicle':'Hero Maestro',
      'image':'https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/047/medium/HERO_MEASTRO.png?1660723002',
      'hourly':{
        'btime':'21',
        'btimeabove':'21',
        'kmlimit':'5.0',
        'excess':'4.0'
      },
      'seven':{
        'rental':'1587',
        'kmlimit':'540',
        'excess':'4.0'
      },
      'fifteen':{
        'rental':'2268',
        'kmlimit':'900',
        'excess':'4.0'
      },
      'thirty':{
        'rental':'3780',
        'kmlimit':'1500',
        'excess':'4.0'
      },
    },{
      'vehicle':'Honda Activa 5G',
      'image':'https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/233/medium/HONDA_ACTIVA_5G.png?1660731811',
      'hourly':{
        'btime':'18',
        'btimeabove':'18',
        'kmlimit':'5.0',
        'excess':'4.0'
      },
      'seven':{
        'rental':'1859',
        'kmlimit':'540',
        'excess':'4.0'
      },
      'fifteen':{
        'rental':'2860',
        'kmlimit':'900',
        'excess':'4.0'
      },
      'thirty':{
        'rental':'4087',
        'kmlimit':'1500',
        'excess':'4.0'
      },
    },{
      'vehicle':'Honda Activa 6G',
      'image':'https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/272/medium/Activa-6G.png?1666077785',
      'hourly':{
        'btime':'19',
        'btimeabove':'19',
        'kmlimit':'5.0',
        'excess':'4.0'
      },
      'seven':{
        'rental':'2178',
        'kmlimit':'540',
        'excess':'4.0'
      },
      'fifteen':{
        'rental':'3629',
        'kmlimit':'900',
        'excess':'4.0'
      },
      'thirty':{
        'rental':'6600',
        'kmlimit':'1500',
        'excess':'4.0'
      },
    },{
      'vehicle':'Royal Enfield Himalayan Gravel Grey',
      'image':'https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/299/medium/ROYAL_ENFIELD_HIMALAYAN_GRAVEL_GREY.png?1660730284',
      'hourly':{
        'btime':'80',
        'btimeabove':'80',
        'kmlimit':'10.0',
        'excess':'8.0'
      },
      'seven':{
        'rental':'7888',
        'kmlimit':'540',
        'excess':'8.0'
      },
      'fifteen':{
        'rental':'13147',
        'kmlimit':'900',
        'excess':'8.0'
      },
      'thirty':{
        'rental':'21912',
        'kmlimit':'1500',
        'excess':'8.0'
      },
    },{
      'vehicle':'Royal Enfield Classic 350 Reborn',
      'image':'https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/301/medium/ROYAL_ENFIELD_CLASSIC_350_REBORN.png?1660734514',
      'hourly':{
        'btime':'60',
        'btimeabove':'60',
        'kmlimit':'10.0',
        'excess':'8.0'
      },
      'seven':{
        'rental':'13440',
        'kmlimit':'540',
        'excess':'8.0'
      },
      'fifteen':{
        'rental':'21600',
        'kmlimit':'900',
        'excess':'8.0'
      },
      'thirty':{
        'rental':'28800',
        'kmlimit':'1500',
        'excess':'8.0'
      },
    },{
      'vehicle':'Honda CB 200X',
      'image':'https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/304/medium/HONDA_CB_200X.png?1660731823',
      'hourly':{
        'btime':'42',
        'btimeabove':'42',
        'kmlimit':'10.0',
        'excess':'7.0'
      },
      'seven':{
        'rental':'14112',
        'kmlimit':'540',
        'excess':'7.0'
      },
      'fifteen':{
        'rental':'20160',
        'kmlimit':'900',
        'excess':'7.0'
      },
      'thirty':{
        'rental':'25200',
        'kmlimit':'1500',
        'excess':'7.0'
      },
    },{
      'vehicle':'Royal Enfield Himalayan BS6 (Tourer Edition)',
      'image':'https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/307/medium/ROYAL_ENFIELD_HIMALAYAN.png?1660735786',
      'hourly':{
        'btime':'82',
        'btimeabove':'82',
        'kmlimit':'10.0',
        'excess':'8.0'
      },
      'seven':{
        'rental':'7603',
        'kmlimit':'540',
        'excess':'8.0'
      },
      'fifteen':{
        'rental':'12672',
        'kmlimit':'900',
        'excess':'8.0'
      },
      'thirty':{
        'rental':'21120',
        'kmlimit':'1500',
        'excess':'8.0'
      },
    },{
      'vehicle':'Honda Dio (BS6)',
      'image':'https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/308/medium/HONDA_DIO_BS6.png?1660734795',
      'hourly':{
        'btime':'17',
        'btimeabove':'17',
        'kmlimit':'5.0',
        'excess':'4.0'
      },
      'seven':{
        'rental':'2150',
        'kmlimit':'540',
        'excess':'4.0'
      },
      'fifteen':{
        'rental':'3582',
        'kmlimit':'900',
        'excess':'4.0'
      },
      'thirty':{
        'rental':'5970',
        'kmlimit':'1500',
        'excess':'4.0'
      },
    },{
      'vehicle':'Honda X Blade (BS6)',
      'image':'https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/310/medium/HONDA_X-BLADE_%28BS6%29.png?1660731412',
      'hourly':{
        'btime':'36',
        'btimeabove':'1369',
        'kmlimit':'10.0',
        'excess':'6.0'
      },
      'seven':{
        'rental':'4656',
        'kmlimit':'540',
        'excess':'6.0'
      },
      'fifteen':{
        'rental':'7761',
        'kmlimit':'900',
        'excess':'6.0'
      },
      'thirty':{
        'rental':'12936',
        'kmlimit':'1500',
        'excess':'6.0'
      },
    },{
      'vehicle':'Aprilia SR 160 ABS (BS6)',
      'image':'https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/315/medium/APRILIA_SR_160_ABS_%28BS6%29.png?1660734985',
      'hourly':{
        'btime':'26',
        'btimeabove':'26',
        'kmlimit':'5.0',
        'excess':'5.0'
      },
      'seven':{
        'rental':'3175',
        'kmlimit':'540',
        'excess':'5.0'
      },
      'fifteen':{
        'rental':'4536',
        'kmlimit':'900',
        'excess':'5.0'
      },
      'thirty':{
        'rental':'6480',
        'kmlimit':'1500',
        'excess':'5.0'
      },
    },{
      'vehicle':'Bajaj Avenger Cruise 220 (BS6)',
      'image':'https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/320/medium/AVENGER_CRUISE_220_%28BS6%29.png?1660734515',
      'hourly':{
        'btime':'44',
        'btimeabove':'44',
        'kmlimit':'10.0',
        'excess':'6.0'
      },
      'seven':{
        'rental':'3628',
        'kmlimit':'540',
        'excess':'6.0'
      },
      'fifteen':{
        'rental':'6048',
        'kmlimit':'900',
        'excess':'6.0'
      },
      'thirty':{
        'rental':'10080',
        'kmlimit':'1500',
        'excess':'6.0'
      },
    },{
      'vehicle':'Yamaha Aerox',
      'image':'https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/333/medium/YAMAHA_AEROX.png?1660656218',
      'hourly':{
        'btime':'27',
        'btimeabove':'27',
        'kmlimit':'5.0',
        'excess':'5.0'
      },
      'seven':{
        'rental':'2412',
        'kmlimit':'540',
        'excess':'5.0'
      },
      'fifteen':{
        'rental':'3216',
        'kmlimit':'900',
        'excess':'5.0'
      },
      'thirty':{
        'rental':'4287',
        'kmlimit':'1500',
        'excess':'5.0'
      },
    },{
      'vehicle':'Honda Grazia 125',
      'image':'https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/316/medium/HONDA_GRAZIA_125.png?1660731361',
      'hourly':{
        'btime':'24',
        'btimeabove':'24',
        'kmlimit':'5.0',
        'excess':'4.0'
      },
      'seven':{
        'rental':'2519',
        'kmlimit':'540',
        'excess':'4.0'
      },
      'fifteen':{
        'rental':'3598',
        'kmlimit':'900',
        'excess':'4.0'
      },
      'thirty':{
        'rental':'5141',
        'kmlimit':'1500',
        'excess':'4.0'
      },
    },]
  return (
    <Box>
      <Box>
        <Heading fontFamily={'Mulish'} my={5}>Bike rental tariffs in Bangalore</Heading>
        <Text fontFamily={'Mulish'}>
          *All prices are exclusive of taxes and fuel. Images used for
          representation purposes only, actual color may vary.
        </Text>
      </Box>

      <Box mt={10}>
        <Grid width={['95%','95%','80%']} m={"auto"} templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(2, 1fr)','repeat(2, 1fr)','repeat(3, 1fr)']} gap={6}>

        {
          tariffData.map((el,ind)=>{
            return <TariffCard onOpen={onOpen} key={ind} data={el}>

            </TariffCard>
          })
        }

            
        </Grid>
      </Box>
      <Modal
        
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Search your next ride</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
           
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default TariffPage;
