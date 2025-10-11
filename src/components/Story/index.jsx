import { Container, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Story = () => {
  return (
    <section style={{ backgroundColor: '#0A2640', padding: '90px',}} height={{base: '120vh', lg: '80vh'}}>
      <Container>
        <Text fontWeight='400' fontSize='20px' >Our story</Text>
        <Heading size='md' fontWeight='400' fontSize={{base: '22px', md: '48px'}}  lineHeight='60px'>
          Handshake infographic mass market crowdfunding iteration.
        </Heading>

        <Text fontWeight='400'fontSize='20px' color='#F1F1F1' maxWidth='760px' margin='20px 0'>Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. Sales user experience branding growth hacking holy grail monetization conversion prototype stock network effects. Learning curve network effects return on investment bootstrapping business-to-consumer. </Text>
      </Container>
    </section>
  )
}

export default Story