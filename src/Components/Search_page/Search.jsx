import {
  Flex,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Filter from "./Filter";
import HighToLow from "./HighToLow";
import LowToHigh from "./LowToHigh";
import Relevance from "./Relevance";


export default function Search() {
  return (
    <Flex pr={'30px'}>
      <Filter />
      <Tabs w={"100%"} variant='unstyled'>
        <Flex alignItems={"center"}>
          <Text fontSize={"14px"} fontWeight='bold' fontFamily={'Mulish'}>Sort by</Text>
          <TabList>
            <Tab fontSize={"14px"}  fontFamily={'Mulish'} _selected={{borderBottom:'2px solid #fed250',fontWeight:'bold'}}>Relevance</Tab>
            <Tab fontSize={"14px"}  fontFamily={'Mulish'} _selected={{borderBottom:'2px solid #fed250',fontWeight:'bold'}}>Price - Low to High</Tab>
            <Tab fontSize={"14px"}  fontFamily={'Mulish'} _selected={{borderBottom:'2px solid #fed250',fontWeight:'bold'}}>Price - High to Low</Tab>
          </TabList>
        </Flex>
        <hr color={'grey'}/>
        <TabPanels>
          <TabPanel>
            <Relevance />
          </TabPanel>
          <TabPanel>
            <LowToHigh />
          </TabPanel>
          <TabPanel>
            <HighToLow/>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}
