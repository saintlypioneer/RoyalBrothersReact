import {
  Stack,
  Box,
  Text,
  Divider,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Tag,
  TagLabel,
  TagCloseButton,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { GrSearch } from "react-icons/gr";
import MyRideOverflow from "./MyRideOverflow";
import TagComp from "./TagComp";
import { useDispatch, useSelector } from "react-redux";
import BikeOptions from "./BikeOptions";
import BikeTags from "./BikeTags";
import { ADD_MYRIDES } from "./redux/myride/actiontype";
import { useSearchParams } from "react-router-dom";
import { getMyRide } from "./redux/myride/actionmyride";


export default function MyRideFilter() {
  const locationTags = useSelector((store) => store.myRideReducer.locationTags);
  const bikeTags = useSelector((store) => store.myRideReducer.bikeTags);
  const data = useSelector((store) => store.myRideReducer.vehicles);
  const dispatch = useDispatch();
  const [locationFilterData, SetLocationFilterData] = useState([]);
  const [statusFilterData, SetstatusFilterData] = useState([]);
  const [sortData, setSortData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const filterlocation = () => {
    // console.log(locationTags);
    let filted = data.filter((ele) => {
      if(bikeTags.length>0 && locationTags.length>0){
        for (let i = 0; i < locationTags.length; i++) {
          if (ele.location.includes(locationTags[i])) {
            return true;
          }
        }
      }else if(locationTags.length>0){
        for (let i = 0; i < locationTags.length; i++) {
          if (ele.location.includes(locationTags[i])) {
            return true;
          }
        }
      }else if(bikeTags.length>0){
        for (let i = 0; i < bikeTags.length; i++) {
          if (ele.vehicle.includes(bikeTags[i])) {
            return true;
          }
        }
      }
      return false;
    });
    console.log('filter',filted);
    SetLocationFilterData(filted);
  };

  function sortHigh(a, b) {
    return b.price - a.price;
  }
  function sortLow(a, b) {
    return a.price - b.price;
  }

  const filterStatus = (status) => {
    dispatch(getMyRide(`?status=${status}`));
  };

  const sortLowToHigh = () => {
    dispatch(getMyRide(`?_sort=amount&_order=asc`));
  };
  const sortHighToLow = () => {
    dispatch(getMyRide(`?_sort=amount&_order=desc`));
  };
  const sortAll = () => {
    dispatch(getMyRide(``));
  };


  const handleClick = () => {
    dispatch({ type: ADD_MYRIDES, payload: locationFilterData });
    setSearchParams({
      location: locationTags,
    });


  };

 
  useEffect(() => {
    filterlocation();
  }, [locationTags,bikeTags]);


  return (
    <Stack
      fontFamily={"Mulish"}
      p="5px 15px"
      // display={["none", "none", "none", "block"]}
    >
      <Box pl={2}>
        <Flex justify={"space-between"}>
          <Text fontSize={"20px"} fontWeight="bold" fontFamily={"Mulish"}>
            Sort
          </Text>
        </Flex>
        <Flex rowGap={5} wrap={"wrap"} justifyContent={"space-between"}>
          <Button
            fontSize={"sm"}
            colorScheme={"yellow"}
            height={8}
            onClick={() => {
              sortAll();
            }}
          >
            All
          </Button>
          <Button
            fontSize={"sm"}
            colorScheme={"yellow"}
            height={8}
            onClick={() => {
              sortLowToHigh();
            }}
          >
            Price low to high
          </Button>
          <Button
            fontSize={"sm"}
            colorScheme={"yellow"}
            height={8}
            onClick={() => {
              sortHighToLow();
            }}
          >
            Price hight to low
          </Button>
        </Flex>
      </Box>

      <Divider />
      <Stack
        textAlign={"left"}
        p={"0px 15px"}
        height={"500px"}
        overflow="auto"
        gap={2}
      >
        <Text mt={5} fontSize={"20px"} fontWeight="bold" fontFamily={"Mulish"}>
          Filter
        </Text>
        <Box>
          <Flex justify={"space-between"}>
            <Text
              fontSize={"14px"}
              fontWeight="bold"
              mb={2}
              fontFamily={"Mulish"}
            >
              Filter By Status
            </Text>
            <Tag
              h={"10px"}
              key={"xs"}
              w="70px"
              borderRadius="full"
              variant="solid"
              bg="#f2f2f2"
              color={"black"}
            >
              <TagLabel
                fontSize={"10px"}
                ml="5px"
                fontFamily={"Mulish"}
                fontWeight="light"
              >
                Clear
              </TagLabel>
              <TagCloseButton fontSize={"15px"} />
            </Tag>
          </Flex>
          <Flex rowGap={5} wrap={"wrap"} justifyContent={"space-between"}>
            <Button
              fontSize={"sm"}
              h={8}
              colorScheme={"yellow"}
              onClick={() => {
                filterStatus("pending");
              }}
            >
              Pending
            </Button>
            <Button
              fontSize={"sm"}
              h={8}
              colorScheme={"yellow"}
              onClick={() => {
                filterStatus("booked");
              }}
            >
              Completed
            </Button>
            <Button
              fontSize={"sm"}
              h={8}
              colorScheme={"yellow"}
              onClick={() => {
                filterStatus("cancelled");
              }}
            >
              Cancelled
            </Button>
          </Flex>
        </Box>

        <Box>
          <Flex justify={"space-between"}>
            <Text
              fontSize={"14px"}
              fontWeight="bold"
              mb={2}
              fontFamily={"Mulish"}
            >
              Search by Location
            </Text>
            {locationTags.length > 0 && (
              <Tag
                h={"10px"}
                key={"xs"}
                w="70px"
                borderRadius="full"
                variant="solid"
                bg="#f2f2f2"
                color={"black"}
              >
                <TagLabel
                  fontSize={"10px"}
                  ml="5px"
                  fontFamily={"Mulish"}
                  fontWeight="light"
                >
                  Clear
                </TagLabel>
                <TagCloseButton fontSize={"15px"} />
              </Tag>
            )}
          </Flex>
          <Flex gap={4} mb={2}>
            {locationTags &&
              locationTags.map((ele, idx) => {
                return <TagComp key={idx} tag={ele} />;
              })}
          </Flex>
          <InputGroup>
            <Input
              variant={"flushed"}
              placeholder="Search Location"
              size={"xs"}
              fontSize={"14px"}
              borderBottom={"1px solid #c1c1c1"}
            />
            <InputRightElement
              pointerEvents="none"
              children={<GrSearch />}
              size={"xs"}
              mt={-2}
            />
          </InputGroup>
        </Box>
        <Box>
          <MyRideOverflow />
        </Box>
        <Box>
          <Flex justify={"space-between"}>
            <Text
              fontSize={"14px"}
              fontWeight="bold"
              mb={2}
              fontFamily={"Mulish"}
            >
              Search by bike model
            </Text>
            {bikeTags.length > 0 && (
              <Tag
                h={"10px"}
                key={"xs"}
                w="70px"
                borderRadius="full"
                variant="solid"
                bg="#f2f2f2"
                color={"black"}
              >
                <TagLabel
                  fontSize={"10px"}
                  ml="5px"
                  fontFamily={"Mulish"}
                  fontWeight="light"
                >
                  Clear
                </TagLabel>
                <TagCloseButton fontSize={"15px"} />
              </Tag>
            )}
          </Flex>
          <Flex gap={4} mb={2}>
            {bikeTags &&
              bikeTags.map((ele, idx) => {
                return <BikeTags key={idx} bikeTag={ele} />;
              })}
          </Flex>
          <InputGroup>
            <Input
              variant={"flushed"}
              placeholder="Search Bike Model"
              fontSize={"14px"}
              size={"xs"}
              borderBottom={"1px solid #c1c1c1"}
            />
            <InputRightElement
              pointerEvents="none"
              children={<GrSearch />}
              size={"xs"}
              mt={-2}
            />
          </InputGroup>
        </Box>
        <Box>
          <BikeOptions />
        </Box>
      </Stack>
      <Box p={"10px"} boxShadow="md">
        <Button
          width={"100%"}
          bg="#fed250"
          _hover={{
            background: "yellow.400",
            boxShadow:
              "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
          }}
          fontFamily={"Mulish"}
          onClick={handleClick}
        >
          Apply Filters
        </Button>
      </Box>
    </Stack>
  );
}
