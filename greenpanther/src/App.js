import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Events from './components/Events';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/LogoinAndSignUP/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Routes>
      <Route  path="/" element={<Home/>}/>
      <Route  path="/user_login" element={<Login/>}/>
        
      </Routes>
    
  </BrowserRouter>
      
    </div>
  );
}

export default App;
