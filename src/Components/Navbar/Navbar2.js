import React from "react";
import { IconMenu2 } from "@tabler/icons-react";
import styled from "styled-components";
import { Button, Box, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Input, DrawerFooter, Text, Divider } from "@chakra-ui/react";
import { ChevronDownIcon } from '@chakra-ui/icons'
import { useDisclosure, IconButton } from "@chakra-ui/react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { MoonIcon } from "@chakra-ui/icons";

import { setLightMode, setDarkMode } from "../../Redux/themeMode/action";

import {
    Modal, ModalOverlay, ModalContent
} from '@chakra-ui/react'

import { useDispatch, useSelector } from "react-redux";


function Navbar(props) {

    const isUserLoggedIn = useSelector((storeData) =>{
        return storeData.LoginSignupRed.isLoggedIn

    })
    console.log(isUserLoggedIn)

    const { isOpen, onOpen, onClose } = useDisclosure();
    const { isOpen: isModalOpen, onOpen: onModalOpen, onClose: onModalClose } = useDisclosure();
    const btnRef = React.useRef()

    const isDark = useSelector(state=>state.themeReducer.dark);
    const dispatchTheme = useDispatch();

    function updateTheme(){
        console.log(isDark)
        if (isDark){
            dispatchTheme(setLightMode());
        } else {
            dispatchTheme(setDarkMode());
        }
    }

    return (

        <Container isDark={isDark}>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader></DrawerHeader>

                    <DrawerBody>
                        {/* <Input placeholder='Type here...' /> */}
                        <DrawerButtons>
                            <DrawerCard>Tarrif</DrawerCard>
                            <DrawerCard>Store</DrawerCard>
                            <DrawerCard>Partner With U</DrawerCard>
                            <DrawerCard>Blog</DrawerCard>
                            <DrawerCard>Indian Bike Routes</DrawerCard>
                            <DrawerCard>About Us</DrawerCard>
                            <DrawerCard>Terms & Condition</DrawerCard>
                            <DrawerCard>Bike Tour</DrawerCard>
                            <DrawerCard>Privacy Policy</DrawerCard>
                            <DrawerCard>FAQ</DrawerCard>
                            <DrawerCard>Reach Us</DrawerCard>
                        </DrawerButtons>
                    </DrawerBody>

                    <DrawerFooter>

                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
            {/* Modal */}

            <Modal isOpen={isModalOpen} onClose={onModalClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalContainer>
                        <ModalNavbar>
                            <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/landing_page/royal_brothers_logo-229959d7727f356b2e4fc3bd9c0c527c60127d009c93989a93e2daa0b1c2d556.svg" alt="" />
                            <Box borderLeft="1px solid #000000" height="100%" />
                            <Text>Bike Rentals</Text>
                        </ModalNavbar>
                        <ModalSearch>ssearch</ModalSearch>
                        <ModalBody>Body</ModalBody>
                    </ModalContainer>
                </ModalContent>
            </Modal>

            {/* <Modal isOpen={isModalOpen} onClose={onModalClose}>
                Hello Modal
            </Modal> */}
            <Left>
                <MenuBtn ref={btnRef} onClick={onOpen}>
                    <IconMenu2 size={"32px"} color={isDark?'white':'black'} />
                </MenuBtn>
                <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/landing_page/royal_brothers_logo-229959d7727f356b2e4fc3bd9c0c527c60127d009c93989a93e2daa0b1c2d556.svg" alt="" />
            </Left>
            <Center>
                <CustomButton>Tarrif</CustomButton>
                <CustomButton>What's New?</CustomButton>
                <CustomButton>Partner with us</CustomButton>
            </Center>
            <Right isDark={isDark}>
                <Button rightIcon={<ChevronDownIcon />} leftIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                } bg={"#fed250"} colorScheme="#fed250" variant='outline' onClick={onModalOpen}>
                    Bangalore
                </Button>

                <Box className="divider" borderLeft="1px solid rgba(0,0,0,0.2)" height="100%" />
                <Link to='/login'>
                    <Button className="authButton loginButton" borderColor={"transparent"} color="gray.500" colorScheme='brand.500' variant='outline'>
                        LogIn
                    </Button>
                </Link>

                <Link to='/signUp'>
                    <Button className="authButton" bg={"brand.500"} color="black" colorScheme='brand.500' variant='solid'>

                        SignUp
                    </Button>
                </Link>
                <IconButton
                    colorScheme={!isDark?'blackAlpha':'whiteAlpha'}
                    aria-label='Search database'
                    icon={<MoonIcon />}
                    onClick={updateTheme}
                />
            </Right>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    background-color: ${props => props.isDark ? "#2C3333" : "white"};
`;

const ModalContainer = styled.div``;
const ModalNavbar = styled.div`
    &>img{
        width: 100px;
    }
`;
const ModalSearch = styled.div``;
const ModalBody = styled.div``;

const DrawerButtons = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const DrawerCard = styled.div`
    width: 100%;
    background-color: white;
    padding: 10px 0 10px 5px;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    font-size: 0.9rem;

    &:hover{
        background-color: rgba(0,0,0,0.05);
    }
`;


const Left = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;

    &>img{
        width: 120px;
    }
`;

const MenuBtn = styled.div`
    
`;

const Center = styled.div`
    display: flex;
    gap: 20px;
    font-size: 0.8rem;
    color: ${props=>props.isDark?"#2C3333":"white"};

    @media (max-width: 850px){
        display: none;
    }
`;

const Right = styled.div`
    display: flex;
    gap: 10px;

    .authButton{
        @media (max-width: 850px){
            display: none;
        }
    }

    .loginButton{
        color: ${props=>props.isDark?"white":"#2C3333"};
    }

    .divider{
        @media (max-width: 850px){
            display: none;
        }
    }
`;

const CustomButton = styled.button``;

export default Navbar;