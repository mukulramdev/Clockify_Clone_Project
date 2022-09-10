
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Tracker from './pages/Tracker';
import Calendar from './pages/Calendar';
import Reports from './pages/Reports';
import Teams from './pages/Teams';
import Projects from './pages/Projects';
import Settings from './pages/Settings';
import Clients from './pages/Clients';
import Tags from './pages/Tags';

import { Clockify } from "./Components/Clockify";



import{React} from 'react'
import TrackerComponent from './pages/Tracker';



function App() {
  return (
    
    <div className="App"  >
      
     
      <Routes>
      <Route path="/" element={<Clockify/>} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/Tracker" element={<Tracker />}  />
      <Route path="/Calendar" element={<Calendar />}   />
      <Route path="/Reports" element={<Reports />}   />
      <Route path="/Projects" element={<Projects />}  />
      <Route path="/Teams" element={<Teams />}  />
      <Route path="/Clients" element={<Clients />}  />
      <Route path="/Tags" element={<Tags />}  />
      <Route path="/Settings" element={<Settings />}  />
      </Routes>

      
</div>

    
    
  );
}

export default App;
