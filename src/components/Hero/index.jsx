import React from 'react'
import { Container, Box, Button, Text } from '@chakra-ui/react'

const Hero = () => {
  return (
    <section style={{ backgroundColor: 'white', height: '70vh' }}>
      <Container>
        <Box display='flex' justifyContent='space-between' alignItems='center' flexDirection={{ base: 'column', md: 'initial' }}>
          <div>
            <Text style={{ color: '#000000', maxWidth: '600px' }} fontSize={{ base: '28px', lg: '28px', xl: '46px' }} textAlign={{ base: 'center', md: 'left' }}>Save time by building  fast with Boldo Template </Text>
            <Text color='#777777' maxWidth='580px' fontSize={{ base: '14px', lg: '16px' }} textAlign={{ base: 'center', md: 'left' }}>Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.</Text>

            <div style={{ display: 'flex', gap: '10px', margin: '20px 0', justifyContent: 'center' }}>
              <Button variant='solid' width='160px' color='#FFFFFF' borderRadius='20px' fontWeight='700' background='#0A2640' _hover={{ backgroundColor: 'white', color: '#0A2640', border: '1px solid #0A2640' }}>Buy template</Button>
              <Button width='110px' color='#0A2640' border='1px solid #0A2640' _hover={{ backgroundColor: '#0A2640', color: 'white' }} borderRadius='20px'>Explore</Button>
            </div>
          </div>

          <img width='30%' src="src/assets/HeroGraphics.jpg" alt="" />
        </Box>

        <Box display={{base: 'none', md: 'flex'}} justifyContent='space-between' margin='10px 0' overflow='visible' padding='10px' gap='20px' >
          <img src="src/assets/Logo.svg" alt="" />
          <img src="src/assets/presto.svg" alt="" />
          <img src="src/assets/Logo.svg" alt="" />
          <img src="src/assets/presto.svg" alt="" />        
        </Box>
      </Container>
    </section>
  )
}

export default Hero