import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Achievments from './pages/Achievments'
import Contact from './pages/Contact'
import Footer from './components/Footer'
const App = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    <Skills/>
    <Projects/>
    <Achievments/>
    <Contact/>
    <Footer/>
    </>


  )
}

export default App