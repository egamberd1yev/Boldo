import React from 'react'
import { Container, Box, Button} from "@chakra-ui/react"
import './index.css'

const Navbar = () => {
  return (
    <nav style={{backgroundColor: '#FFFFFF', height: '100vh'}}>
      <Container>
        <Box display='flex' justifyContent='space-between' >
        <img src="src/assets/Logo.svg" alt="" />

          <div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
            <ul style={{display: 'flex', color: '#0A2640', fontWeight: '600', gap: '10px', cursor: 'pointer'}}>
              <li><a href="">Product</a></li>
              <li><a href="">Services</a></li>
              <li><a href="">About</a></li>
            </ul>

            <Button border='1px solid #0A2640' borderRadius='20px' color='#0A2640' size='xs' width='150px' _hover={{backgroundColor: '#0A2640', color: 'white'}}>Log In</Button>
          </div>
        </Box>
      </Container>
    </nav>
  )
}

export default Navbar