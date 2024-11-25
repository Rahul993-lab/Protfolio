import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Protfolio from './components/Protfolio'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Contact from './components/Contact'
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
        <Protfolio />
        <Experience />
        <Contact />
        <Footer />
      </div>
      <Toaster />
    </>
  )
}

export default App
