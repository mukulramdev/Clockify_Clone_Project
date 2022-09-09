import { Navbar } from "./Navbar";
import { Features } from "./Features";
import { Timetracker } from "./Timetracker";
import { Timesheet } from "./Timesheet";
import { Invoicing } from "./Invoicing";
import Footer from "./Footer/Footer";
import './Homepage.css'
export const Homepage = ()=>{
    return (<div className="App">
      <Navbar />
      <br/>
      <Features />
      <br />
      <hr />
      <Timetracker />
      <Timesheet />
      <Invoicing />
      <hr />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer/>
    </div>)
}