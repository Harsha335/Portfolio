import React from 'react'
import { styled } from 'styled-components'
import { motion } from 'framer-motion'
import { mobile, tablet } from '../responsive'
const Container=styled.div`
    width: 100%;
    height: 100vh;
    padding: 20px;
    `
const Title=styled.div`
    position: relative;
    font-size: 3.5rem;
    font-weight: bold;
    font-family:cursive;
    text-align: center;
    &::after{
    content: '';
    position: absolute;
    bottom: -10px;
    left:40%;
    right:40%;
    border:2px solid #ff7700;
  }
`
const Content=styled.div`
    /* background-color: #0f0d0d; */
    width: 100%;
    height: 89%;
    display: flex;
    ${mobile({height:"100%"})};
    align-items: center;
    justify-content: center;
    `
const Box=styled.div`
    width: 60%;
    position: relative;
    height: 85%;
    ${tablet({width:"90%"})};
    ${mobile({width:"100%"})};
    /* background-color: aqua; */
    display: flex;
    align-items: flex-end;
    justify-content: space-evenly;
    flex-direction: column;
    border-left:5px solid black ;
`
const Card=styled(motion.div)`
    width: 80%;
    height: 40%;
    ${tablet({width:"90%",height:"50%"})};
    /* margin: 10px; */
    margin-bottom:20px;
    border-radius: 20px;
    padding:10px;
    background-color: #ddd6d6;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    border:1px solid black;
    box-shadow: 3px 3px 5px black;
    &::before{
        
        content: '';
        width: 20px;
        height: 20px;
        background-color: #ff7700;
        border-radius: 50%;
        position: absolute;
        left: -12px;
        outline: 2px solid black;
        outline-offset: 1px;
    }
    &:hover .course{
        color: #df6800;
    }
`
const Year=styled.span`
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    padding:5px;
    ${mobile({padding:"3px"})};
    border-radius: 20px;
    font-size:1.2rem;
    font-weight: bold;
    
`
const Details=styled.div`
    font-family: 'Open Sans', sans-serif;
    .course{
        font-size: 1.5rem;
        font-weight: bold;
    }
`
const Education = () => {
  return (
    <Container id="Education">
      <Title>
        Education
      </Title>
      <Content>
        <Box>
            <Card initial="hidden"
                    whileInView="visible"
                    viewport={{amount:0.5}}
                    transition={{duration:0.5}} //once:true,
                    variants={{
                        hidden:{opacity:0,x:50},
                        visible:{opacity:1,x:0},
                    }}>
                <Year>
                    2020-2024
                </Year>
                <Details>
                    <div className='course'>
                        Bachelor of Technology
                    </div>
                    <div>
                        Sree Vidyanikethan Engineering College | Tirupati
                    </div>
                    <div>
                        cgpa : 9.25
                    </div>
                    <div>
                        {/* other details */}
                    </div>
                </Details>
            </Card>
            {/* </motion.div> */}
            <Card initial="hidden"
                    whileInView="visible"
                    viewport={{amount:0.5}}
                    transition={{delay:0.2,duration:0.5}} //once:true,
                    variants={{
                        hidden:{opacity:0,x:50},
                        visible:{opacity:1,x:0},
                    }}>
                <Year>
                    2018-2020
                </Year>
                <Details>
                    <div className='course'>
                        Intermediate
                    </div>
                    <div>
                        Mother Teresa Jr. College | Palamaner
                    </div>
                    <div>
                        cgpa : 10
                    </div>
                    <div>
                        {/* other details */}
                    </div>
                </Details>
            </Card>
            <Card initial="hidden"
                    whileInView="visible"
                    viewport={{amount:0.5}}
                    transition={{delay:0.5,duration:0.5}} //once:true,
                    variants={{
                        hidden:{opacity:0,x:50},
                        visible:{opacity:1,x:0},
                    }}>
                <Year>
                    2018
                </Year>
                <Details>
                    <div className='course'>
                        Secondary School Education
                    </div>
                    <div>
                        Little Angles English Medium School | Palamaner
                    </div>
                    <div>
                        cgpa : 9.5
                    </div>
                    <div>
                        {/* other details */}
                    </div>
                </Details>
            </Card>
        </Box>
      </Content>
    </Container>
  )
}

export default Education
