import React, { useState } from "react";
import { Box, CloseButton, Flex, Text,Link } from "@chakra-ui/react";

export default function Banner() {
    const [display,setDisplay] = useState(false);

    const handleDisplay = ()=>{
        setDisplay(!display)
    }
  return (
    <Flex bg={"#fed250"} justify='space-between' alignItems={'center'} display={!display ? "flex" : "none"}>
      <Box ml={'600px'}>
        <Text fontFamily={'Mulish'} fontSize='12px' fontWeight={'bold'} color='blackAlpha.700'>Our delay policy has been changed <Link color={'blue.600'}>Know more</Link></Text>
      </Box>
      <Box>
        <CloseButton onClick={handleDisplay}/>
      </Box>
    </Flex>
  );
}
