import { IconMenu2 } from "@tabler/icons-react";
import styled from "styled-components";
import { Button, Divider } from "@chakra-ui/react";
import { ChevronDownIcon } from '@chakra-ui/icons'

function Navbar(props) {
    return (
        <Container>
            <Left>
                <MenuBtn>
                    <IconMenu2 />
                </MenuBtn>
                <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/landing_page/royal_brothers_logo-229959d7727f356b2e4fc3bd9c0c527c60127d009c93989a93e2daa0b1c2d556.svg" alt="" />
            </Left>
            <Center>
                <CustomButton>Tarrif</CustomButton>
                <CustomButton>What's New?</CustomButton>
                <CustomButton>Partner with us</CustomButton>
            </Center>
            <Right>
                <Button rightIcon={<ChevronDownIcon />} leftIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                } colorScheme={"#00000"} variant='outline'>
                    Bangalore
                </Button>
                <Divider orientation="vertical" height={"40px"} ml="5px" mr="5px" colorScheme="gray" />
                <Button colorScheme='teal' variant='outline'>
                    LogIn
                </Button>
                <Button colorScheme='teal' variant='solid'>
                    SignUp
                </Button>
            </Right>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Left = styled.div`
    display: flex;
    align-items: center;
    &>img{
        width: 100px;
    }
`;

const MenuBtn = styled.div``;

const Center = styled.div``;

const Right = styled.div`
    display: flex;
`;

const CustomButton = styled.button``;

export default Navbar;