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
import React from "react";
import { GrSearch } from "react-icons/gr";
import MyRideOverflow from "./MyRideOverflow";
import MyRideTag from "./MyRideTag";

export default function MyRideFilter() {
  const handleFocusDate = (event) => {
    event.target.type = "date";
  };
  const handleFocusTime = (event) => {
    event.target.type = "time";
  };
  return (
    <Stack
      width={"450px"}
      p="5px 15px"
      display={["none", "none", "none", "block"]}
    >
      <Text
        fontSize={"20px"}
        fontWeight="bold"
        p={"0px 15px"}
        fontFamily={"Mulish"}
      >
        Filter
      </Text>
      <Divider />
      <Stack p={"0px 15px"} height={"500px"} overflow="auto" gap={4}>
        <Box>
          <Text
            fontSize={"14px"}
            fontWeight="bold"
            mb={2}
            fontFamily={"Mulish"}
          >
            Select Date & Time
          </Text>
          <Flex gap={4} justify="space-between" mb={"15px"}>
            <Box>
              <Text fontSize={"14px"} w={"200px"} fontFamily={"Mulish"}>
                Pickup date
              </Text>
              <Input
                variant="flushed"
                size={"xs"}
                type="text"
                placeholder=""
                borderBottom={"1px solid #c1c1c1"}
                onFocus={handleFocusDate}
              />
            </Box>
            <Box>
              <Text fontSize={"14px"} fontFamily={"Mulish"}>
                Time
              </Text>
              <Input
                variant="flushed"
                size={"xs"}
                type="text"
                placeholder=""
                onFocus={handleFocusTime}
                borderBottom={"1px solid #c1c1c1"}
              />
            </Box>
          </Flex>
          <Flex gap={4} justify="space-between" mb={"15px"}>
            <Box>
              <Text fontSize={"14px"} w={"200px"} fontFamily={"Mulish"}>
                Dropoff date
              </Text>
              <Input
                variant="flushed"
                size={"xs"}
                type="text"
                placeholder=""
                onFocus={handleFocusDate}
                borderBottom={"1px solid #c1c1c1"}
              />
            </Box>
            <Box>
              <Text fontSize={"14px"} fontFamily={"Mulish"}>
                Time
              </Text>
              <Input
                variant="flushed"
                size={"xs"}
                type="text"
                placeholder=""
                onFocus={handleFocusTime}
                borderBottom={"1px solid #c1c1c1"}
              />
            </Box>
          </Flex>
        </Box>
        <Box>
          <Text
            fontSize={"14px"}
            fontWeight="bold"
            mb={2}
            mt={-3}
            fontFamily={"Mulish"}
          >
            Search Duration
          </Text>
          <Text fontSize={"14px"} fontFamily={"Mulish"}>
            2 hours 30 minutes
          </Text>
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
          <Flex gap={4} mb={2}>
            <MyRideTag />
            <MyRideTag />
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
          <Flex gap={4} mb={2}>
            <MyRideTag />
            <MyRideTag />
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
          <MyRideOverflow />
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
        >
          Apply Filters
        </Button>
      </Box>
    </Stack>
  );
}
