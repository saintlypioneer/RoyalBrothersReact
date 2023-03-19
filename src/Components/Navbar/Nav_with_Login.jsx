import { ChevronDownIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
function NavWithLogin() {
    return (
        <Box h='50px' w='175px' border='1px' >
            <Flex justifyContent='space-evenly'>
                <Image src='https://d36g7qg6pk2cm7.cloudfront.net/assets/profile-f17aa1dfbd0cb562142f1dcb10bb7ad33e1ac8417ad29a1cdab7dfbfbbfe2f15.png'
                    h='45px' w='45px' />
                <Text pt='10px' size='xs'>Shivam</Text>
                <Box pt='10px'><ChevronDownIcon fontSize='2xl'/></Box>
            </Flex>
        </Box>
    )
}
export default NavWithLogin;