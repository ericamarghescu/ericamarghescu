import './Experience-Page.css';
import arrow from '../../images/arrow.png';
import React from 'react';

class Experience2 extends React.Component {
   render() {
      return (
         <div className="experience-page">
            <div className="job-header-box">
               <div className="job-title-box">
                  <p className="job-title">Software Engineering Intern</p>
                  <p className="company-title">@ Palo Alto Networks</p>
               </div>
               <p className="job-date">May 2022 - August 2022</p>
            </div>
            <div className="job-desc-box">
               <div className="job-bullet">
                  <img src={arrow} className="bullet"/>
                  <p className="job-desc-text">This summer, I integrated with a team of full-time employees, using React to improve UI for anomaly data within Prisma Cloud.</p>
               </div>
               <div className="job-bullet">
                  <img src={arrow} className="bullet"/>
                  <p className="job-desc-text">I implemented and tested a full feature on a flagship product, and my code was ultimately used in production, which was a very rewarding feeling.</p>
               </div>
               <div className="job-bullet">
                  <img src={arrow} className="bullet"/>
                  <p className="job-desc-text">During this experience, I learned to be resourceful and take initiative, first solving problems by myself and reaching out to mentors when appropriate.</p>
               </div>
            </div>
         </div>
       );
   }
}

export default Experience2;