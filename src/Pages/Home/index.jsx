import React from 'react'
import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import Services from '../../components/Services'
import Customers from '../../components/customers'
import Connect from '../../components/connect'
import Testmissional from '../../components/testmissional'
import Work from '../../components/Work'
import Blog from '../../components/blog'
import Email from '../../components/email'


const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Services></Services>
      <Customers></Customers>
      <Connect></Connect>
      <Testmissional></Testmissional>
      <Work></Work>
      <Blog></Blog>
      <Email></Email>
    </>
  )
}

export default Home   