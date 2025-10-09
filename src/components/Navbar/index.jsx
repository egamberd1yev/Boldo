import { Container, Box, Button, IconButton } from '@chakra-ui/react'
import './index.css'


const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#FFFFFF', height: '10vh'}}>
      <Container>
        <Box display="flex" justifyContent="space-between" alignItems="center" py={4}>
          <Box>
            <img src="src/assets/Logo.svg" alt="Logo" style={{ height: 36 }} />
          </Box>

          <div className='wrapper' style={{ display: 'flex', alignItems: 'center', gap: '20px' }} >
            <ul style={{ display: 'flex', color: '#0A2640', fontWeight: 600, gap: '10px', listStyle: 'none', margin: 0, padding: 0, cursor: 'pointer', }}>
              <li><a href="#product">Product</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
            </ul>

            <Button
              border="1px solid #0A2640"
              borderRadius="20px"
              color="#0A2640"
              size="sm"
              width="150px"
              _hover={{ backgroundColor: '#0A2640', color: 'white' }}>
              Log In
            </Button>
          </div>

        </Box>
      </Container>
    </nav>
  )
}

export default Navbar
