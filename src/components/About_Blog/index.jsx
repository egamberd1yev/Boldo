import { Box, Container, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const About_Blog = () => {
  return (
    <section style={{ backgroundColor: '#0A2640', height: '160vh' }}>
      <Container>
        <Text fontWeight='400' textAlign='center' padding='50px 0'>Our Blog</Text>

        <div style={{ display: 'flex', justifyContent: 'center', borderBottom: '1px solid #A3AEB7', padding: '20px 0' }}>
          <Heading size='xl' fontWeight='400' fontSize='48px' maxWidth='800px' textAlign='center' lineHeight='42px'>Value proposition accelerator product management venture</Heading>
        </div>

        <Box style={{ display: 'flex', justifyContent: 'space-between', margin: '30px 0' }} flexDirection={{ base: 'column', lg: 'revert' }} gap='20px' textAlign={{ base: 'center', lg: 'left' }}>
          <Heading fontWeight='400' fontSize='42px' color='#FFFFFF'>We are <span style={{ color: '#69E6A6' }}>commited.</span></Heading>
          <Box display='flex' justifyContent={{ base: 'center', lg: 'left' }}>
            <Text fontWeight='400' fontSize='20px' color='#F1F1F1' maxWidth='500px'>Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. </Text>
          </Box>
        </Box>

        <Box style={{ display: 'flex', justifyContent: 'space-between', margin: '30px 0' }} flexDirection={{ base: 'column', lg: 'revert' }} gap='20px' textAlign={{ base: 'center', lg: 'left' }}>
          <Heading fontWeight='400' fontSize='42px' color='#FFFFFF'>We are <span style={{ color: '#69E6A6' }}>responsible.</span></Heading>
          <Box display='flex' justifyContent={{ base: 'center', lg: 'left' }}>
            <Text fontWeight='400' fontSize='20px' color='#F1F1F1' maxWidth='500px'>Mass market iPhone buzz conversion analytics stock iteration responsive web design user experience business plan handshake. Return on investment seed round MVP backing supply chain.  </Text>
          </Box>
        </Box>

        <Box style={{ display: 'flex', justifyContent: 'space-between', margin: '30px 0' }} flexDirection={{ base: 'column', lg: 'revert' }} gap='20px' textAlign={{ base: 'center', lg: 'left' }}>
          <Heading fontWeight='400' fontSize='42px' color='#FFFFFF'>We aim for  <span style={{ color: '#69E6A6' }}>progress.</span></Heading>
          <Box display='flex' justifyContent={{ base: 'center', lg: 'left' }}>
            <Text fontWeight='400' fontSize='20px' color='#F1F1F1' maxWidth='500px'>Bootstrapping rockstar first mover advantage business model canvas alpha deployment launch party beta facebook metrics gamification growth hacking customer focus. </Text>
          </Box>
        </Box>
      </Container>
    </section>
  )
}

export default About_Blog