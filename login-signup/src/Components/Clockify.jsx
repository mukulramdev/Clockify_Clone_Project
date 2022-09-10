import React from "react";
import Footer from "./Footer/Footer";
import Homepage from "./Homepage";
import {Nav} from './Homepagenavbaar'
function Clockify() {
  return (
   <div style={{textAlign: "center"}}>
    <Nav/>
   <Homepage />
   <Footer />
   </div>
  );
}

export { Clockify };
