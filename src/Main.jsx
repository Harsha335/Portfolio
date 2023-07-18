import React from 'react'
import { styled } from 'styled-components'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ContactMe from './components/ContactMe'
const Container=styled.div`
    margin: 0;
    padding: 0;
`
const Main = () => {
  return (
    <Container>
        <Home/>
        <AboutMe/>
        <Education/>
        <Skills/> 
        <Projects/>
        <ContactMe/>
    </Container>
  )
}

export default Main
