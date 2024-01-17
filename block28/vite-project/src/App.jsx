import { useState } from 'react'
import Blue from './Components/Blue.jsx'
import Red from './Components/Red.jsx'
import Home from './Components/Home.jsx'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="container">
      <div id="navbar">      
      <Link to="/">Go Home</Link>
      <Link to="/blue">Go Blue</Link>
      <Link to="/red">Go Red</Link></div>
      <div id="main-section">
        <Routes>
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <div id="footer">      
      <Link to="/">Go to Home</Link>
      <Link to="/red">Go to Red</Link></div>
      <Link to="/blue">Go to Blue</Link>
      
    </div>
    </>
  )
}

export default App
