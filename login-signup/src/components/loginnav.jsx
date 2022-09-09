import * as React from 'react';
import styled from 'styled-components'
import {Link,useNavigate} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { Toggle } from '../Redux/Pagetracker/Action';
const NavDiv = styled.div`
 display:flex;
 justify-content: space-around;
 padding:10px;
 align-items: center;
margin:20px 0px;

`
const Rlink = styled(Link)`
 color:#03a9f4;
 text-decoration:none;
 font-size:18px;
 padding:15px 0px;
`
export const LoginNav = ()=>{
   const navigate = useNavigate();
   const pageSatatus = useSelector((state)=>state.page.Pagestatus);
   const dispatch = useDispatch();
   React.useEffect(()=>{
    ChackStatus();
   },[])
   const ChackStatus = ()=>{
  const pagedata = localStorage.getItem("pagedata")||"true";
    if(pagedata==="true"){
        dispatch(Toggle(false));
     }else{
        dispatch(Toggle(true)); 
     }
   }
   const Changepage = ()=>{
      localStorage.setItem("pagedata",true);
      ChackStatus();
      navigate('/login')
   }
   const Changepagelogin = ()=>{
      localStorage.setItem("pagedata",false);
      ChackStatus();
      navigate('/signup');
   }

    return <>
    <NavDiv>
       <Link to={'/'}> <img src="https://app.clockify.me/assets/logo.svg" alt="Logo" /></Link>
        
        {pageSatatus ? <div>
         Don't have an account?
         <Rlink to={'/signup'} onClick={Changepage}>Sign Up</Rlink>
        </div>
        
        : <Rlink to={'/login'} onClick={Changepagelogin}>Log In</Rlink> }
    </NavDiv>
    </>
}