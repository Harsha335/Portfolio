import React, { useEffect, useState } from 'react'
import  styled  from 'styled-components'
import Navbar from './Navbar'
import ReactTyped from 'react-typed'
import pic from "../images/harsha_pic1.png"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import AboutMe from './AboutMe'
import { mobile, tablet } from '../responsive'
import {delay, motion} from 'framer-motion'
import Education from './Education'
import Skills from './Skills'
import Projects from './Projects'
import ContactMe from './ContactMe'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import resume from '../images/Harsha_Resume_III_II.pdf'
// import axios from 'axios'
// import fileDownload from 'js-file-download'

// import {Scrollbars} from 'react-custom-scrollbars'
const Container=styled.div`
    width: 100%;
    height: 90vh;   //100vh
    background-color: #000228;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    position: relative;
    min-width: 0px;
  min-height: 0px;
    /* svg {
  display: inline-block;
  position: static;
  bottom:-10vh;
   left: 0; 
}*/
/* .container {
  display: inline-block;
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  vertical-align: middle;
  overflow: hidden; 
} */
`
const Curve=styled.div`
    position: absolute;
    height: 200px;
    width: 100%;
    bottom: 0;
    text-align: center;
    /* overflow-x: hidden;       //CHANCE OF OVERFOW */
    &::before{
        content:"";
        display: block;
        position: absolute;
        border-radius: 100% 50%;
        width:55%;
        height: 100%;
        transform: translate(81.86%,65%);
        background-color:#d8d6d6;
        z-index: 0;
    }
    &::after{
        content:"";
        overflow: hidden;
        display: block;
        position: absolute;
        border-radius: 100% 50%;
        width:55%;
        height: 100%;
        transform: translate(-4.6%,40%);
        background-color: #000228;
        z-index: 2;
    }
`
const LandingPage=styled.div`
    display: flex;
    /* align-items: center; */
    flex-direction: row;
    width: 100%;
    flex:1;
    ${tablet({flexDirection:"column-reverse"})};
/* height: 100%; */
`
const Content=styled.div`
    width: 100%;
    /* height: 100%; */
    /* background-color: black; */
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    flex-direction: row;
    font-size: 1.8em;
    ${tablet({fontSize:"1.2em"})};
    ${tablet({marginTop:"-5em"})};
    padding: 2em;
`
const Links=styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 200px;
    background-color: #040404;
    padding: 5px 0;
    border-radius:20px;
    cursor: pointer;
    .link:hover
    {
        transition: box-shadow 0.2s ease-in;
        box-shadow:0px 0px 20px 1px #ff6200e5;
    }
    ${tablet({padding:"10px",display:"none"})};

    /* background-color: aliceblue; */
`
const Context=styled.div`
    flex:12;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* background-color: #fff; */
`
const Title=styled.div`
    /* color:white; */
    padding: 20px;
    /* font-size: 1.8em; */
    /* font-size: 1.8em; */
`
const Buttons = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    width: 100%;
    /* justify-content: space-evenly; */
    align-items: center;
    justify-content: center;
    font-size: 1rem;
`
const HireMe = styled(AnchorLink)`
  /* width: fit-content; */
  padding: 10px 20px;
  ${mobile({padding:"10px"})};
  border: 3px solid white;
  border-radius: 20px;
  cursor: pointer;
  z-index: 3;
  color:#ff6a00;
  text-decoration: none;
  /* display: block; */
  &:hover{
      color: white;
      background-color: #ff2f00;
    }
`

const GetResume = styled.a`
  /* width: fit-content; */
  z-index: 3;
  background-color: #ff2f00;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
  margin-left: 2em;
  text-decoration: none;
  color:white;
  &:hover{
    background-color: white;
    border: 3px solid #ff2f00;
    color: #ff2f00;
    box-sizing: border-box;
  }
`


const Picture=styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: center;
`
const ImgContainer=styled.div`
    box-shadow: 0 1px 0 0 white;
    border-radius: 50%;
    height: 380px;
    width: 380px;
    ${tablet({width:"300px",height:"300px"})};
`
const Image=styled.img`
    padding: 12px;
    width: 100%;
    &:hover{
        transform: scale(1.05); 
        transition: transform 0.5s ease-out;
    }
`
const Home = () => {

    const [loading,setLoding]=useState(true);
    const loaded=()=>{
        setLoding(false);
    }
    const [styleLoad,setStyleLoad]=useState({})
    useEffect(()=>{
        if(!loading)
        {
            setStyleLoad({display:"block"});
        }
        else{
            setStyleLoad({display:"none"});
        }
    },[loading]);

  return (
    <>
    <Container id='Home'>
    
       <Navbar/> {/*  display links here */}
      <LandingPage>
        <Content>
            <Links>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{amount:0.5}}
                    transition={{duration:0.5}} //once:true,
                    variants={{
                        hidden:{opacity:0,x:-70},
                        visible:{opacity:1,x:0},
                    }}
                >
                    <LinkedInIcon className='link' onClick={()=>window.location.href='https://www.linkedin.com/in/harshavardhan-asadi-b71898220'}/>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{amount:0.5}}
                    transition={{delay:0.2,duration:0.5}}
                    variants={{
                        hidden:{opacity:0,x:-70},
                        visible:{opacity:1,x:0},
                    }}
                >
                    <GitHubIcon className='link' onClick={()=>window.location.href='https://github.com/Harsha335'}/>
                </motion.div>
                <motion.div
                    initial={{opacity:0,x:-70}}
                    whileInView={{opacity:1,x:0}}
                    viewport={{amount:0.5}}
                    transition={{delay:0.5,duration:0.5}}
                >
                    <InstagramIcon className='link' onClick={()=>window.location.href='https://www.instagram.com/_ha.r.sha'}/>
                </motion.div>
                
                
            </Links>
            <Context>
                <Title>
                    Hello, I'm <span style={{color:"#ff7700"}}>Harshavardhan</span>
                </Title>
                {/* <Typical 
                    loop={Infinity}
                    steps={["Enthustic Dev",2000,"Front-End Developer",2000]}
                /> */}
                <ReactTyped
                    strings={["Enthustic Dev","Programmer","Front-End Developer"]}
                    typeSpeed={100}
                    loop
                    backSpeed={20}
                    cursorChar='|'
                    showCursor={true}
                />
                <Buttons>
                    <HireMe href="#ContactMe">
                       Hire Me
                     </HireMe>
                    <GetResume href={resume} download="resume.pdf">
                        Get Resume
                    </GetResume>
                </Buttons>
            </Context>
            
        </Content>
        <Picture>
            <ImgContainer>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}   //once
                    // whileInView={{opacity:1,scale:1}}   //for on view every time
                    transition={{
                        duration: 0.25,
                        ease: [0, 0.71, 0.2, 1.01],
                        scale: {
                            type: "spring",
                            damping: 4,
                            stiffness: 100,
                            restDelta: 0.001
                        }
                    }}
                >
                   <Image src={pic} style={styleLoad} onLoad={loaded}/>
                </motion.div>
                
            </ImgContainer>
        </Picture>
      </LandingPage>
      <Curve></Curve>
      {/* <div class="container">
  <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
    <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z" style={{stroke: "none",fill:"#000228"}}></path>
  </svg>
</div> */}
    
    </Container>
     <AboutMe/>
    <Education/>
    <Skills/> 
    <Projects/>
    <ContactMe/>
    </>
  )
}

export default Home
