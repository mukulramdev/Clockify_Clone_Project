import './App.css'
import { Signup } from './components/Signup';
import {Login} from './components/Login'
import Dashboard from './pages/Dashboard';
import Tracker from './pages/Tracker';
import Calendar from './pages/Calendar';
import Reports from './pages/Reports';
import Teams from './pages/Teams';
import Projects from './pages/Projects';
import Settings from './pages/Settings';
import Clients from './pages/Clients';
import Tags from './pages/Tags';
import { Clockify } from './components/Clockify';
import { Homepage } from './components/Feacherpage';
import {Routes, Route} from 'react-router-dom'
import Download from './components/Downloads/Download';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Clockify/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/dashoard' element={<Dashboard/>}></Route>
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Tracker" element={<Tracker />}  />
        <Route path="/Calendar" element={<Calendar />}   />
        <Route path="/Reports" element={<Reports />}   />
        <Route path="/Projects" element={<Projects />}  />
        <Route path="/Teams" element={<Teams />}  />
        <Route path="/Clients" element={<Clients />}  />
        <Route path="/Tags" element={<Tags />}  />
        <Route path="/Settings" element={<Settings />}  />
        <Route path='/Download' element={<Download/>}></Route>
        <Route path='/features' element={<Homepage/>} ></Route>
        <Route path='/dounload' element={<Download/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
