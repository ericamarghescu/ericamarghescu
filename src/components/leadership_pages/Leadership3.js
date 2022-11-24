import '../experience_pages/Experience-Page.css';
import arrow from '../../images/arrow.png';
import React from 'react';

class Leadership3 extends React.Component {
   render() {
      return (
         <div className="experience-page">
            <div className="job-header-box">
               <div className="job-title-box">
                  <p className="job-title">Volunteer Music Teacher</p>
                  <p className="company-title">@ Palo Alto Music Connection</p>
               </div>
               <p className="job-date">August 2017 - June 2019</p>
            </div>
            <div className="job-desc-box">
               <div className="job-bullet">
                  <img src={arrow} className="bullet"/>
                  <p className="job-desc-text">Each week, I travelled to a local elementary school in a disadvantaged community to provide free and easy access to music lessons.</p>
               </div>
               <div className="job-bullet">
                  <img src={arrow} className="bullet"/>
                  <p className="job-desc-text">I got to work closely with children to build rapport, teach flute performance fundamentals, and spark a passion for music.</p>
               </div>
               <div className="job-bullet">
                  <img src={arrow} className="bullet"/>
                  <p className="job-desc-text">It was so exciting to see young children fall in love with music the same way I did. It felt even better to see the smile on their parents' faces at the annual recital!</p>
               </div>
            </div>
         </div>
       );
   }
}

export default Leadership3;