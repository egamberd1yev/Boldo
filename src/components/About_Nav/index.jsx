import { Container, Box, Button, IconButton } from '@chakra-ui/react'
import './index.css'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#65E4A3', height: '10vh'}}>
      <Container>
        <Box display="flex" justifyContent="space-between" alignItems="center" py={4}>
          <Box>
            <img src="src/assets/Logo.svg" alt="Logo" style={{ height: 36 }} />
          </Box>

          <div className='wrapper' style={{ display: 'flex', alignItems: 'center', gap: '20px' }} >
            <ul style={{ display: 'flex', color: '#0A2640', fontWeight: 600, gap: '10px', listStyle: 'none', margin: 0, padding: 0, cursor: 'pointer', }}>
              <li><NavLink to='/'>Product</NavLink></li>
              <li><NavLink to='/'>Services</NavLink></li>
              <li><NavLink to='/about'>About</NavLink></li>
            </ul>

            <Button
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
