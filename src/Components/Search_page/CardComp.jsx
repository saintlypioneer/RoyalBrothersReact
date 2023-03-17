import React from "react";
import {
  Card,
  CardBody,
  Image,
  Text,
  Button,
  Flex,
  Box,
  Select,
} from "@chakra-ui/react";

export default function CardComp({img,price,name,location,pickupDate,pickupTime,dropoffDate,dropoffTime}) {
  return (
    <Card maxW="sm" boxShadow={"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"} pb={0}>
      <Flex p={'2px 10px'} gap={2} alignItems='center'>
        <Image src="https://d36g7qg6pk2cm7.cloudfront.net/assets/zero-deposit-8bf3350f651efc75cb1e263459707c81cdd271347d2ba925cd2eb740243474d5.png" width={'20px'} h='20px'/>
        <Text fontSize={'12px'} fontFamily={'Mulish'}>Zero Deposit</Text>
      </Flex>
      <CardBody>
        <Text
          fontSize={"1rem"}
          mb="10px"
          fontWeight={"bold"}
          textAlign="center"
          fontFamily={'Mulish'}
        >
          {name}
        </Text>
        <Image
          h={"150px"}
          w="250px"
          src={img}
          textAlign={"center"}
          m="0px auto"
          mb="10px"
        ></Image>
         <hr
          style={{ height: "6px", backgroundColor: "#f6f6f6", border: "none" }}
        />
        <Text textAlign={"center"} fontSize="14px" fontFamily={'Mulish'}>
          Available at
        </Text>
        {/* Select */}
        <Select
          variant="flushed"
          placeholder="Location"
          borderBottom={'1px solid black'}
          mb="10px"
          fontSize="14px"
          size={"xs"}
          fontFamily={'Mulish'}
        >
          <option style={{color:"green",fontWeight:'bold'}}>Fully Available</option>
          {
            location && location.map((ele,idx)=>{
              return <option key={idx}>{ele}</option>
            })
          }
        </Select>
        <hr
          style={{ height: "6px", backgroundColor: "#f6f6f6", border: "none" }}
        />
        <Flex justify={"space-between"} mb="10px" mt={"20px"}>
          <Box>
            <Text fontWeight={"bold"} fontSize="14px" fontFamily={'Mulish'}>
              {pickupDate}
            </Text>
            <Text fontSize="12px" fontFamily={'Mulish'}>{pickupTime}</Text>
          </Box>
          <Box>
            <Button bg="black" color={"white"} width="15px" borderRadius="50%" fontSize={'14px'} _hover={{
          background: "black", 
        }} fontFamily={'Mulish'}>
              to
            </Button>
          </Box>
          <Box>
            <Text fontWeight={"bold"} fontSize="14px" fontFamily={'Mulish'}>
              {dropoffDate}
            </Text>
            <Text fontSize="12px" fontFamily={'Mulish'}>{dropoffTime}</Text>
          </Box>
        </Flex>
        <hr
          style={{ height: "6px", backgroundColor: "#f6f6f6", border: "none" }}
        />
        <Flex justify={"space-between"} mt='10px'>
          <Box>
            <Text fontWeight={"bold"} fontSize="14px" textAlign={"center"} fontFamily={'Mulish'}>
              ₹ {price}
            </Text>
            <Text fontSize="12px" fontFamily={'Mulish'}>(50 km included)</Text>
          </Box>
          <Box>
            <Button bg={"#fed250"} width="150px" _hover={{
          background: "yellow.400",
          boxShadow:'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px'
        }} fontFamily={'Mulish'}>
              Book
            </Button>
          </Box>
        </Flex>
      </CardBody>
    </Card>
  );
}
