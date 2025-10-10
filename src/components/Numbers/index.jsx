import { Box, Container, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Numbers = () => {
  return (
    <Box style={{ backgroundColor: '#FFFFFF',}} height={{base: '120vh', sm: '60vh'}}>
      <Container>
        <Text fontWeight='400' fontSize='20px' color='#0A2640' textAlign='center' padding='30px 0'>Our numbers</Text>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Heading size='md' fontWeight='400' fontSize='48px' color='#0A2640' maxWidth='800px' lineHeight='50px' textAlign='center'>Handshake infographic mass market crowdfunding iteration.</Heading>
        </div>

        <Box display='flex' justifyContent={{base: 'center', md: 'space-between'}} gap='10px' margin='10px 0' flexWrap='wrap'>
          <div>
            <Text fontWeight='400' fontSize='96px' color='#0A2640'>120m</Text>
            <Text fontWeight='400' fontSize='24px' color='#0A2640'>Cool feature title</Text>
          </div>

          <div>
            <Text fontWeight='400' fontSize='96px' color='#0A2640'>10.000</Text>
            <Text fontWeight='400' fontSize='24px' color='#0A2640'>Cool feature title</Text>
          </div>

          <div>
            <Text fontWeight='400' fontSize='96px' color='#0A2640'>240</Text>
            <Text fontWeight='400' fontSize='24px' color='#0A2640'>Cool feature title</Text>
          </div>
        </Box>
      </Container>
    </Box>
  )
}

export default Numbers