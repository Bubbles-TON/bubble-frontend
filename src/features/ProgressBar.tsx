import React from 'react';
import '../styles/ProgressBar.css'; // Create and import a CSS file for styles
interface ProgressBarProps {
    percentage: number;
  }
  const ProgressBar: React.FC<ProgressBarProps> = ({ percentage }) => {
    return (
        <div className="progress-container">
        <div className="progress-bar">
          <div className="progress-filled"></div>
          <div className="progress-points">
            <div className="point filled">
              <span>1</span>
              <div className="potion">+100</div>
            </div>
            <div className="point filled">
              <span>5</span>
              <div className="potion">+300</div>
            </div>
            <div className="point">
              <span>10</span>
              <div className="potion">+1000</div>
            </div>
            <div className="point">
              <span>15</span>
              <div className="potion">+2000</div>
            </div>
          </div>
        </div>
      </div>
  );
};
export default ProgressBar