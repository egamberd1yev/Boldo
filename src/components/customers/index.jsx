import React from 'react'
import { Container, Box, Text, Button } from '@chakra-ui/react'
import { FaCircleCheck } from "react-icons/fa6";

const customers = () => {
  return (
    <section style={{backgroundColor: '#FFFFFF', }} height={{base: '180vh', lg: '100vh'}}>
      <Container>
        <Box display='flex' justifyContent='space-between' alignItems='center' gap='50px' padding='30px 0' flexDirection={{base: 'column', lg: 'revert'}}>
          <img src="src/assets/customers.png" alt="" />

          <div>
            <Text style={{ color: '#000000', maxWidth: '500px'}} fontSize={{base: '24px', lg: '36px'}}>We connect our customers with the best, and help them keep up-and stay open.</Text>

            <p style={{color: '#000000', display: 'flex', alignItems: 'center', gap: '20px'}}><FaCircleCheck /> We connect our customers with the best.</p>
            <p style={{color: '#000000', display: 'flex', alignItems: 'center', gap: '20px'}}><FaCircleCheck /> Advisor success customer launch party.</p>
            <p style={{color: '#000000', display: 'flex', alignItems: 'center', gap: '20px'}}><FaCircleCheck /> Business-to-consumer long tail.</p>
            <Button variant='plain' backgroundColor='#0A2640' margin='10px 0' width='140px' borderRadius='10px'>Start now</Button>
          </div>
        </Box>
      </Container>
    </section>
  )
}

export default customers