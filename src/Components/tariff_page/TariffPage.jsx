import { Box, Grid, Heading, Text,Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,useDisclosure, FormLabel, Input,FormControl, Button } from "@chakra-ui/react";
import React from "react";
import TariffCard from "./TariffCard";

function TariffPage(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box>
      <Box>
        <Heading fontFamily={'Mulish'} my={5}>Bike rental tariffs in Bangalore</Heading>
        <Text fontFamily={'Mulish'}>
          *All prices are exclusive of taxes and fuel. Images used for
          representation purposes only, actual color may vary.
        </Text>
      </Box>

      <Box mt={10}>
        <Grid width={['95%','95%','80%']} m={"auto"} templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(2, 1fr)','repeat(2, 1fr)','repeat(3, 1fr)']} gap={6}>
                <TariffCard onOpen={onOpen}></TariffCard>
                <TariffCard></TariffCard>
                <TariffCard></TariffCard>
                <TariffCard></TariffCard>
                <TariffCard></TariffCard>
                <TariffCard></TariffCard>
                <TariffCard></TariffCard>
                <TariffCard></TariffCard>
                <TariffCard></TariffCard>
                <TariffCard></TariffCard>
                <TariffCard></TariffCard>
        </Grid>
      </Box>
      <Modal
        
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Search your next ride</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
           
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default TariffPage;
