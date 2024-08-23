import React from 'react'
import "../styles/Refer.css"
import { Box, Button } from '@mui/material'
import { useState } from 'react'
import orb from "../assets/orb.png"
import ProgressBar from '../features/ProgressBar'
export default function Refer() {
    const [shards] = useState(2059)
    const [percentage, setPercentage] = useState<number>(50);

    return (
        <Box>
            <div className="refer-desc">
                <p className='text medium'>Get free swipes with friends.</p>
                <p className='text medium'>Earn 20% of their  shards</p>
            </div>
            <div className='friends-invited-container'>
                <p className='text medium'>Friends invited</p>
                {/* list of friends */}
                <ProgressBar percentage={percentage} />
      <input
        type="range"
        min="0"
        max="100"
        value={percentage}
        onChange={(e) => setPercentage(Number(e.target.value))}
      />
            </div>
            <div className='shards-earned-container'>
                <img src={orb} alt="" />
                <p className='text noLH medium'>{shards}</p>
                <p  className='text noLH small'>Shards Earned</p>
                <Button className='claim-btn'>Claim</Button>
            </div>
        </Box>
    )
}
