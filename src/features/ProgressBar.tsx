import React, { useEffect, useState } from 'react';
import '../styles/ProgressBar.css';
import potion from "../assets/potion.png"
interface ProgressBarProps {
  user: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ user }) => {
  const [width, setWidth] = useState(12);
  const [one, setOne] = useState("white")
  const [five, setFive] = useState("white")
  const [ten, setTen] = useState("white")
  const [fifteen, setFifteen] = useState("white")
  const [textColorOne, setTextColorOne] = useState("black")
  const [textColorFive, setTextColorFive] = useState("black")
  const [textColorTen, setTextColorTen] = useState("black")
  const [textColorFifteen, setTextColorFifteen] = useState("black")
  const [points_one] = useState(100)
  const [points_five] = useState(200)
  const [points_ten] = useState(1000)
  const [points_fifteen] = useState(2000)
  useEffect(() => {
    let calculatedWidth = 12; // Default to 12% when user is 0
    if (user >= 1) {
      setOne("purple")
      setTextColorOne("white")
    }
    if (user >= 5) {
      setFive("purple")
      setTextColorFive("white")
    }
    if (user >= 10) {
      setTen("purple")
      setTextColorTen("white")
    }
    if (user >= 15) {
      setFifteen("purple")
      setTextColorFifteen("white")
    }

    if (user > 1 && user < 5) {
      // Calculate width for users between 0 and 5
      calculatedWidth = 12 + ((user / 5) * (30 - 12));

    } else if (user >= 5 && user <= 10) {
      // Calculate width for users between 5 and 10
      calculatedWidth = 42 + (((user - 5) / 5) * (61 - 42));
    } else if (user >= 10 && user <= 15) {
      // Calculate width for users between 10 and 15
      calculatedWidth = 73 + (((user - 10) / 5) * (89 - 73));
    }
    else if (user > 15) {
      calculatedWidth = 100
    }
    setWidth(calculatedWidth);
  }, [user]);
  return (
    <div className="progress-container">
      <div className='progress-tube'>
        <div className='progress-tube-color' style={{ width: `${width}%` }}>
          <div className={`point one ${user >= 0 ? 'filled' : ''}`} style={{ background: `${one}` }}>
            <span className='small' style={{ color: `${textColorOne}` }}>1</span>
            <span className='potion potion1'>
              <img src={potion} alt="" />
              <span className="small">+{points_one}</span>
            </span>
          </div>
          <div className={`point five ${user >= 5 ? 'filled' : ''}`} style={{ background: `${five}` }}>
            <span className='small' style={{ color: `${textColorFive}` }}>5</span>
            <span className='potion potion2'>
              <img src={potion} alt="" />
              <span className="small">+{points_five}</span>
            </span>          
            </div>
          <div className={`point ten ${user >= 10 ? 'filled' : ''}`} style={{ background: `${ten}` }}>
            <span className='small' style={{ color: `${textColorTen}` }}>10</span>
            <span className='potion potion3'>
              <img src={potion} alt="" />
              <span className="small">+{points_ten}</span>
            </span>     
          </div>
          <div className={`point fifteen ${user >= 15 ? 'filled' : ''}`} style={{ background: `${fifteen}` }}>
            <span className='small' style={{ color: `${textColorFifteen}` }}>15</span>
            <span className='potion potion4'>
              <img src={potion} alt="" />
              <span className="small">+{points_fifteen}</span>
            </span>  
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
