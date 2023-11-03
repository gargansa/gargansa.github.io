import React from 'react'
import NavBar from './NavBar'
import About from './About'
import Skills from './Skills'
import Education from './Education'
import Experience from './Experience'
import Projects from './Projects'

function Home() {
  return (
    <div>
        <NavBar/>
        {/* <Header/> */}
        <About/>
        <Experience/>
        <Education/>
        <Skills/>
        <Projects/> 
    </div>
  )
}

export default Home