import './Experience-Page.css';
import arrow from '../../images/arrow.png';
import React from 'react';

class Experience3 extends React.Component {
   render() {
      return (
         <div className="experience-page">
            <div className="job-header-box">
               <div className="job-title-box">
                  <p className="job-title">Math Instructor</p>
                  <p className="company-title">@ Mathnasium</p>
               </div>
               <p className="job-date">October 2018 - October 2020</p>
            </div>
            <div className="job-desc-box">
               <div className="job-bullet">
                  <img src={arrow} className="bullet"/>
                  <p className="job-desc-text">Each week, I taught ~25 students math, ranging from fundamental arithmetic to complex geometry proofs.</p>
               </div>
               <div className="job-bullet">
                  <img src={arrow} className="bullet"/>
                  <p className="job-desc-text">I learned to build rapport with students and adapted to each individual’s learning needs by adjusting their tailored lesson plan.</p>
               </div>
               <div className="job-bullet">
                  <img src={arrow} className="bullet"/>
                  <p className="job-desc-text">I also led games and crafted projects & activities to engage students and get them excited about math!</p>
               </div>
            </div>
         </div>
       );
   }
}

export default Experience3;