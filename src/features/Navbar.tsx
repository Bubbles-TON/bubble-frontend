import React from 'react'
import { useState,useEffect } from 'react';
import { Typography } from '@mui/material'
import "../styles/Navbar.css"

interface EnlargedState {
  stats: boolean;
  skills: boolean;
  game: boolean;
  refer: boolean;
  wallet: boolean;
}
function Navbar() {
  const [enlarged, setEnlarged] = useState<EnlargedState>({
    stats: false,
    skills: false,
    game: false,
    refer: false,
    wallet: false,
});
useEffect(() => {
  const path = window.location.pathname;

  // Set the initial state based on the current path
  setEnlarged({
      stats: path === "/stats",
      skills: path === "/skills",
      game: path === "/game",
      refer: path === "/refer",
      wallet: path === "/wallet",
  });
}, []);
const handleClick = (key: keyof EnlargedState) => {
    setEnlarged((prevState) => ({
        ...prevState,
        [key]: !prevState[key],
    }));
    window.location.href = `/${key}`;
};

  return (
    <div className='navbar-container'>
      <Typography
        className={`text heading stats ${enlarged.stats ? 'enlarged' : ''}`}
        onClick={() => handleClick('stats')}
      >
        STATS
      </Typography>
      <Typography
        className={`text heading skills ${enlarged.skills ? 'enlarged' : ''}`}
        onClick={() => handleClick('skills')}
      >
        SKILLS
      </Typography>
      <Typography
        className={`text heading game ${enlarged.game ? 'enlarged' : ''}`}
        onClick={() => handleClick('game')}
      >
        GAME
      </Typography>
      <Typography
        className={`text heading refer ${enlarged.refer ? 'enlarged' : ''}`}
        onClick={() => handleClick('refer')}
      >
        REFER
      </Typography>
      <Typography
        className={`text heading wallet ${enlarged.wallet ? 'enlarged' : ''}`}
        onClick={() => handleClick('wallet')}
      >
        WALLET
      </Typography>
    </div>
  )
}

export default Navbar