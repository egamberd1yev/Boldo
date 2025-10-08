import React, { useEffect, useRef } from 'react'
import { Container, Box, Button, IconButton } from '@chakra-ui/react'
import { MdOutlineMenu } from "react-icons/md";
import './index.css'


const Navbar = () => {
  const burgerRef = useRef(null)
  const wrapperRef = useRef(null)

  useEffect(() => {
    const burger = burgerRef.current
    const wrapper = wrapperRef.current
    if (!burger || !wrapper) return


    const handleClick = () => {
      wrapper.classList.toggle('wrapper--active')
    }


    const handleKeyDown = (evt) => {
      if (evt.key === 'Escape') {
        wrapper.classList.remove('wrapper--active')
      }
    }

    burger.addEventListener('click', handleClick)
    window.addEventListener('keydown', handleKeyDown)

    // Tozalash (unmount yoki dependency o'zgarganda)
    return () => {
      burger.removeEventListener('click', handleClick)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <nav style={{ backgroundColor: '#FFFFFF', height: '100vh'}}>
      <Container maxW="container.xl">
        <Box display="flex" justifyContent="space-between" alignItems="center" py={4}>
          <Box>
            <img src="src/assets/Logo.svg" alt="Logo" style={{ height: 36 }} />
          </Box>

          <div className='wrapper' style={{ display: 'flex', alignItems: 'center', gap: '20px' }} ref={wrapperRef}>
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

          <MdOutlineMenu 
            ref={burgerRef}
            aria-label="Open menu"
            display={{ base: 'inline-flex', md: 'none' }}
            style={{width: '30px', display: 'none'}}
            variant="plain"
            size="md"
            type="button"
            color='#0A2640'
          />
        </Box>
      </Container>
    </nav>
  )
}

export default Navbar
