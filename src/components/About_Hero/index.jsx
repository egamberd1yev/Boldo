import { Box, Container, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const About_Hero = () => {
  return (
    <section style={{ backgroundColor: '#65E4A3', height: '40vh' }}>
      <Container>
        <Box display='flex' justifyContent='space-between' alignItems='center' gap='20px' flexDirection={{base: 'column', md: 'revert'}}>
          <div>
            <Text fontWeight='400' color='#0A2640' fontSize='20px'>About</Text>

            <Heading fontWeight='400' fontSize={{base: '28px', lg: '48px'}} color='#000000' maxWidth='550px' lineHeight='55px' textAlign={{base: 'center', md: 'left'}}>
              We love to make great things, things that matter.
            </Heading>
          </div>

          <Text fontWeight='400' color='#0A2640' maxWidth='440px' textAlign={{base: 'center', md: 'left'}}>
            Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.
          </Text>
        </Box>
      </Container>
    </section>
  )
}

export default About_Hero