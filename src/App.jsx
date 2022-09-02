//racfce
import React from 'react'

import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Portaflio from './components/portafolio/Portaflio'
import Testimonials from './components/testimonials/Testimonials'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <About/>
      <Experience />
      <Portaflio/>
      <Contact/>
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App