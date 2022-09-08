import "./styles.css";
import { Navbar } from "./Components/Navbar";
import { Features } from "./Components/Features";
import { Timetracker } from "./Components/Timetracker";
import { Timesheet } from "./Components/Timesheet";
import { Invoicing } from "./Components/Invoicing";
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Features />
      <br />
      <hr />
      <Timetracker />
      <Timesheet />
      <Invoicing />

      <hr />
    </div>
  );
}
