import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
// import linkPNG from '../images/links2.png'
import LightModeIcon from '@mui/icons-material/LightMode';
// import DarkModeIcon from '@mui/icons-material/DarkMode';
import { mobile, tabletLarge } from '../responsive';
import MenuIcon from '@mui/icons-material/Menu';
import RightNavbar from './RightNavbar';
import useMediaQuery from '../useMediaQuery';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {motion} from 'framer-motion'
const Container=styled.div`
  z-index: 100;
  width: 100%;
  height: 10%;
  /* background-color: black; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* justify-content: space-evenly; */
  align-items: center;
  color: whitesmoke;
  position: relative;
  /* ${mobile({justifyContent:"space-around"})}; */
  
`
const Left=styled.div`
  flex:5;
  display: flex;
  justify-content: center;
  /* background-color: aliceblue; */
`
const Title=styled.div`
  font-size: 3em;
  ${mobile({fontSize:"2.5em"})};
  /* color: #ff7700; */
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 700;
  /* align-items: center; */
  /* float: right; */
  /* padding: 10px; */
`
const Right=styled.div`
  flex: 5;
  /* background-color: aqua; */
  /* padding-bottom:10px; */
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-around;
  font-size: 1.1em;
  ${tabletLarge({display:"none"})};
`
const Link=styled.a`
  /* padding: 20px; */
  cursor: pointer;
  /* justify-content: center; */
  &:hover{
    color: orange;
    /* animation: text-decoration 10s ease-in-out; */
    display: inline-block;
    position: relative;
  }
  &::after{
    content: '';
    position: absolute;
    width: 90%;
    transform: scaleX(0);
    height: 2px;
    bottom: -2px;
    left: 5%;
    background-color: orange;
    transform-origin: center;
  }
  &:hover::after{
    transform: scaleX(1);
    transition: transform 0.2s ease-in;
    transform-origin:center;
  }
  .anchor{
    color: white;
    text-decoration:none;
  }
`
// const OtherLinks=styled.div`
//   cursor: pointer;
//   position: relative;
  /* box-shadow:1px 1px 2px orange; */
  /* outline:1px solid orange;
  outline-offset: 1px; */
  /* border-radius: 50%; */
// `

// const Toggle=styled.div`
//   position: absolute;
//   bottom: -100px;
//   /* left:0; */
//   right: 0;
//   display: flex;
//   flex-direction: column;
//   width: 40px;
//   height: 100px;
//   background-color: red;
// `
// const LinkImage=styled.img`
//   border-radius:50%;
//   &:hover
//   {
//     transition: box-shadow 0.2s ease-in;
//     box-shadow:0px 0px 15px 2px rgba(255,165,0,0.9);
//   }
// `
const Hamburger=styled.div`
  display: none;
  flex:1;
  justify-content: flex-end;
  align-items: center;
  width: 50px;
  ${tabletLarge({display:"block"})};
  .icon:hover{
    transition: box-shadow 0.2s ease-in;
    box-shadow:0px 0px 15px 2px rgba(255, 94, 0, 0.9);
  }
`
const Navbar = () => {
  const [mode,setMode]=useState(false);
  const [toggle,setToggle]=useState(false);
  const activeToggle=()=>{
    setToggle(!toggle);
  }
  // const activeMode=()=>{
  //   setMode(!mode);
  // };
  const isRightNav=useMediaQuery("(max-width:912px)");
  const [isTop,setIsTop]=useState(true);
  useEffect(()=>{
    const handleScroll=()=>{
      if(window.scrollY===0) setIsTop(true);
      else setIsTop(false);
    }
    window.addEventListener("scroll",handleScroll);
    return ()=>window.removeEventListener("scroll",handleScroll);
  },[])

  const [FixedStyle,setFixed]=useState({});
  useEffect(()=>{
    if(!isTop )
    {
      setFixed({position:"fixed",top:"0",backgroundColor:"black"});
      // alert("hi");
    }
    else{
      setFixed();
    }
  },[isTop])

  return (
    <Container style={FixedStyle}>
      <Left>
        <Title>HARSHA</Title>
      </Left>
      <Right>
        <Link><AnchorLink href="#Home" className='anchor'>Home</AnchorLink></Link> 
        <Link><AnchorLink href="#AboutMe" offset={-50} className='anchor'>About-Me</AnchorLink></Link> 
        <Link><AnchorLink href="#Education" offset={65} className='anchor'>Education</AnchorLink></Link> 
        <Link><AnchorLink href="#Skills" offset={60} className='anchor'>Skills</AnchorLink></Link> 
        <Link><AnchorLink href="#Projects" offset={60} className='anchor'>Projects</AnchorLink></Link> 
        <Link><AnchorLink href="#ContactMe"offset={60} className='anchor'>Contact-Me</AnchorLink></Link> 
        {/* <OtherLinks onClick={activeMode}>
          <LightModeIcon/> */}
          {/* <DarkModeIcon/> */}
                                                               {/* PLACE DARK AND WHITE THEME */}
      </Right>
      <Hamburger >
            <MenuIcon onClick={activeToggle} className='icon'/>
      </Hamburger>
      {(toggle && isRightNav)?<RightNavbar activeToggle={activeToggle} />:""}
    </Container>
  )
}

export default Navbar
