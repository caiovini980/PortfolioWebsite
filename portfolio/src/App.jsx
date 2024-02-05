// LIBRARIES
import React from 'react'

// COMPONENTS
import Intro from './components/Intro'
import Footer from './components/Footer'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Timeline from './components/Timeline'

// METHODS
function App() {
  return (
    <div className='App'>
      <Intro />
      <Portfolio />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
