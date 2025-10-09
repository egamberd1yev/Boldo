import React from 'react'
import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import Services from '../../components/Services'
import Customers from '../../components/customers'

const Home = () => {
  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>
    <Services></Services>
    <Customers></Customers>
    </>
  )
}

export default Home