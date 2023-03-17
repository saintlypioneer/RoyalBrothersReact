import { Box, Flex, Image, Text, Select, Input, Button } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter, Heading, Stack, StackDivider } from '@chakra-ui/react';

function Summary() {
    const options = ["1", "2"]

    return (
        <Card p={'20px'} m={'20px'} boxShadow={" rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"}>

            < Heading size='md' p={'20px'} > Summary</Heading >
            <Flex flexDirection={{ sm: 'column', md: 'row' }} alignItems="center" justifyContent="space-between">
                <Box mb="2" p={8}>
                    <Image src="https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/233/medium/HONDA_ACTIVA_5G.png?1660731811" alt="Product image" w={'350px'} h={'200px'} />
                    <Text align={"center"} p={'10px'} fontWeight="bold">Honda Activa 5G</Text>
                </Box>
                <Box w="100%">

                    {/* <CardHeader>
                        <Heading size="md">Card header</Heading>
                    </CardHeader> */}

                    <CardBody>
                        <Stack divider={<StackDivider />} spacing="4">
                            <Box my={4} display='flex' justifyContent='space-between' w='100%'>
                                <Text>
                                    10:00 am <br />
                                    22 Mar 2023
                                </Text>
                                <Text>to</Text>
                                <Text>
                                    10:00 am<br />
                                    22 Mar 2023
                                </Text>
                            </Box>
                            <Box>
                                <Heading size="xs" textTransform="uppercase">
                                    {/* Address */}
                                </Heading>
                                <Text pt="2" fontSize="sm">
                                    Indiranagar (Near metro station)
                                    Metro station, Cafe coffee day basement, #560/1, Rooby Arcade, 4th Cross, Chinmaya Mission Hospital Rd, next to Indiranagar,<br />
                                    Indira Nagar 1st Stage, Bengaluru, Karnataka 560038
                                </Text>
                            </Box>
                            <Box>
                                <Heading size="xs" textTransform="uppercase">
                                    {/* Hours */}
                                </Heading>
                                <Text pt="2" fontSize="sm">
                                    <Box my={4} display='flex' justifyContent='space-between' w='100%'>
                                        <Text>Weekday - 70.5 hrs * rupee18.0/hr </Text>
                                        <Text>₹ 1269.0 </Text>
                                    </Box>
                                    <Box my={4} display='flex' justifyContent='space-between' w='100%'>
                                        <Text>Weekend - 72 hrs * rupee18.0/hr </Text>
                                        <Text>₹ 1269.0 </Text>
                                    </Box>
                                    <Box my={4} display='flex' justifyContent='space-between' w='100%'>
                                        <Text>Total</Text>
                                        <Text>₹ 2565</Text>
                                    </Box>

                                    <Box my={4} display='flex' justifyContent='space-between' w='100%'>
                                        <Text>Number of Helmets (?)</Text>
                                        <Select size='sm' w={20} >
                                            {options.map(option => (
                                                <option key={option} value={option}>{option}</option>
                                            ))}
                                        </Select>
                                    </Box>

                                    <Box my={4} display='flex' justifyContent='space-between' w='100%'>
                                        <Input type="text" mr={2} borderBottom={'1px'} placeholder={'Apply Coupon'} outline={'none'} focusBorderColor={'transparent'} />
                                        <Button colorScheme="orange" color={'black'} w={200}>Apply</Button>
                                    </Box>

                                </Text>
                            </Box>
                            <Box>
                                <Box my={4} display='flex' justifyContent='space-between' w='100%'>
                                    <Text>Km limit (?) </Text>
                                    <Text>713 km</Text>
                                </Box>
                                <Box my={4} display='flex' justifyContent='space-between' w='100%'>
                                    <Text>Excess km charges (?)  </Text>
                                    <Text>4.0/km</Text>
                                </Box>
                                {/* <Heading size="xs" textTransform="uppercase">
                                    Analysis
                                </Heading>
                                <Text pt="2" fontSize="sm">
                                    See a detailed analysis of all your business clients.
                                </Text> */}
                            </Box>
                        </Stack>
                    </CardBody>

                </Box >
            </Flex >
        </Card >
    );
}

export default Summary;
