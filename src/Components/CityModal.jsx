import { useState } from "react";
import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Grid,
    GridItem,
    Image,
    Input,
    InputGroup,
    InputRightElement,
    Box,
    Text,
    ThemeProvider,
    CSSReset,

    Heading,
    PseudoBox
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons"

function CityModal({ isOpen, setIsOpen }) {
    // const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const images = [
        {
            name: "Agra",
            url:
                "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/039/original/Agra_new.jpg",
        },
        {
            name: "Ahemdabad",
            url: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/023/original/Ahmedabad_b8d1eb5783c996a077aff887d35e4168.jpg?1558599488"
        },

        {
            name: "Allepy",
            url: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/103/original/Belagaum.jpg?1576578730"
        },
        {
            name: "Amritsar",
            url: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/101/original/Amritsar.jpg?1568037649"
        },
        {
            name: "Andaman",
            url: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/017/original/Andaman-_-Nicobar_b5a3ba5c464968f274dfb7a98bcc4dbc.jpg?1558599551"
        },
        {
            name: "chandigarh",
            url: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/024/original/Chandigarh_72374d6c6de8b70d5b4ea5c05c59ba32.jpg?1558599669"
        }


    ];

    const filteredImages = images.filter((image) =>
        image.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            {/* <Button onClick={() => setIsOpen(true)}>Open Modal</Button> */}
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="4xl">
                <ModalOverlay />
                <ModalContent w="80%">
                    <ModalHeader textAlign={"center"}>Bike Rental</ModalHeader>
                    <Box mb={3} m={2}>
                        <InputGroup>
                            <Input
                                placeholder="Search"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <InputRightElement children={<SearchIcon />} />
                        </InputGroup>
                    </Box>
                    <ModalBody>
                        <Grid templateColumns="repeat(4, 1fr)" gap={6} gridGap={6} >
                            {filteredImages.map((image) => (
                                <GridItem key={image.name} borderRadius={"5px "} overflow="hidden">
                                    <Image src={image.url} />
                                    <Text mt={2} fontWeight="bold" textAlign={"center"}>
                                        {image.name}
                                    </Text>
                                </GridItem>
                            ))}
                        </Grid>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={() => setIsOpen(false)}>Close</Button>
                    </ModalFooter>

                </ModalContent>
            </Modal>
        </>
    );
}
export default CityModal;
