import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Calculadora from './components/Calculadora';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/calculadora" element={<Calculadora />}/>
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App
