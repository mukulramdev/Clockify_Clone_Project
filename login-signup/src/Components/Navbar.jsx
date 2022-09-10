import React from "react";
import "./Navbar.css"
import {useNavigate,Link} from 'react-router-dom'
export const Navbar = () => {
  const navigate = useNavigate();
  const GotoLogin = ()=>{
    localStorage.setItem("pagedata",false);
    navigate('/login')
  }
  return (
    <div id="mck">
      <div>
     <Link to={'/'}> <img src="https://clockify.me/assets/images/clockify-logo.svg" alt="" /></Link>
      <button>Features</button>
      <button><Link to={'/dounload'}>Downloads</Link></button>
      
      </div>
      <div>
        <button>Help</button>
      
        <button onClick={GotoLogin}>GO TO TRACKER</button>
      </div>
    </div>
  );
};
