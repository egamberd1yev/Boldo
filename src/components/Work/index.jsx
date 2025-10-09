import { Box, Container, Heading, Text, Wrap } from '@chakra-ui/react'
import { IoIosArrowDropdownCircle } from 'react-icons/io'

const Work = () => {
  return (
    <section style={{ backgroundColor: '#FFFFFF', height: '120vh' }}>
      <Container>
        <Box>

          <div style={{ display: 'flex', justifyContent: 'center', padding: '80px 0' }}>
            <img src="src/assets/group.png" alt="" />
          </div>

          <Box style={{ display: 'flex', justifyContent: 'space-between'}} flexDirection={{base: 'column', md: 'revert'}} >
            <Heading size='md' color='#000000' fontSize={{ base: '24px', lg: '36px' }} maxWidth='470px' lineHeight='40px' >We connect our customers with the best, and help them keep up-and stay open.</Heading>

            <Wrap display='block'>
              <Text fontSize={{base: '14px', md: '20px'}} style={{ display: 'flex', alignItems: 'center', gap: '20px', color: '#000000', borderBottom: '1px solid #C4C4C4', padding: '10px 0' }} width={{ base: '230px', md: '410px' }}>
                We connect our customers with the best?
                <IoIosArrowDropdownCircle />
              </Text>

              <Text fontSize={{base: '14px', md: '20px'}} style={{ display: 'flex', alignItems: 'center', gap: '20px', color: '#000000', borderBottom: '1px solid #C4C4C4', padding: '10px 0' }} width={{ base: '230px', md: '430px'}}>
                Android research & development rockstar?
                <IoIosArrowDropdownCircle />
              </Text>
            </Wrap>

          </Box>
        </Box>
      </Container>
    </section>
  )
}

export default Work