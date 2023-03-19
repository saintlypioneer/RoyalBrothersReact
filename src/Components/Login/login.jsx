import React, { useEffect } from "react";
import {
    Box, Center, FormControl, FormLabel, Input, Flex,
    InputLeftAddon, InputGroup, VStack, InputRightElement,
    Button, Checkbox, Spacer, Image, Heading, Wrap, WrapItem, useToast,
} from '@chakra-ui/react'
import ReCAPTCHA from "react-google-recaptcha";
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login() {

    // states for collecting data 
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const nav = useNavigate()

    const [isLoggedIn,setIsLoggedIn] = useState(false);

    useEffect(() =>{
        setIsLoggedIn(true)
        
    },[Login])



    const dispatch = useDispatch();

    const toast = useToast()

    const storedData = useSelector((storeData) => { return storeData.LoginSignupRed })
    // it is for hide and show password
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    // it is for captcha implementation
    function onChange(value) {
        // console.log("Captcha value:", value);
    }
   

    const CheakUserDetails = () => {
        if (phone, password) {
            if (phone === storedData.phone && password === storedData.password) {
               
                console.log(storedData.isLoggedIn)
                dispatch({
                    type:"ISLOGGEDIN",
                    payload:isLoggedIn
                })
                nav('/')
                return toast({
                    position: 'top',
                    title: 'LoggedIn successfully.',
                    // description: "Welcome to RoyalBrothers.com.",
                    status: 'success',
                    duration: 2000,
                    isClosable: true,
                })

            } else {
                return toast({
                    position: 'top-right',
                    title: 'Invalid phone/password combination',
                    // description: "Welcome to RoyalBrothers.com.",
                    status: 'error',
                    duration: 2000,
                    isClosable: true,

                })
            }
        } 
        else {
            return toast({
                position: 'top-right',
                title: 'Enter user details',
                // description: "Welcome to RoyalBrothers.com.",
                status: 'info',
                duration: 2000,
                isClosable: true,

            })
        }
    }

    return (
        <Center >

            <Box w={'375px'} h={'515px'} boxShadow='2xl'>

                <FormControl isRequired>

                    <FormLabel>
                        <Box mt='20px' pl='25px' justify='right'>Phone</Box>
                    </FormLabel>

                    <Flex direction='column' p='0px 25px 0px 25px'>

                        <InputGroup>
                            <Flex mb='30px'>
                                <InputLeftAddon children='+91' />
                                <Input type="tle" width='263px'
                                    value={phone} onChange={(e) => { setPhone(e.target.value) }}
                                />
                            </Flex>
                        </InputGroup>

                        <InputGroup size='md' mb='13px'>

                            <Input
                                pr='4.5rem'
                                type={show ? 'text' : 'password'}
                                variant='filled'
                                placeholder='Enter password'
                                value={password} onChange={(e) => { setPassword(e.target.value) }}
                            />

                            <InputRightElement width='4.5rem'>
                                <Button h='1.75rem' size='lg' onClick={handleClick}>
                                    {show ? <ViewOffIcon /> : <ViewIcon />}
                                </Button>
                            </InputRightElement>

                        </InputGroup>

                        <Flex mb='27px'>
                            <Box><Checkbox>Remember password?</Checkbox></Box>
                            <Spacer />
                            <Box fontSize='sm' color='blue'>Forgot Password?</Box>
                        </Flex>

                        <Center mb='28px'>
                            <Box h='75px' w='300px' borderRadius='3px' border='1px solid #DCDCDC'>
                                <ReCAPTCHA
                                    sitekey="6LcguwIlAAAAAD-l07fJdd2jip29l8WkXxskAhrc"
                                    onChange={onChange}
                                />
                            </Box>
                        </Center>

                        <Box mb='8px' as='button' h='50px' w='325px'
                            bg='#fed250' borderRadius='4px'
                            onClick={CheakUserDetails }
                            >
                            <Center h='50px'><Heading size='sm'>Login with Password</Heading></Center>
                        </Box>

                    </Flex>
                    <Center mb='8px'>OR</Center>
                    <Center>
                        <Box bg='#E8E8E8' as='button' h='50px' w='325px' >
                            <Center h='50px'><Heading size='sm'>Login with OTP</Heading></Center>
                        </Box>
                    </Center>
                </FormControl>

            </Box>

        </Center >
    )
}
export default Login;