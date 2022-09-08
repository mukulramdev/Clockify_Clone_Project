import React from "react";
import "./Navbar.css"
// import { Button } from '@chakra-ui/react'
export const Navbar = () => {
  return (
    <div id="mck">
      <div>
      <img src="https://clockify.me/assets/images/clockify-logo.svg" alt="" />
      <button>Features</button>
      <button>Downloads</button>
      </div>
      <div>
        <button>Help</button>
        {/* <Button colorScheme='teal' variant='outline'>
        
  </Button> */}
        <button>GO TO TRACKER</button>
      </div>
    </div>
  );
};
