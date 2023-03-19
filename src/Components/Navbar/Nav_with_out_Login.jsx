import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
function NavWithoutLogin() {
    return (
        <Box>
            <Button colorScheme='teal' variant='outline'>
                <NavLink to="/login"> Login</NavLink>
            </Button>
            <Button colorScheme='teal' variant='solid'>
                <NavLink to="/signup"> SignUp</NavLink>
            </Button>
        </Box>
    )
}
export default NavWithoutLogin;