import React from "react";
import { Center, Text, Box, Heading, Flex, Spacer, Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react'
import Login from "./login";
import SignUP from "./signup";
import { useState } from "react";
import './LoginHeader.css'
function LoginHeader() {
    const ChangeToLogin = () => {
        setState("Login")
    }
    const ChangeToSignup = () => {
        setState("Signup")
    }
    const [state, setState] = useState("");

    return (
        <Center>
            <Box h='700px' w='350px' border='1px'>
                <Center>
                    <Box>
                        <Flex direction='column'>
                            <Center ml='37px' mb='16px'><Text fontSize='3xl'>Rent . Ride . Explore</Text></Center>
                            <Box boxShadow='sm' pt='12px' mb='16px' w={'375px'} h={'50px'} >
                                <Flex>
                                    <Box border='1px'>
                                        <Tabs variant='unstyled'>
                                            <TabList  border='1px'>
                                                <Tab _selected={{ borderBottom: '4px solid #fed250' }}>
                                                    <Box w='187px' h='36px'>
                                                        <Center>
                                                            <Heading as='button' size='sm'>LOGIN</Heading>
                                                        </Center>
                                                    </Box>
                                                </Tab>
                                                <Tab _selected={{ borderBottom: '4px solid #fed250' }}>
                                                    <Box w='187px' h='36px'>
                                                        <Center>
                                                            <Heading as='button' size='sm'>SIGN UP</Heading>
                                                        </Center>
                                                    </Box>
                                                </Tab>
                                            </TabList>
                                            <TabPanels>
                                                <TabPanel>
                                                    <Login />
                                                </TabPanel>
                                                <TabPanel>
                                                    <SignUP />
                                                </TabPanel>
                                            </TabPanels>
                                        </Tabs>

                                    </Box>
                                </Flex>
                            </Box>
                        </Flex>
                    </Box>
                </Center>
            </Box>
        </Center>
    )
}
export default LoginHeader;