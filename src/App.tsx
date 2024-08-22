import { useState } from 'react'

import './App.css'
import Navbar from './features/Navbar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import Refer from './pages/Refer'
import Wallet from './pages/Wallet'
function App() {

  return (
    <>
      <div className="navbar-main">
       
        <Navbar />
      </div>
      <Router>
          <Routes>
            {/* <Route path="/home" element={<Homepage />} />
            <Route path="/" element={<Homepage />} /> */}
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/refer" element={<Refer />} />
            
          </Routes>
        </Router>
    </>
  )
}

export default App
