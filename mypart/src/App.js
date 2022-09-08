import './App.css';
import { Navbar } from "./Components/Navbar/Navbar.jsx";
import { Features } from "./Components/FeaturesPage/Features";
import { Timetracker } from "./Components/FeaturesPage/Timetracker";
import { Timesheet } from "./Components/FeaturesPage/Timesheet";
import { Invoicing } from "./Components/FeaturesPage/Invoicing";
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