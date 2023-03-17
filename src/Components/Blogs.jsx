// import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, Button, ButtonGroup } from '@chakra-ui/react'
// function Blog() {

//     return (
//         <div>
//             <Card maxW='sm'>
//                 <CardBody>
//                     <Image
//                         src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
//                         alt='Green double couch with wooden legs'
//                         borderRadius='lg'
//                     />
//                     <Stack mt='6' spacing='3'>
//                         <Heading size='md'>Living room Sofa</Heading>
//                         <Text>
//                             This sofa is perfect for modern tropical spaces, baroque inspired
//                             spaces, earthy toned spaces and for people who love a chic design with a
//                             sprinkle of vintage design.
//                         </Text>

//                     </Stack>
//                 </CardBody>
//                 <Divider />

//             </Card>
//         </div>
//     )

// }
// export default Blog

import { Card, CardBody, Divider, Grid, Heading, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react'

const Blogs = () => {
    const cardData = [


        {
            imgSrc:
                'https://d3vp2rl7047vsp.cloudfront.net/articles/article_images/000/000/023/med/Paradise-of-Plantations-in-Karnataka.jpg',
            title: 'Travel',
            description:
                'This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.',
        },
        {
            imgSrc:
                'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
            title: 'Living room Sofa',
            description:
                'This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.',
        },
        {
            imgSrc:
                'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
            title: 'Living room Sofa',
            description:
                'This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.',
        },
        {
            imgSrc:
                'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
            title: 'Living room Sofa',
            description:
                'This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.',
        },
        {
            imgSrc:
                'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
            title: 'Living room Sofa',
            description:
                'This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.',
        },
        {
            imgSrc:
                'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
            title: 'Living room Sofa',
            description:
                'This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.',
        },
        // add more card data here
    ]

    return (
        <div style={{ padding: "10px", marginTop: "20px" }}>

            <Heading textAlign={"center"}>Blog</Heading>
            <SimpleGrid templateColumns={{
                // base: "repeat(5,1fr)",
                md: "repeat(2,1fr)",
                sm: "repeat(1,1fr)",
                lg: "repeat(3,1fr)"
            }} spacing={8} justifyItems="center" p={"20px"} >
                {cardData.map((card, index) => (
                    <Card key={index} maxW=''>
                        <CardBody>
                            <Image src={card.imgSrc} alt={card.title} borderRadius='sm' objectFit={"cover"} w={"100%"} />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>{card.title}</Heading>
                                <Text>{card.description}</Text>
                            </Stack>
                        </CardBody>
                        <Divider />
                    </Card>
                ))}
            </SimpleGrid>
        </div>
    )
}

export default Blogs
