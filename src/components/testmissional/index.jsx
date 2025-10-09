import { Avatar, Box, Container, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const testmissional = () => {
  return (
    <section style={{ backgroundColor: '#0A2640',  padding: '20px 0' }} height={{base: '150vh', lg: '90vh'}}>
      <Container>
        <Heading style={{ maxWidth: '700px', lineHeight: '50px' }} textAlign={{base: 'center', lg: 'left'}} fontSize={{ base: '32px', lg: '48px' }}>An enterprise template to ramp up your company website</Heading>

        <Box display='flex' justifyContent={{base: 'center', lg: 'space-between'}} gap='20px' alignItems='center' margin='20px 0' flexWrap='wrap'>
          
          <div style={{ width: '260px', height: '270px', backgroundColor: 'white', borderRadius: '10px', margin: '20px 0', padding: '20px' }}>
            <Text color='#000000' fontSize='20px'>“Buyer buzz partner network disruptive non-disclosure agreement business”</Text>

            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '30px 0', alignItems: 'center', gap: '10px' }}>
              <Avatar.Root>
                <Avatar.Fallback name="Segun Adebayo" />
                <Avatar.Image src="src/assets/avatar.svg" />
              </Avatar.Root>

              <Box>
                <Heading fontSize='16px' color='#0A2640' size="xl">Albus Dumbledore</Heading>
                <Text color='#0A2640' fontSize='14px' fontWeight='700' >Manager @ Howarts</Text>
              </Box>
            </div>
          </div>

          <div style={{ width: '260px', height: '350px', backgroundColor: 'white', borderRadius: '10px', margin: '20px 0', padding: '20px' }}>
            <Text color='#000000' fontSize='20px'>“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”</Text>

            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '30px 0', alignItems: 'center', gap: '10px' }}>
              <Avatar.Root>
                <Avatar.Fallback name="Segun Adebayo" />
                <Avatar.Image src="src/assets/avatar2.svg" />
              </Avatar.Root>

              <Box>
                <Heading fontSize='16px' color='#0A2640' size="xl">Albus Dumbledore</Heading>
                <Text color='#0A2640' fontSize='14px' fontWeight='700' >Manager @ Howarts</Text>
              </Box>
            </div>
          </div>

          <div style={{ width: '260px', height: '290px', backgroundColor: 'white', borderRadius: '10px', margin: '20px 0', padding: '20px' }}>
            <Text color='#000000' fontSize='20px'>“Release facebook responsive web design business model canvas seed money monetization.”</Text>

            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '30px 0', alignItems: 'center', gap: '10px' }}>
              <Avatar.Root>
                <Avatar.Fallback name="Segun Adebayo" />
                <Avatar.Image src="src/assets/avatar3.svg" />
              </Avatar.Root>

              <Box>
                <Heading fontSize='16px' color='#0A2640' size="xl">Albus Dumbledore</Heading>
                <Text color='#0A2640' fontSize='14px' fontWeight='700' >Manager @ Howarts</Text>
              </Box>
            </div>
          </div>

        </Box>
      </Container>
    </section>
  )
}

export default testmissional