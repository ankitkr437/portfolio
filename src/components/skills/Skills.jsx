import React from 'react'
import {data} from '../skilldata'
import Skill from '../skill/Skill'
import './skills.scss'
const Skills = () => {
  return (
    <div id='skills'>
      <h1 className='skill-title'>My Skills</h1>
    <div className='all-skills'>
     {
      data.map((d,i)=>(
          <Skill imgsrc={d.img} name={d.name} percentage={d.value} key={i}/>
        )
      )
     }
   </div>
    </div>
  )
}

export default Skills