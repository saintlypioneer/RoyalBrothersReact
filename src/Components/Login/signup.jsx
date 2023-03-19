import React from "react";
import {
    Box, Center, FormControl, FormLabel, Input, Flex,
    InputLeftAddon, InputGroup, VStack, InputRightElement,
    Button, Checkbox, Spacer, Image, Heading, Wrap, WrapItem, useAccordion, Toast, useToast, FormHelperText, FormErrorMessage, Alert, AlertIcon,
} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
import { useDispatch } from 'react-redux'
function SignUP() {

    const dispatch = useDispatch();

    const toast = useToast()
    // states for collecting data 
    const [name, setName] = useState("Vishwajeet");
    const [email, setEmail] = useState("vishwajeet@gmail.com");
    const [phone, setPhone] = useState("9876543210");
    const [password, setPassword] = useState("royal");

    const UserDetailsObj = { name, email, phone, password }

    const SaveUserDetails = () => {
        // console.log(UserDetailsObj)
        if (name, email, phone, password) {
            dispatch({
                type: "SIGNUP",
                payload: UserDetailsObj
            })
        }
    }

    const Registered = () => {
        if (name.length >=3 && email.length >= 4 && 
            phone.length == 10 && password.length >= 4) {

            return toast({
                position: 'top',
                title: 'Registered successfully.',
                description: "Welcome to RoyalBrothers.com.",
                status: 'success',
                duration: 2000,
                isClosable: true,
            })
               
        }else{
            return toast({
                position: 'top',
                title: 'Invalid Enteries',
                // description: "Welcome to RoyalBrothers.com.",
                status: 'error',
                duration: 2000,
                isClosable: true,
            })
        }
    }

    // it is for hide and show password
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    // it is for capthca implementation
    function onChange(value) {
        // console.log("Captcha value:", value);
    }

    return (
        <Center>
            <Box w={'375px'} h={'520px'} boxShadow='2xl' >

                <FormControl >
                    <Flex direction='column' p='0px 25px 0px 25px'>
                        <Input mt='32px' mb='32px' variant='filled'
                            placeholder='Name as per Aadhaar/Passport'
                            value={name} onChange={(e) => { setName(e.target.value) }}
                           />

                        <Input mb='5px' variant='filled' placeholder='Email'
                            value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        <FormLabel>
                            <Box pl='5px' justify='right'>Mobile</Box>
                        </FormLabel>
                        <InputGroup>
                            <Flex mb='32px'>
                                <InputLeftAddon children='+91' />
                                <Input type="tle" placeholder='As per Aadhaar' width='263px'
                                    value={phone} onChange={(e) => { setPhone(e.target.value) }} />
                            </Flex>
                        </InputGroup>
                        <InputGroup size='md' mb='32px'>
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
                        <Center mb='28px'>
                            <Box h='75px' w='300px' borderRadius='3px' border='1px solid #DCDCDC'>
                                <ReCAPTCHA
                                    sitekey="6LcguwIlAAAAAD-l07fJdd2jip29l8WkXxskAhrc"
                                    onChange={onChange}
                                />
                            </Box>
                        </Center>
                        <Box mb='8px' as='button' h='50px' w='325px'
                            onClick={() => { SaveUserDetails(); Registered() }} bg='#fed250' borderRadius='4px'>
                            <Center h='50px'><Heading size='sm'>Sign Up</Heading></Center>
                        </Box>
                    </Flex>
                </FormControl>
            </Box>
        </Center>
    )
}
export default SignUP;