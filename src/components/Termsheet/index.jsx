import { Avatar, Box, Container, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Termsheet = () => {
  return (
    <section style={{ backgroundColor: '#FFFFFF', height: '100vh' }}>
      <Container>
        <Text fontWeight='400' fontSize='20px' color='#0A2640' textAlign='center'>Blog</Text>
        <Heading fontWeight='400' fontSize='64px' color='#0A2640' textAlign='center' lineHeight={{base: '70px', md: '20px'}}>Thoughts and words</Heading>

        <Box display='flex' alignItems='center' gap='100px' margin='40px 0' padding='20px 0' borderBottom='1px solid #0A2640' flexDirection={{base: 'column', lg: 'revert'}}>
          <img src="src/assets/blog-img.jpg" alt="" />

          <div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Heading size='sm' fontWeight='700' color='#0A2640'>Category</Heading>
              <Text fontWeight='400' color='#777777'>November 22, 2021</Text>
            </div>

            <Heading fontWeight='400' fontSize='36px' color='#000000' lineHeight='70px' textAlign={{base: 'center', md: 'left'}}>Pitch termsheet backing validation focus release.</Heading>
            <div style={{display: 'flex', alignItems: 'center', gap: '20px', margin: '30px 0'}}>
              <Avatar.Root>
                <Avatar.Fallback name="Segun Adebayo" />
                <Avatar.Image src="src/assets/avatar.svg" />
              </Avatar.Root>

              <Heading fontWeight='400' color='#000000'>Chandler Bing</Heading>
            </div>
          </div>
        </Box>
      </Container>
    </section>
  )
}

export default Termsheet