import { color } from "@chakra-ui/react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
const Rlink = styled(Link)`
 color:#03a9f4;
 text-decoration:none;
 font-size:18px;
 padding:15px 0px;
`
const Nlink = styled(Link)`
 color:#03a9f4;
 text-decoration:none;
 font-size:18px;
 padding:12px 0px;
 &:hover{
    color:white;
    background-color: #03a9f4;
 }
`
const  Termdiv = styled.div`
 display:flex;
 align-items:center;
 justify-content: space-around;
 margin:20px 0px;
 padding:0px 30px;
 `
const Button = styled.button`
 text-align:center;
 padding:12px 11px;
 font-size:15px;
 min-width: 7.143rem;
 font-weight: 500;
 cursor: pointer;
 border:0.3px solid #03a9f4;
 border-radius: 2px;
 background-color:none;
 cursor: pointer;
 &:hover{
    color:black;
    background-color: #03a9f4;
 }
`
const UlDive = styled.div`
display:flex;
align-items:center;
justify-content: center;
gap:12px;
&>a{
    color:black;
    &:hover{
        color:#03a9f4;
    }
}
`
export const Nav = ()=>{
    const navigate = useNavigate();
    const Changepagelogin = ()=>{
        localStorage.setItem("pagedata",false);
        navigate('/signup');
     }
     const Changepage = ()=>{
        localStorage.setItem("pagedata",true);
        navigate('/login')
     }

    return(
        <Termdiv>
            <UlDive>
              <Link to={'/'}><img src="https://clockify.me/assets/images/clockify-logo.svg" alt="NA" /></Link>  
              <Rlink to={'/features'}>FEATURES</Rlink>
              <Rlink to={'/dounload'}>DOWNLOAD</Rlink>
            </UlDive>
        <UlDive>
            <Rlink to={'/login'} style={{color:"#03a9f4"}} onClick={Changepagelogin}>LOG IN</Rlink>
            <Button>
            <Nlink to={'/signup'}  onClick={Changepage}>SIGN UP FREE</Nlink>
            </Button>
        </UlDive>
        </Termdiv>
    )
}