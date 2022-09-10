import styled from 'styled-components'
import { TriangleDownIcon } from '@chakra-ui/icons'
const Div = styled.div`
margin-bottom:250px;
&>*{
    text-align:center;
}
&>p{
    font-size: 1.25rem;
    color:#666;
    margin:0px 0px 14px;
},
div{
    font-size: 2.286rem;
    letter-spacing: -.05rem;
    margin:-25px 0px 10px;
    color:black;
},
div>span{
    font-size: .8571rem;
    font-weight: 400;
    color:#999999;
    margin-top:-20px;
   align-items:center;
}
`  //#666666
const Button = styled.button`
 text-align:center;
 padding:12px 11px;
 font-size:15px;
 color:${({color}) => color==="white" ? "white" : "#666666"};
 min-width: 7.143rem;

 font-weight: 500;
 position:relative; //border
 cursor: pointer;
 border:${({border}) => border==="none" ? "0.3px solid rgb(68 62 62)" : "0.3px solid #C6D2D9"};
 border-radius: 2px;
 background-color: ${({bacground}) => bacground==="blue" ? "#03a9f4" : bacground==="black" ? "rgb(68 62 62)" : "white"};
 cursor: pointer;
 &:hover{
    background-color: ${({bacground}) => bacground==="blue" ? "#2F80ED" : bacground==="black" ? "black": "#c6d2d9"};
 }
 &>span{
    font-size:16px;
    color:#666666;
  
    font-weight: 500;
    background-color: white;
 }
`
const ButtonImg = styled.img`
background-color: transparent;
position: absolute;
left: 12px;
top: 11px;
`
const Inputdiv = styled.div`
  width:21%;
  display:flex;
  flex-direction: column;
  padding:20px 30px 30px 30px;
  margin:auto;
  margin-top:30px;
  gap:15px;
  Background-color:white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  >h1{
    font-size:20px;
    color:#333;
    font-weight: 500;
  }
  @media (min-width:0px) and (max-width:500px){
    width:80%;   
  }
  @media (min-width:500px) and (max-width:900px){
    width:50%;   
  }
`
const Logininputdiv = styled.div`
  width:30%;
  display:flex;
  flex-direction: column;
  padding:20px 30px 30px 30px;
  margin:auto;
  margin-top:30px;
  gap:15px;
  Background-color:white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  >h1{
    font-size:20px;
    color:#333;
    font-weight: 500;
  }
  @media (min-width:0px) and (max-width:500px){
    width:80%;   
  }
  @media (min-width:500px) and (max-width:900px){
    width:50%;   
  }
  @media (min-width:900px) and (max-width:1100px){
    width:45%;   
  }
  @media (min-width:1100px) and (max-width:1300px){
    width:40%;   
  }
`
const  Termdiv = styled.div`
 display:flex;
 align-items:center;
 height: 30px;
 &>*{
 Background-color:white; 
 } 
,p{
   margin:0;
   font-size: 16px;
   font-weight: 500;
   color:#666666;
},span{
  text-align: end;
}
`
const TermSpan = styled.span`
    color:#03a9f4;
    background: transparent;
    &:hover{
        text-decoration: underline;
        cursor: pointer;
    }
`
const Checkbox= styled.input`
    width: 18px;
    height: 18px;
    Background-color:#03a9f4;
    cursor: pointer;
`
const Ordiv = styled.div`
  position:relative;
  &>hr{
    height:0.3px;
    Background-color:#C6D2D9;
    margin:10px 0px;
    color:#C6D2D9;
  }
`
const Span = styled.span`
position: absolute;
top: -3px;
left: 41%;
Background-color:white;
padding:0px 20px;
font-weight: 400;
font-size:18px;
`
const Input = styled.input`
 padding:9px 11px;
 border:none;
 outline:0.3px solid #C6D2D9;
 font-size:15px;
 font-weight: 500;
 border-radius: 2px;
`
const UlDive = styled.div`
display:flex;
align-items:center;
justify-content: center;
margin-top:30px;
color:#666666;
gap:2px;
`
const Tr = styled.tr`

text-align:center;

`
const Table = styled.table`
  border:2px solid black;
  width:90%;
  margin:20px auto;
  & td{
    border:2px solid black;
  },
  tr{
    border:2px solid black;
  }
`
const Spindiv = styled.div`
  display:flex;
  align-items:center;
  justify-content: center;
`
const Tring = styled(TriangleDownIcon)`
  height:10px;
  width:10px;
`
const LoginPhotoDive = styled.div`
   display:grid;
   width:100%;
   grid-template-columns: 70% 30%;
   justify-content: center;
  @media (min-width:0px) and (max-width:900px){
    grid-template-columns: 100%;
  }
`
const LoginPagePhoto = styled.img`
width:100%;

`
const LoginSide = styled.div`
Background-color:#5B41B6;
display:flex;
align-items:center;
justify-content: center;
flex-direction: column;
gap:20px;
text-align: center;
padding:30px 0px 30px 30px;
&>*{
  text-align: center;
  margin: 5px;
},h1{
  color:white;
},p{
  width:90%;
  font-size: 20px;
  font-weight: 400;
}
`
const Loginnewspan = styled.span`
   padding:5px 12px;
   color:#666666;
   font-size:14px;
   border-radius: 2px;
   Background-color:white;
  margin:auto;
`
export {Spindiv,Table,Tr,Div,Inputdiv,Termdiv,Ordiv,Span,Button,Input,Checkbox,TermSpan,ButtonImg,UlDive,Tring,LoginPhotoDive,LoginSide,Loginnewspan,LoginPagePhoto,Logininputdiv};