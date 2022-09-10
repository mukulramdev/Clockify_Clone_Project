import React from 'react'
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.cont}>
      <div>
        <img src="https://clockify.me/assets/images/clockify-logo.svg" alt="" />
        <p>The world's leading time tracker and timesheet software for teams</p>
        <h5>SIGN UP FREE</h5>
        <h5>LOG IN</h5>
      </div>
      <div>
        <h4>PRODUCT</h4>
        <p>Features</p>
        <p>Download</p>
        <p>Integrations</p>
        <p>Upgrade</p>
        <p>API</p>
      </div>
      <div>
      <h4>SOLUTION</h4>
        <p>Time clock</p>
        <p>Timecard calculator</p>
        <p>Timesheet</p>
        <p>Reporting</p>
        <p>Scheduling</p>
      </div>
      <div>
      <h4>COMPANY</h4>
        <p>About us</p>
        <p>Customers</p>
        <h6>We also Make</h6>
        <p>Pumble</p>
        <p>Plaky</p>
      </div>
      <div>
      <h4>SUPPORT</h4>
        <p>Help</p>
        <p>Tutorials</p>
        <p>Resources</p>
        <p>Blog</p>
        <p>Contact</p>
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default Footer
