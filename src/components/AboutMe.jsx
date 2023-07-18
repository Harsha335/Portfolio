import React from 'react'
import { styled } from 'styled-components'
import { mobile,tablet, tabletLarge } from '../responsive'
import pic from '../images/harsha_pic.jpeg'
import { motion } from 'framer-motion'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import resume from '../images/Harsha_Resume_III_II.pdf'

const Container=styled.div`
    width: 100%;
    height: 110vh;
    background-color: #d8d6d6;
    display: flex;
    justify-content: center;
`
const Box=styled.div`
  margin-top: 10em;
  width: 50vw;
  height: 80vh;
  z-index: 10;
  background-color: white;
  ${tabletLarge({width:"90%"})};
  box-shadow: 0px 0px 8px black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`
const Title=styled.div`
  flex:1.2;
  text-align: center;
  font-size:2rem;
  padding: 2rem 0 0 0;
  ${tabletLarge({padding:"1.5rem 0 0 0"})};
  box-sizing: border-box;
 
`
const Text=styled.div`
  font-weight:600;
  color:black;
  font-family:'Ubuntu', sans-serif;
  position: relative;
  &::after{
    content: '';
    position: absolute;
    bottom: -10px;
    left:30%;
    right:30%;
    border:2px solid #ff7700;
  }
  /* border-bottom: 1px solid black; */
`
const Content=styled.div`
  display: flex;
  flex:10;
  /* padding:20px; */
  /* background-color: cadetblue; */
  box-sizing: border-box;
  ${mobile({flexDirection:"column"})};
`
const Picture=styled.div`
  /* flex:1; */
  width: 50%;
  ${mobile({width:"100%"})};
  display: flex;
  align-items: center;
  justify-content: center;
  float: left;
  /* background-color: #1b364e; */
  `
const Image=styled.img`
  ${mobile({width:"50%"})};
  max-width: 90%;
  /* min-height: 200px; */
  max-height: 80%;
  border-radius: 10px;
  box-shadow: 2px 2px 2px black;
  object-fit: cover;
  object-position: top;
  /* ${tablet({height:"50%"})}; */
  /* height: 75%; */
`
const Details=styled.div`
  /* background-color: #1983e0; */
  /* padding:20px 0px 0 0; */
  font-family:'Open Sans', sans-serif;
  box-sizing: border-box;
  flex:1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  ${mobile({padding:"5px 5px 0 5px"})};
  #top,#middle{
    /* flex: 1; */
    /* padding:12px; */
  }
  #middle{
    /* flex: 1; */
    /* padding-top:40px; */
  }
`
const Buttons = styled.div`
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
  ${mobile({padding:"8px"})};
  /* border: 3px solid #000000; */
  background-color: #000000;
  color: white;
  border-radius: 20px;
  cursor: pointer;
  text-decoration: none;
  &:hover{
    background-color: #ff2f00;
  }
`

const GetResume = styled.a`
  /* width: fit-content; */
  background-color: #ff2f00;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
  margin-left: 2em;
  color:white;
  text-decoration: none;
  &:hover{
    background-color: #000000;
    /* border: 3px solid #ff2f00; */
    color: #ffffff;
    box-sizing: border-box;
  }
`

const AboutMe = () => {
  return (
    <Container id="AboutMe">
      <Box>
          <Title>
              <Text>ABOUT <span style={{color:"#ff7700"}}>ME</span>
               <div style={{fontSize:"1rem",fontWeight:"400",fontFamily:"cursive",margin:"7px"}}>why Choose Me?</div>
              </Text>
          </Title>
          <Content>
            <Picture>
              <Image src={pic} ></Image>
            </Picture>
            <Details>
              <div id='top'>
                Front end developer and a Programmer intrested in problem solving.Enthusiastic in knowing new technologies.
                 Strong professional with a BTech degree willing to be an asset for an organization.
              </div>
              <div id='middle'>
                <div style={{fontSize:"1.17em",fontWeight:"800"}}>Here are a Few Highlights:</div>
                <ul>
                
                  <motion.li initial="hidden"
                    whileInView="visible"
                    viewport={{amount:0.5}}
                    transition={{duration:0.5}} //once:true,
                    variants={{
                        hidden:{opacity:0,x:50},
                        visible:{opacity:1,x:0},
                    }}>
                    Front end developer
                  </motion.li>
                  <motion.li initial="hidden"
                    whileInView="visible"
                    viewport={{amount:0.5}}
                    transition={{delay:0.2,duration:0.5}} //once:true,
                    variants={{
                      hidden:{opacity:0,x:50},
                      visible:{opacity:1,x:0},
                    }}>
                      Interactive & responsive web designs
                  </motion.li>
                  <motion.li initial="hidden"
                    whileInView="visible"
                    viewport={{amount:0.5}}
                    transition={{delay:0.5,duration:0.5}} //once:true,
                    variants={{
                        hidden:{opacity:0,x:50},
                        visible:{opacity:1,x:0},
                    }}>
                    React and Redux for state management
                  </motion.li>
                  {/* <li>
                    Critical thinker
                  </li>
                  <li>
                    
                  </li> */}
                </ul>
              </div>
              <div id='bottom'>
              <Buttons>
                    <HireMe href="#ContactMe">
                      Hire Me
                    </HireMe>
                    <GetResume href={resume} download="resume.pdf">
                        Get Resume
                    </GetResume>
                </Buttons>
              </div>
            </Details>
          </Content>
      </Box>
    </Container>
  )
}

export default AboutMe
