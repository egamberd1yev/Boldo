import { Box, Container, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Team = () => {
  return (
    <section style={{ backgroundColor: '#FFFFFF', }} height={{ base: '150vh', md: '100vh' }}>
      <Container>
        <Box padding='90px 50px'>
          <Text fontWeight='400' fontSize='20px' color='#777777'>Our team</Text>
          <Heading size='md' fontWeight='400' fontSize='48px' color='#000000' lineHeight='50px'>The people behind the work</Heading>
          <Text fontWeight='400' fontSize='20px' color='#777777' maxWidth='700px' margin='20px 0'>Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. </Text>
        </Box>

        <Box display='flex' justifyContent={{ base: 'center', md: 'space-between' }} gap='50px' flexWrap='wrap'>
          <div style={{ width: '200px', height: '290px', }}>
            <img src="src/assets/michael.png" alt="" />

            <Heading size='sm' color='#000000' fontSize='28px' lineHeight='32px'>Michael Scott</Heading>
            <Text fontWeight='400' color='#777777' lineHeight='30px'>General Manager</Text>

          </div>

          <div style={{ width: '200px', height: '290px', }}>
            <img src="src/assets/michael.png" alt="" />

            <Heading size='sm' color='#000000' fontSize='28px' lineHeight='32px'>Michael Scott</Heading>
            <Text fontWeight='400' color='#777777' lineHeight='30px'>General Manager</Text>

          </div>

          <div style={{ width: '200px', height: '290px', }}>
            <img src="src/assets/michael.png" alt="" />

            <Heading size='sm' color='#000000' fontSize='28px' lineHeight='32px'>Michael Scott</Heading>
            <Text fontWeight='400' color='#777777' lineHeight='30px'>General Manager</Text>

          </div>
        </Box>

        <Box display='flex' justifyContent={{base: 'center', lg: 'space-between'}} gap='150px' padding={{base: '0px', lg: '20px 0'}}  flexWrap='wrap'>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <img src="src/assets/dwight.png" alt="" />

            <div>
              <Heading size='3xl' color='#000000'>Dwight Schrute</Heading>
              <Text fontWeight='400' fontSize='20px' color='#777777'>General Manager</Text>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <img src="src/assets/pam.png" alt="" />

            <div>
              <Heading size='3xl' color='#000000'>Dwight Schrute</Heading>
              <Text fontWeight='400' fontSize='20px' color='#777777'>General Manager</Text>
            </div>
          </div>
        </Box>

        <Box display='flex' justifyContent={{base: 'center', lg: 'space-between'}} gap='150px' padding={{base: '5px 0', lg: '20px 0'}} flexWrap='wrap'>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <img src="src/assets/pam.png" alt="" />

            <div>
              <Heading size='3xl' color='#000000'>Dwight Schrute</Heading>
              <Text fontWeight='400' fontSize='20px' color='#777777'>General Manager</Text>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <img src="src/assets/pam.png" alt="" />

            <div>
              <Heading size='3xl' color='#000000'>Dwight Schrute</Heading>
              <Text fontWeight='400' fontSize='20px' color='#777777'>General Manager</Text>
            </div>
          </div>
        </Box>
      </Container>
    </section>
  )
}

export default Team