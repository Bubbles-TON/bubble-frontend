import { useState } from 'react'
import "../styles/Wallet.css"
import axios from 'axios'
import hand from "../assets/hand.png"
import bubble from "../assets/bubble.png"
import { Button } from '@mui/material'
function Wallet() {
    const [bubbleEarned] = useState(3209)
    const handleConnectWallet = async () => {
        const address = 'your_wallet_address'; // Replace this with the actual address value
        try {
            const response = await axios.post("http://localhost:9000/connect", {
                address,
            });
            console.log('Response:', response.data); // Handle the response as needed
        } catch (error) {
            console.error('Error connecting wallet:', error);
        }
    };
    return (
        <div style={{ width: "430px" }}>
            <div className='wallet-top-container'>
                <p className='text'>When the bubble disappears,</p>
                <p className='text large noLH'>$Bubble</p>
                <p className='text'>will list on TON</p>
                <img src={hand} alt="" />
            </div>
            <div className='wallet-middle-container'>
                <div className='bubble-section'>
                    <img src={bubble} alt="" />
                    <div style={{ paddingLeft: "0.5rem" }}>
                        <p className='text noLH bubble-earned-text'>{bubbleEarned}</p>
                        <p className='text noLH'>$Bubble</p>
                        <p className='text noLH'>Earned</p>
                    </div>
                </div>
                <div className='bubble-information-container'>
                    <p className='text small'>$BUBBLE will be airdropped 1:1 with bubble </p>
                    <p className='text small'>earned when the bubble disappears</p>
                    <p className='text small'>Increase bubble earnings by leveling up</p>
                </div>
                <div className='connect-btn-div'>
                    <p className='text large'>Link Your Wallet</p>  
                    <p className='text'>username</p>  
                    <p className='text'>TelegramID</p>  
                    <Button className='connect-wallet text' onClick={handleConnectWallet}>
                        Connect Wallet
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Wallet