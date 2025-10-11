import { Box, Button, Container, Heading, Input } from '@chakra-ui/react'
import React from 'react'

const Email = () => {
  return (
    <section style={{ backgroundColor: '#FFFFFF' }}>
      <Container>
        <Box backgroundColor='#0A2640' height='50vh' borderRadius='10px' padding='40px 0' margin='30px 0'>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Heading fontWeight='400' fontSize={{base: '20px', sm: '48px'}} textAlign='center' maxWidth='680px' lineHeight='50px'>An enterprise template to ramp up your company website</Heading>
          </div>

          <form style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', margin: '40px 0'}}>
            <Input
              style={{padding: '8px 10px', backgroundColor: '#FFFFFF', borderRadius: '20px', color: '#0A2640'}}
              width={{base: '200px', sm: '250px'}}
              type="email" placeholder='Your email address' />
              <Button style={{padding: '8px 10px', backgroundColor: '#65E4A3', fontWeight: '700', fontSize: '20px', color: '#0A2640', borderRadius: '40px',}} width={{base: '100px', sm: '140px'}} >Start now</Button>
          </form>
        </Box>
      </Container>
    </section>
  )
}

export default Email