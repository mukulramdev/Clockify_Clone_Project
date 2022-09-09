import {Div,Inputdiv,Termdiv,Ordiv,Span , Button ,Input,Checkbox,TermSpan,ButtonImg,UlDive,Tring} from './Signup_style'
import { LoginNav } from './loginnav';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import React from 'react';
import { useToast,Spinner } from '@chakra-ui/react';
import { Toggle } from '../Redux/Pagetracker/Action';
import styled from 'styled-components';


const Spindiv = styled.div`
  display:flex;
  align-items:center;
  justify-content: center;
`
const obj = {
    email:"",
    password:"",
    Timer:[],
    name:"NO Name"
}
export const Signup = ()=>{
     const toast = useToast();
     const dispath = useDispatch();
     const [box, SetChheckbox] = React.useState(true);
     const [loding,Setloding] = React.useState(false);
     const navigate = useNavigate();
     const [data, setdata] = React.useState(obj);
  const handlechange = (e)=>{
    const {value,name} = e.target;
    setdata((pre)=>({
        ...pre,
        [name]:value,
    }))
  }
  const StoreSignup = ()=>{
      if(data.email===""){
        alert("Enter Email first");
      }else if(data.password===""||data.password.length<8){
        alert("choose password of length more than eight");
      }
      else if(box===false){
        alert("please click check box to accept term conditions")
      }else{
        Setloding(true);
        fetch('https://user-data-for-react.herokuapp.com/profile',{
           method:"POST",
           body:JSON.stringify(data),
           headers:{"content-type":"application/json"} 
        }).then(()=>{
          Setloding(false);
          toast({
            title: 'Account created.',
            description: "We've created your account for you.",
            status: 'success',
            duration: 9000,
            position: "top",
            isClosable: true,
          })
          localStorage.setItem("pagedata",false);
          dispath(Toggle(false))
            navigate('/login');
        })
      }

  }
 const {email,password} = data;
    return (
    loding ? <Spindiv>
      <h1>Your Account is being Created please wait</h1>
      <Spinner
    thickness='4px'
    speed='0.65s'
    emptyColor='gray.200'
    color='blue.500'
    size='xl'
  /></Spindiv> :
    <div>
        <LoginNav/>
        <Div>
       <div>Get started with Clockify</div>
       <p>Create a free account to start tracking time and supercharge your productivity.</p>
       <div>
        <span>No credit card required</span>
        <span> . </span>
        <span>Unsubscribe at any time</span>
       </div>
       </Div>
       <Inputdiv>
        <h1>Sign up</h1>
        <Input name='email' type="text" placeholder='Enter email' value={email} onChange={handlechange}/>
        <Input name='password' type="text" placeholder='Choose password' value={password} onChange={handlechange}/>
        <Termdiv>
            <Checkbox type="checkbox" checked = {box} onChange={()=>SetChheckbox(!box)}/>
            <p>I agree to the <TermSpan>Terms of Use</TermSpan></p>
        </Termdiv>
        <Button color='white' bacground= "blue" onClick={StoreSignup}>CREATE FREE ACCOUNT</Button>
        <Ordiv>
           <hr />
           <Span>OR</Span>
        </Ordiv>
        <Button>
            <ButtonImg src="https://app.clockify.me/assets/ui-icons/icon-google.svg" alt="" />
             Continue with Google
        </Button>
       </Inputdiv>
       <UlDive>
       <img src="https://app.clockify.me/assets/ui-icons/translate.svg" alt="" />
       <span>English</span>
       <Tring />
       </UlDive>
       <UlDive>
        <img src="https://app.clockify.me/assets/ui-icons/safe.svg" alt="" />
        <span>Your data is safe with us:</span>
        <TermSpan>Security</TermSpan>
        <TermSpan>Privacy</TermSpan>
       </UlDive>
    </div>)
}