import { Avatar, Box, Button, Container, Heading, Text, } from '@chakra-ui/react'
import React from 'react'

const blog = () => {
  return (
    <Box style={{ backgroundColor: '#FFFFFF'}}  height={{base: '220vh', lg: '100vh', md: '100vh'}}>
      <Container>
        <Text color='#777777' textAlign='center'>Our Blog</Text>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Heading size='md' color='#000000' fontSize='48px' maxWidth='890px' lineHeight='50px' textAlign='center'>
            Value proposition accelerator product management venture
          </Heading>
        </div>

        <Box display='flex' justifyContent='space-between' margin='30px 0' flexWrap='wrap'>

          <div style={{ width: '240px', height: '330px', padding: '0 10px', margin: '50px 0' }}>
            <img width='100%' src="src/assets/category.jpg" alt="" />

            <div style={{ display: 'flex', alignItems: 'center', gap: "10px", margin: '10px 0' }}>
              <Heading size='sm' color='#0A2640' fontWeight='700' lineHeight='32px'>Category</Heading>
              <Text fontWeight='400' color='#777777'>November 22, 2021</Text>
            </div>

            <Text fontWeight='400' color='#000000' marginBottom='70px'>Pitch termsheet backing validation focus release.</Text>

            <Text color='#000000' fontWeight='400' display='flex' alignItems='center' gap='20px' margin='20px 0'>
              <Avatar.Root>
                <Avatar.Fallback name="Segun Adebayo" />
                <Avatar.Image src="src/assets/blog.svg" />
              </Avatar.Root>
              Chandler Bing</Text>
          </div>

          <div style={{ width: '240px', height: '330px', padding: '0 10px' }}>
            <img width='100%' src="src/assets/category3.jpg" alt="" />

            <div style={{ display: 'flex', alignItems: 'center', gap: "10px", margin: '10px 0' }}>
              <Heading size='sm' color='#0A2640' fontWeight='700' lineHeight='32px'>Category</Heading>
              <Text fontWeight='400' color='#777777'>November 22, 2021</Text>
            </div>

            <Text fontWeight='400' color='#000000'>Seed round direct mailing non-disclosure agreement graphical user interface rockstar.</Text>

            <Text color='#000000' fontWeight='400' display='flex' alignItems='center' gap='20px' margin='20px 0'>
              <Avatar.Root>
                <Avatar.Fallback name="Segun Adebayo" />
                <Avatar.Image src="src/assets/blog.svg" />
              </Avatar.Root>
              Rachel Green</Text>
          </div>

          <div style={{ width: '240px', height: '330px', padding: '0 10px', margin: '50px 0'}}>
            <img width='100%' src="src/assets/category2.jpg" alt="" />

            <div style={{ display: 'flex', alignItems: 'center', gap: "10px", margin: '10px 0' }}>
              <Heading size='sm' color='#0A2640' fontWeight='700' lineHeight='32px'>Category</Heading>
              <Text fontWeight='400' color='#777777'>November 22, 2021</Text>
            </div>

            <Text fontWeight='400' color='#000000' marginBottom='45px'>Beta prototype sales iPad gen-z marketing network effects value proposition</Text>

            <Text color='#000000' fontWeight='400' display='flex' alignItems='center' gap='20px' margin='20px 0'>
              <Avatar.Root>
                <Avatar.Fallback name="Segun Adebayo" />
                <Avatar.Image src="src/assets/blog.svg" />
              </Avatar.Root>
              Monica Geller</Text>
          </div>
        </Box>


        <div style={{display: 'flex', justifyContent: 'center', margin: '130px 0'}}>
          <Button color='#0A2640' border='1px solid #0A2640' borderRadius='20px' _hover={{backgroundColor: '#0A2640', color: '#FFFFFF'}}>Load more</Button>
        </div>
      </Container>
    </Box>
  )
}

export default blog