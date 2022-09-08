import './App.css'
import { Signup } from './components/Signup';
import {Login} from './components/Login'
import { Timer } from './components/Timer';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        {/* <Route path='/'  element={<Timer/>}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
