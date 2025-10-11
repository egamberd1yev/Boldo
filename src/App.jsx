import React from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import { Route, Routes } from 'react-router-dom'
import Blog from './Pages/Blog'

const App = () => {
  return (
    <>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
    </>
  )
}

export default App