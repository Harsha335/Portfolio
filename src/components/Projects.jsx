import React, { useState } from 'react'
import { styled } from 'styled-components'
// import ticTacToe from '../images/TicTacToe.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import { mobile, tablet, tabletLarge } from '../responsive';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { projectsData } from '../data';
import { motion } from 'framer-motion';

const Container=styled.div`
    width: 100%;
    height: 92vh;

    /* background-color: #d5d1ca; */
    display: flex;
    flex-direction: column;
    ${tabletLarge({height:"100vh"})};
    ${tabletLarge({paddingBottom:"10%"})};
    position: relative;
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
        z-index: -1;
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
        background-color: #ffffff;
        z-index: 0;
    }
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
    bottom: -25px;
    left:40%;
    right:40%;
    border:2px solid #ff7700;
  }
`
const Content=styled.div`
    flex : 12;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    /* background-color: #c21919; */
    
`
const Left=styled.div`
    flex:3;
    /* background-color: #266faf; */
    /* color:#c21919; */
    color:rgba(7, 6, 6, 0.7);
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding:20px;
    ${mobile({padding:"0"})};
    cursor:pointer;
    ${tabletLarge({flex:1})};
    `
const Right=styled.div`
    /* background-color: #1a82dc; */
    flex:3;
    ${tabletLarge({flex:1})};
    color:rgba(7, 6, 6, 0.7);
    padding:20px;
    width: 20px;
    ${mobile({padding:"0"})};
    cursor:pointer;
`

const Card=styled(motion.div)`
    flex:10;
    width: 70%;
  
    height: 70%;
    z-index: 1;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 0 10px black;
    display: flex;
    flex-direction: row;
    
    ${tabletLarge({flexDirection:"column-reverse"})};
    ${tabletLarge({width: "95%"})};
    ${tabletLarge({height: "95%"})};

`
const Image=styled.div`
    flex:1;
    /* background-color: aliceblue; */
    display:flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;
`
const Context=styled.div`
    flex: 1;
    ${tablet({flex:"2"})};
    /* background-color: aquamarine; */
    display: flex;
    flex-direction: column;
`
const Topic=styled.div`
    flex: 1;
    font-family: 'Open Sans', sans-serif;
    font-size: 2.5em;
    font-weight: bold; 
    padding: 20px;
    ${tablet({padding:"10px"})};
    color: #c26819;;
    /* background-color: aqua; */
    `
const Details=styled.div`
    flex:4;
    font-size:1.2em;
    ${tablet({fontSize:"1.1em"})};
    font-family: 'Open Sans', sans-serif;
    padding:0 20px;
    ${tabletLarge({padding:"0 12px"})};
`
const Links=styled.div`
    flex:1;
    display: flex;
    flex-direction: row;
    ${tablet({justifyContent:"space-around"})};
    ${tablet({padding:"5px"})};
`
const Link=styled.a`
    color:inherit;
    width: 50px;
    height: 30px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: scale(1.2);
    margin-right: 20px;
    ${tablet({marginRight:"0"})};
    text-decoration: none;
    &:hover{
        transform: scale(1.5);
    }
`
const View=styled.a`
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding:20px;
    border-radius: 10px;
    color:white;
    background-color: black;
    width: auto;
    height: 40px;
    /* border:1px solid black; */
    cursor:pointer;
    &:hover{
        background-color: #ff6200e5;
        /* color:black; */
        
    }
`
const Projects = () => {
    const [slideIndex,setSlideIndex]=useState(1);
    const length=projectsData.length;
    const slide=(direction)=>{
        if(direction=="left")
        {
            
            setSlideIndex(slideIndex==1?length:slideIndex-1);
        }
        else{
            setSlideIndex(slideIndex==length?1:slideIndex+1);   
        }
    }
    // const [isLeftClick,setISLeftClick]=useState();
  return (
    <Container id="Projects">
      <Title>
        Projects
      </Title>
      <Content>
        <Left>
            <ArrowCircleLeftIcon sx={{ fontSize: 32 }} onClick={()=>slide("left")}/>
        </Left>
            {/* <Wrapper slideIndex={slideIndex}> */}

            { projectsData.map((data)=>
                data.id===slideIndex &&
                <Card 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}   //once
                    // whileInView={{opacity:1,scale:1}}   //for on view every time
                    transition={{
                        duration: 0.25,
                        ease: [0, 0.71, 0.2, 1.01],
                        scale: {
                            type: "spring",
                            damping: 9,
                            stiffness: 150,
                            restDelta: 0.001
                        }
                    }}
                    >
                    <Image>
                    <img src={data.img} width="90%" height="90%" style={{objectFit:"contain"}}></img>
                    </Image>
                    <Context>
                        <Topic>
                            {data.title}
                        </Topic>
                        <Details>
                            <div style={{marginBottom:"10px"}}>{data.desc}</div>
                            <b>Technologies used :</b><br/>
                            <ul>
                                {console.log(data.tech)}
                                
                                {data.tech.map(tech=><li>{tech}</li>)}
                            </ul>
                        </Details>
                        <Links>
                            <Link href={data.srcLink}><GitHubIcon  /></Link>
                            <View href={data.viewLink}>View Project</View>
                        </Links>
                    </Context>
                </Card>
            )}
        <Right>
            <ArrowCircleRightIcon sx={{ fontSize: 32 }} onClick={()=>slide("right")}/>
        </Right>
      </Content>
      <Curve></Curve>
    </Container>
  )
}

export default Projects
