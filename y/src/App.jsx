import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//COMPONENTS
import Navbar from './components/navbar'
import Header from './components/header'
import About from './components/about'
import Offer from './components/offer'
import Contact from './components/contact'
import Footer from './components/footer'

function App() {
  return (
  <div>
    <Navbar/>
      <div className='sm:ml-[70px]'>
      <Header/>
      <About/>
      <Offer />
      <Contact/>
      <Footer />
      </div>
  </div>
  )
}

export default App
