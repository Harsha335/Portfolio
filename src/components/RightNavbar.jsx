import React from 'react'
import styled from 'styled-components'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import AnchorLink from 'react-anchor-link-smooth-scroll';
// import Scrollbars from 'react-custom-scrollbars';

const Container=styled.div`
    position: fixed;
    top:10%;
    /* bottom: 0; */
    width: 100%;
    background-color: black;
    height: 100%;
    z-index: 101;
    display: flex;
    align-items: center;
    /* justify-content:center; */
    flex-direction: column;
    /* overflow-x: hidden; */
`
const Link=styled(AnchorLink)`
    cursor: pointer;
    padding: 1.6em;
    /* background-color: wheat; */
    width: 100%;
    text-decoration: none;
    color:white;
  &:hover{
    color: orange;
    /* animation: text-decoration 10s ease-in-out; */
    display: inline-block;
    position: relative;
  }
  &::after{
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: orange;
    transform-origin: center;
  }
  &:hover::after{
    transform: scaleX(1);
    transition: transform 0.2s ease-in;
    transform-origin:center;
  }
  .anchor{
    color:white;
    text-decoration:none;
  }
`
const OtherLinks=styled.div`
    margin-top:20px ;
    /* margin-left: -6em; */
    display: flex;
    align-items:flex-start;
    justify-content:space-around;
    width:200px;
    padding: 5px 0;
    border-radius:20px;
    cursor: pointer;
    &>:hover
    {
        transition: box-shadow 0.2s ease-in;
        box-shadow:0px 0px 20px 1px rgba(255, 98, 0, 0.9);
    }
`
const RightNavbar = ({activeToggle}) => {

  return (
    <Container>
      {/* <Scrollbars style={{width:"100%",height:"100%"}}> */}
        <Link href="#Home" className='anchor' onClick={activeToggle}>Home</Link> 
        <Link href="#AboutMe" offset={-55} className='anchor' onClick={activeToggle}>About-Me</Link> 
        <Link href="#Education" offset={65} className='anchor' onClick={activeToggle}>Education</Link> 
        <Link href="#Skills" offset={68} className='anchor' onClick={activeToggle}>Skills</Link> 
        <Link href="#Projects" offset={68} className='anchor' onClick={activeToggle}>Projects</Link> 
        <Link href="#ContactMe" offset={65} className='anchor' onClick={activeToggle}>Contact-Me</Link>
        <OtherLinks>
            <LinkedInIcon onClick={()=>window.location.href='https://www.linkedin.com/in/harshavardhan-asadi-b71898220'}/>
            <GitHubIcon onClick={()=>window.location.href='https://github.com/Harsha335'}/>
            <InstagramIcon onClick={()=>window.location.href='https://www.instagram.com/_ha.r.sha'}/>
        </OtherLinks>
        {/* </Scrollbars > */}
    </Container>
  )
}

export default RightNavbar
