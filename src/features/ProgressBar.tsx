import React from 'react';
import '../styles/ProgressBar.css';

interface ProgressBarProps {
  percentage: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage }) => {
  return (
    <div className="progress-container">
      <div className="progress-bar">
        <div className="progress-filled" style={{ width: `${percentage}%` }}></div>
        <div className="progress-points">
          <div className={`point ${percentage >= 0 ? 'filled' : ''}`}>
            <span>1</span>
            <div className="potion">+100</div>
          </div>
          <div className={`point ${percentage >= 25 ? 'filled' : ''}`}>
            <span>5</span>
            <div className="potion">+300</div>
          </div>
          <div className={`point ${percentage >= 50 ? 'filled' : ''}`}>
            <span>10</span>
            <div className="potion">+1000</div>
          </div>
          <div className={`point ${percentage >= 75 ? 'filled' : ''}`}>
            <span>15</span>
            <div className="potion">+2000</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
