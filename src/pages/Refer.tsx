import "../styles/Refer.css"
import { Box, Button } from '@mui/material'
import { useState } from 'react'
import orb from "../assets/orb.png"
import ProgressBar from '../features/ProgressBar'
import border from "../assets/border.png"
import avatar from "../assets/avatar.png"
export default function Refer() {
    const [shards] = useState(2059)
    const [percentage] = useState<number>(115);

    return (
        <Box>
            <div className="refer-desc">
                <p className='text medium'>Get free swipes with friends.</p>
                <p className='text medium'>Earn 20% of their  shards</p>
            </div>
            <div className='friends-invited-container'>
                <p className='text medium'>Friends invited</p>
                {/* list of friends */}
                <div className="friends-box">
                    <div className="avatar-container">
                        <img src={border} alt="" className="border-img"/>
                        <img src={avatar} alt=""   className="avatar-img"/>
                    </div>
                    <div style={{width:"100%"}}>
                        <ProgressBar user={percentage} />
                    </div>
                </div>

            </div>
            <div className='shards-earned-container'>
                <img src={orb} alt="" />
                <p className='text noLH medium'>{shards}</p>
                <p className='text noLH small'>Shards Earned</p>
                <Button className='claim-btn'>Claim</Button>
            </div>
        </Box>
    )
}
