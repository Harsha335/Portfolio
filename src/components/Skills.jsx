import React from 'react'
import { styled } from 'styled-components'
import { ProgrammingSkills,TechnicalSkills } from '../data'
import {CircularProgressbar,buildStyles} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';
import { mobile, tablet } from '../responsive';


const Container=styled.div`
    width: 100%;
    height: 92vh;
    ${tablet({height:"125vh"})};
    /* background-color: #d5d1ca; */
    display: flex;
    flex-direction: column;
`
const Title=styled.div`
    flex: 1;
    position: relative;
    font-size: 3.5rem;
    font-weight: bold;
    font-family:cursive;
    text-align: center;
    margin-bottom: 20px;
    &::after{
    content: '';
    position: absolute;
    bottom: -20px;
    left:40%;
    right:40%;
    border:2px solid #ff7700;
  }
`
const Content=styled.div`
    flex : 12;
    display: flex;
    flex-direction: column;
    
`
const Box=styled.div`
    flex: 1;
    /* background-color: aliceblue; */
    margin: 20px;
`
const Header=styled.div`
    width: 100%;
    height: 20%;
    /* background-color: antiquewhite; */
    font-size: 1.5rem;
    font-family: 'Open Sans', sans-serif;
    font-weight: 500;
`
const Cards=styled.div`
    width:100%;
    /* height: 50px; */
    .progressBox{
        padding: 20px;
        /* height: 10%; */
        
        /* display: none; */
        /* margin:20px; */
        /* flex:1; */
    }
    .progressCircle{
        width: 50%;
        ${mobile({width:"80%"})};
        ${tablet({width:"100px"})};
        margin:auto;
    }
    .progressTitle{
        text-align: center;
        margin: 5px;
    }
    font-family: 'Open Sans', sans-serif;
    flex-direction:row;
    ${tablet({display:"grid",gridTemplateColumns:"repeat(2,1fr)"})};
    ${tablet({})};
    display:grid;
    grid-template-columns:repeat(4,1fr);
    justify-items: center;
`
const Skills = () => {
  return (
    <Container id="Skills">
      <Title>
        Skills
      </Title>
      <Content>
        <Box>
            <Header>
                Programming Skills
            </Header>
            <Cards>
                {ProgrammingSkills.map(({title,percentage},index)=>{
                    return(
                        <div className='progressBox' id={index}>
                            <div className='progressCircle'>
                                <CircularProgressbar styles={buildStyles({    pathColor: `#ff4d00`, textColor: '#ff4d00',})} value={percentage} text={`${percentage}%`}/>
                            </div>
                            <div className='progressTitle'>
                                {title}
                            </div>
                        </div>   
                    )
                })}
            </Cards>
        </Box>
        <Box>
            <Header>
                Front-End Technologies
            </Header>
            <Cards>
                {TechnicalSkills.map(({title,percentage},index)=>{
                        return(
                            <div className='progressBox' id={index}>
                                <div className='progressCircle'>
                                    <CircularProgressbar  value={percentage} text={`${percentage}%`}/>
                                </div>
                                <div className='progressTitle'>
                                    {title}
                                </div>
                            </div>   
                        )
                    })}
            </Cards>
        </Box>
      </Content>
    </Container>
  )
}

export default Skills
