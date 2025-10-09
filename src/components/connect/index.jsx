import { Box, Container } from '@chakra-ui/react'
import { FaPenNib } from 'react-icons/fa'
import { FiSun } from 'react-icons/fi'
import { IoEyeOutline } from 'react-icons/io5'

const connect = () => {
  return (
    <section style={{backgroundColor: '#FFFFFF'}} height={{base: '180vh', lg: '100vh'}}>
      <Container>
        <Box display='flex' justifyContent='space-between' alignItems='center' flexDirection={{base: 'column', lg: 'revert'}}>
          <div>
            <h2 style={{color: '#000000', fontSize: '36px', maxWidth: '500px'}}>We connect our customers with the best, and help them keep up-and stay open.</h2>

            <p style={{display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: '#0A2640', width: '500px', padding: '10px', marginTop: '20px', borderRadius: '5px', boxShadow: '0 10px 15px 0 #F5F5F5'}}><FaPenNib /> We connect our customers with the best.</p>
            <p style={{display: 'flex', alignItems: 'center', gap: '10px', color: '#000000' , backgroundColor: 'white', width: '500px', padding: '10px', marginTop: '20px', borderRadius: '5px', boxShadow: '20px 10px 15px 0 #F5F5F5'}}><IoEyeOutline /> We connect our customers with the best.</p>
            <p style={{display: 'flex', alignItems: 'center', gap: '10px', color: '#000000' , backgroundColor: 'white', width: '500px', padding: '10px', marginTop: '20px', borderRadius: '5px', boxShadow: '20px 10px 15px 0 #F5F5F5'}}><FiSun /> We connect our customers with the best.</p>
          </div>

          <img src="src/assets/connect.png" alt="" />
        </Box>
      </Container>
    </section>
  )
}

export default connect