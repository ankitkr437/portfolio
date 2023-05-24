import React from 'react'
import './about.scss'
const About = () => {
  return (
    <div id="about" className='about'>
       <div className='left'>
       <h4 className='about-title'> I am <span style={{color:"rgb(8, 52, 112)",fontWeight:"bold"}}>Ankit Kumar</span> </h4>
       <p className='about-desc'>
Pursuing Btech from <span style={{fontWeight:"bold"}}>NIT Jamshedpur</span> with major in Electronics and Communication Engineering and a major inclination towards Web Development and Data structure and Algorithm. I love exploring new and upcoming technologies . I'm also adept at motivating others. Passionate about food and code.
          </p>
       </div>
       <div className='right'>
      
          <div className='dsa-container'>
           <div className='dsa-container-upper'>
             <img src='assets/leetcode.png'  className='dsa-icon'/>
             <a className='check-profile' href='https://leetcode.com/Ankitkr437/' target="_blank">Check Profile</a>
           </div>
           <p className='dsa-achievment'>Rated Knight (Max Contesr Rating: 2045)</p>
           <p className='dsa-achievment'>Solved 950+ Problems</p>
          </div>
          <div className='dsa-container'>
           <div className='dsa-container-upper'>
             <img src='assets/codeforces.png' className='dsa-icon'/>
             <a className='check-profile' href='https://codeforces.com/profile/Ankit62' target="_blank">Check Profile</a>
           </div>
           <p className='dsa-achievment'>Rated Pupil (Max Contesr Rating: 1376)</p>
           <p className='dsa-achievment'>Solved 100+ Problems</p>
          </div>
          <div className='dsa-container'>
           <div className='dsa-container-upper'>
             <img src='assets/gfg.png' className='dsa-icon'/>
             <a className='check-profile' href='https://auth.geeksforgeeks.org/user/ankitloharshi/practice' target="_blank">Check Profile</a>
           </div>
           <p className='dsa-achievment'>Solved 200+ Problems</p>
          </div>
       </div>
    </div>
  )
}

export default About
