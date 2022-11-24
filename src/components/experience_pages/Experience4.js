import './Experience-Page.css';
import arrow from '../../images/arrow.png';
import React from 'react';

class Experience4 extends React.Component {
   render() {
      return (
         <div className="experience-page">
            <div className="job-header-box">
               <div className="job-title-box">
                  <p className="job-title">Computer Science Tutor</p>
                  <p className="company-title">@ Gunn High School</p>
               </div>
               <p className="job-date">August 2019 - March 2020</p>
            </div>
            <div className="job-desc-box">
               <div className="job-bullet">
                  <img src={arrow} className="bullet"/>
                  <p className="job-desc-text">To teach my student the fundamentals of computer science, I created a curriculum from scratch in Python and Java.</p>
               </div>
               <div className="job-bullet">
                  <img src={arrow} className="bullet"/>
                  <p className="job-desc-text">I taught fundamentals such as sorting algorithms, data structures, writing functions, recursion, etc.</p>
               </div>
               <div className="job-bullet">
                  <img src={arrow} className="bullet"/>
                  <p className="job-desc-text">My student grew passionate about programming and ultimately decided to pursue computer science for their career, which was extremely rewarding, as I was able to share my love for the field with others. </p>
               </div>
            </div>
         </div>
       );
   }
}

export default Experience4;