import './Experience-Page.css';
import arrow from '../../images/arrow.png';
import React from 'react';

class Experience1 extends React.Component {
   render() {
      return (
         <div className="experience-page">
            <div className="job-header-box">
               <div className="job-title-box">
                  <p className="job-title">Software Engineering Intern</p>
                  <p className="company-title">@ Microsoft</p>
               </div>
               <p className="job-date">May 2023 - August 2023</p>
            </div>
            <div className="job-desc-box">
               <div className="job-bullet">
                  <img src={arrow} className="bullet"/>
                  <p className="job-desc-text">Next summer, I will be joining the Windows + Devices team, working on back-end programming to improve the experience for users of public-facing products.</p>
               </div>
               <div className="job-bullet">
                  <img src={arrow} className="bullet"/>
                  <p className="job-desc-text">I will be staying in Redmond, WA for the summer and am so excited to be back on the West Coast and experience some new scenery!</p>
               </div>
               <div className="job-bullet">
                  <img src={arrow} className="bullet"/>
                  <p className="job-desc-text">My goals for this summer are to meet a lot of new people and put 100% into everything I do. I hope to gain experience with back-end programming in industry, and ideally return here full-time.</p>
               </div>
            </div>
         </div>
       );
   }
}

export default Experience1;