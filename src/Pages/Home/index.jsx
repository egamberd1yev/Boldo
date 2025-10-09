import React from 'react'
import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import Services from '../../components/Services'
import Customers from '../../components/customers'
import Connect from '../../components/connect'
import Testmissional from '../../components/testmissional'
const Home = () => {
  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>
    <Services></Services>
    <Customers></Customers>
    <Connect></Connect>
    <Testmissional></Testmissional>
    </>
  )
}

export default Home