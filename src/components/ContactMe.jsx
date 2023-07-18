import React from 'react';
import { styled } from 'styled-components';
import { mobile, tablet, tabletLarge } from '../responsive';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import emailjs from 'emailjs-com'
const Container=styled.div`
    width: 100%;
    height: 92vh;
    background-color: #d8d6d6;
    padding-top:2% ;
    overflow: hidden;
    ${tabletLarge({height:"120vh"})};
`

const Title=styled.div`
    flex: 2;
    /* padding: 10%; */
    position: relative;
    font-size: 3.5rem;
    ${mobile({fontSize:"3rem"})};
    font-weight: bold;
    /* font-family:cursive; */
    text-align: center;
    margin-bottom: 20px;
    font-family:'Ubuntu', sans-serif;
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
  flex:10;
  width: 100%;
  height: 87%;
  ${tabletLarge({height:"100%"})};
  /* background-color: red; */
  display: flex;
  flex-direction: row;
  ${tabletLarge({flexDirection:"column-reverse"})};
  ${tabletLarge({alignItems:"center"})};
  ${tabletLarge({justifyContent:"center"})};

`
const Left=styled.div`
  flex:1;
  display: flex;
  align-items: center;
  justify-content: center;
  `
const Right=styled.div`
  flex:1;
  /* background-color: #1e1c1a; */
  `
const Footer=styled.div`
  width: 350px;
  ${tabletLarge({width:"100%",padding:"20px"})};
  font-size:1.2em;
  font-family: 'Open Sans', sans-serif;
  `
const OtherLinks=styled.div`
    margin-top:3em ;
    ${tablet({margin:"20px"})};
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
      box-shadow:0px 0px 20px 1px rgba(0, 0, 0, 0.9);
    }
    `
const Mail=styled.div`
  font-size:1.2em;
  font-family: 'Open Sans', sans-serif;
  display: flex;
  flex-direction:column;
  width:33rem ;
  ${tablet({width:"95%",paddingLeft:"20px"})};
  height: 30rem;
  padding: 20px;
  /* position: relative; */
  /* background-color: aliceblue; */
`
const Name=styled.input`
  width: 13rem;
  padding:0.5rem;
  box-sizing: border-box;
  border: 2px solid #e1d7d7;
  transition: 0.5s;
  outline: none;
  border-radius: 5px;
  margin: 2rem 0;
  font-family: inherit;
  
  ${tablet({width:"200px"})};
  /* z-index:1000; */
  &:focus{
    /* transition: all 0.3s; */
    border:2px solid black;
  }
  /* border:2px solid transparent; */
  /* border:2px solid black; */
  `
const Email=styled(Name)`
  margin:0 1.5rem 1.5rem 0;

`
const Subject=styled(Name)`
  margin:0;
`
const Body=styled.textarea`
  width:30rem;
  height:15rem;
  ${tablet({width:"95%"})};
  ${mobile({width:"95vw"})};
  resize:none;
  border-radius: 10px;
  padding:1rem;
  font-family: inherit;
  ${tablet({marginTop:"20px"})};
  box-sizing: border-box;
  border: 2px solid #e1d7d7;
  transition: 0.5s;
  outline: none;
  &:focus{
    border: 2px solid black;
  }
`
const Submit=styled.input`
  padding:15px;
  background-color: #ff7700;
  /* border:2px solid black; */
  border-radius: 20px;
  color:whitesmoke;
  cursor: pointer;
  &:hover{
    box-shadow: 0 0 4px black;
  }
  /* float: right; */
`
const ContactMe = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    const name=document.getElementById('name');
    const subject=document.getElementById('subject');
    const message=document.getElementById('message');
    const emailid=document.getElementById('emailid');
    const regName=/^[a-zA-Z]+[a-zA-Z]+$/;
    const atpos=emailid.value.indexOf("@");
    const dotpos=emailid.value.lastIndexOf('.');
    if(name.value==null || name.value=="" || !regName.test(name.value))
    {
      alert("Enter valid name");
      name.focus();
      return;
    }
    if(atpos<1 || (dotpos-atpos<2))
    {
      alert("Enter valid Mail id");
      emailid.focus();
      return;
    }
    if(subject.value==null || subject.value=="")
    {
      alert("Enter subject");
      subject.focus();
      return;
    }
    if(message.value==null || message.value=="")
    {
      alert("Enter Message");
      message.focus();
      return;
    }
    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID,process.env.REACT_APP_TEMPLATE_ID , e.target,process.env.REACT_APP_PUBLIC_KEY )
      .then((result) => {
        alert("successfully submited!!");
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
          alert("Error in submiting!!");
      });
    e.target.reset();
  };
  return (
    <Container id="ContactMe">
    
      <Title>Contact <span style={{color:"#ff7700"}}>Me</span>
      <div style={{fontSize:"1.3rem",fontWeight:"400",fontFamily:"cursive",margin:"7px"}}>let's keep in touch</div>
      </Title>
      <Content>
        <Left>
          <Footer>
            <div style={{fontFamily: 'Ubuntu',padding:"5px"}}><b>Get in touch</b></div>
            Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            <OtherLinks>
            <LinkedInIcon onClick={()=>window.location.href='https://www.linkedin.com/in/harshavardhan-asadi-b71898220'}/>
            <GitHubIcon onClick={()=>window.location.href='https://github.com/Harsha335'}/>
            <InstagramIcon onClick={()=>window.location.href='https://www.instagram.com/_ha.r.sha'}/>
            </OtherLinks>
          </Footer>
        </Left>
        <Right>
          <Mail>
              <form onSubmit={sendEmail} autoComplete='off'>
                <Name  type='text'id="name" name='name' placeholder='Enter your name'>
                  {/* <input></input> */}
                </Name>
                <div>
                <Email type='email' id="emailid" name='emailid' placeholder='mail@gmail.com'>
                  {/* <input ></input> */}
                </Email>
                <Subject type='text' id="subject" name='subject' placeholder='Subject'>
                  {/* <input ></input> */}
                </Subject>
                </div>
                <Body type='text' id="message" name='message' placeholder='Message'>
                  {/* <textarea  ></textarea > */}
                </Body>
                <div style={{display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0.2rem 1rem"}}>
                    <Submit type="submit" value="Send Mail"></Submit>
                </div>
              </form>
          </Mail>
        </Right>
      </Content>
    </Container>
  )
}

export default ContactMe
