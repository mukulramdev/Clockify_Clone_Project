import * as React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'
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
    return <>
    <NavDiv>
        <img src="https://app.clockify.me/assets/logo.svg" alt="Logo" />
        <Rlink to={'/login'}>Log In</Rlink>
    </NavDiv>
    </>
}