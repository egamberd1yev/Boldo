import React from 'react'
import { Container, Text, Box } from '@chakra-ui/react'
import { FaArrowRight } from "react-icons/fa";

const Services = () => {
  return (
    <section style={{ backgroundColor: '#0A2640',}} height={{base: '180vh', lg: '120vh', md: '200vh'}} >
      <Container>
        <Text fontSize={{ base: '14px', md: '20px' }} textAlign='center' color='#F1F1F1' lineHeight='100px'>Our services</Text>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Text fontSize={{ base: '28px', lg: '28px', xl: '46px' }} textAlign='center' maxWidth="800px" >Handshake infographic mass market crowdfunding iteration.</Text>
        </div>

 
        <Box display='flex' justifyContent={{base: 'center', lg: 'space-between'}} gap='20px' padding='20px 0' flexWrap='wrap'> 
          <div>
            <img src="src/assets/cool-img.png" alt="" />

            <Text lineHeight='40px' fontSize='24px'>Cool feature title</Text>

            <a style={{ display: 'flex', alignItems: 'center', gap: '20px', fontWeight: '700', cursor: 'pointer' }}>Explore page <FaArrowRight /> </a>
          </div>

          <div>
            <img src="src/assets/meeting.png" alt="" />

            <Text lineHeight='40px' fontSize='24px'>Cool feature title</Text>

            <a style={{ display: 'flex', alignItems: 'center', gap: '20px', fontWeight: '700', cursor: 'pointer' }}>Explore page <FaArrowRight /> </a>
          </div>

          <div>
            <img src="src/assets/alone.png" alt="" />

            <Text lineHeight='40px' fontSize='24px'>Cool feature title</Text>

            <a style={{ display: 'flex', alignItems: 'center', gap: '20px', fontWeight: '700', cursor: 'pointer' }}>Explore page <FaArrowRight /> </a>
          </div>
        </Box>

      </Container>
    </section>
  )
}

export default Services