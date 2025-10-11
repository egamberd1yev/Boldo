import React from 'react'
import About_Nav from '../../components/About_Nav'
import About_Hero from '../../components/About_Hero'
import Numbers from '../../components/Numbers'
import Story from '../../components/Story'
import Team from '../../components/Team'
import About_Blog from '../../components/About_Blog'
import Email from '../../components/Email'
import Footer from '../../components/Footer'

const About = () => {
  return (
    <section style={{backgroundColor: 'white', height: '1000vh'}}>
      <About_Nav />
      <About_Hero />
      <Numbers />
      <Story />
      <Team></Team>
      <About_Blog />
      <Email></Email>
      <Footer></Footer>
    </section>
  )
}

export default About