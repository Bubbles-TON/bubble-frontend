import React from 'react';
import '../styles/Homepage.css';

const Homepage: React.FC = () => {
    return (
        <div className="game-container">
            {/* Header Section */}
            <div className="header">
                <div className="energy-bar">
                    <div className="energy">23/200</div>
                    <img src="/src/assets/shard.png" alt="Shard Icon" className="header-icon"/>
                </div>
                <div className="level-section">
                    {/* Combine the border and profile images */}
                    <div className="profile-container">
                        <img src="/src/assets/border.png" alt="Border" className="border"/>
                        <img src="/src/assets/profile.png" alt="Profile" className="profile"/>
                    </div>
                    <div className="level">Level 9</div>
                </div>
                <div className="shards">
                    <span>12300</span>
                    <img src="/src/assets/bubble.png" alt="Shard Icon" className="header-icon"/>
                </div>
            </div>

            {/* Bubble Text */}
            <div className="bubble-text">
                <p>Make the bubble disappear</p>
            </div>

            {/* Bubble Section */}
            <div className="bubble-container">
                <img src="/src/assets/bubble.png" alt="Bubble" className="bubble" />
            </div>

        </div>
    );
};

export default Homepage;
