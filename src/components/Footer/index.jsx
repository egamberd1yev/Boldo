import { Box, Container, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#FFFFFF', height: '75vh' }}>
      <Container>
        <Box display='flex' justifyContent='space-between' gap='10px' alignItems='center' padding='130px 0' flexWrap='wrap'>

          <div>
            <img src="src/assets/Logo.svg" alt="" />

            <Text fontWeight='400' color='#777777' maxWidth='300px' margin='20px 0'>Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.</Text>

            <Text fontWeight='400' color='#777777' margin='20px 0'>All rights reserved.</Text>
          </div>


          <div>
            <Heading size='sm' fontWeight='700' fontSize='20px' color='#000000'>Landings</Heading>

            <Text fontWeight='400' fontSize='20px' color='#777777' lineHeight='42px'>Home</Text>
            <Text fontWeight='400' fontSize='20px' color='#777777' lineHeight='42px'>Products</Text>
            <Text fontWeight='400' fontSize='20px' color='#777777' lineHeight='42px'>Services</Text>
          </div>

          <div>
            <Heading size='sm' fontWeight='700' fontSize='20px' color='#000000'>Company</Heading>

            <Text fontWeight='400' fontSize='20px' color='#777777' lineHeight='42px'>Home</Text>
            <Text fontWeight='400' fontSize='20px' color='#777777' lineHeight='42px'>Careers</Text>
            <Text fontWeight='400' fontSize='20px' color='#777777' lineHeight='42px'>Services</Text>
          </div>

          <div>
            <Heading size='sm' fontWeight='700' fontSize='20px' color='#000000'>Resources</Heading>

            <Text fontWeight='400' fontSize='20px' color='#777777' lineHeight='42px'>Home</Text>
            <Text fontWeight='400' fontSize='20px' color='#777777' lineHeight='42px'>Products</Text>
            <Text fontWeight='400' fontSize='20px' color='#777777' lineHeight='42px'>Services</Text>
          </div>
        </Box>
      </Container>
    </footer>
  )
}

export default Footer