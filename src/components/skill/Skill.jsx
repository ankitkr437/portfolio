import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './skill.scss'
const Skill = ({imgsrc,name,percentage}) => {
  return (
    <div className='skill-container'>
    <div className='left'>
      <img src={imgsrc} className="skillimg"/>
      <p className='skillname'>{name}</p>
    </div>
    <div className='right'>
      <div className='right-progress'>
     <CircularProgressbar value={percentage} text={`${percentage}%`} 
     styles={{
      path: {
        // Path color
        stroke: `rgba(9, 33, 112)`,
      },
      pathTransitionDuration: 0.5,
      text: {
        fill: '#020101',
        fontSize: '16px',
      },
    }}
     />
     </div>
    </div>
   </div>
  )
}

export default Skill