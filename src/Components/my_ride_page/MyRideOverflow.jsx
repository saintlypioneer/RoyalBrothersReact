import { Stack, Flex, Checkbox, Box, Divider } from "@chakra-ui/react";
import React from "react";
function MyRideOverflow(props) {
    const location = [
        "Place",
        "Place",
        "Place",
        "Place",
        "Place",
        "Place",
        "Place",
        "Place",
        "Place",
        "Place",
        "Place",
      ];
    return (
        <Stack h={"100px"} overflow="auto" border={'1px solid #c1c1c1'}p="5px 0px">
        {location.map((ele) => {
          return (
            <Flex
              alignItems={"center"}
              p="0px 25px"
              fontSize={"12px"}
              gap={3}
              h="25px"
              _hover={{
                background: "#f2f2f2",
              }}
              borderBottom="1px solid #f2f2f2"
              fontFamily={"Mulish"}
              fontWeight='light'
            >
              <Checkbox border={"grey"} bg={"white"} size={"sm"} ></Checkbox>
              {ele}
            </Flex>
          );
        })}
      </Stack>
    );
}

export default MyRideOverflow;