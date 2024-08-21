import React from 'react'
import { Typography } from '@mui/material'
import "../styles/Navbar.css"
function Navbar() {
  return (
    <div className='navbar-container'>
        <Typography className='text heading stats'>STATS</Typography>
        <Typography className='text heading skills'>SKILLS</Typography>
        <Typography className='text heading game'>GAME</Typography>
        <Typography className='text heading game'>REFER</Typography>
        <Typography className='text heading wallet'>WALLET</Typography>
        
    </div>
  )
}

export default Navbar