import '../experience_pages/Experience-Page.css';
import './Leadership1.css';
import arrow from '../../images/arrow.png';
import React from 'react';

class Leadership1 extends React.Component {
   render() {
      return (
         <div className="leadership-page">
            <div className="experience-page">
               <div className="job-header-box">
                  <div className="job-title-box">
                     <p className="job-title">Director of Corporate Sponsorship & Finance</p>
                     <p className="company-title">@ Hack4Impact</p>
                  </div>
                  <p className="job-date">April 2022 - Present</p>
               </div>
               <div className="job-desc-box">
                  <div className="job-bullet">
                     <img src={arrow} className="bullet"/>
                     <p className="job-desc-text">Hack4Impact is an organization in which students form project teams to build full-stack software solutions for NPOs to make a positive impact.</p>
                  </div>
                  <div className="job-bullet">
                     <img src={arrow} className="bullet"/>
                     <p className="job-desc-text">Last year, I was elected by my peers to seek out funding, present to companies, manage finances, and maintain relationships with corporate sponsors.</p>
                  </div>
                  <div className="job-bullet">
                     <img src={arrow} className="bullet"/>
                     <p className="job-desc-text">I pioneered the position and sourced our first ever corporate partners, bringing in over $1000 for the organization!</p>
                  </div>
               </div>
            </div>
            <div className="experience-page">
               <div className="job-header-box">
                  <div className="job-title-box">
                     <p className="job-title">Product Manager</p>
                     <p className="company-title">@ Hack4Impact</p>
                  </div>
                  <p className="job-date">January 2022 - Present</p>
               </div>
               <div className="job-desc-box">
                  <div className="job-bullet">
                     <img src={arrow} className="bullet"/>
                     <p className="job-desc-text">This year I've been managing a team of 9 students developing a volunteer dashboard to drive up engagement for an NPO partner that delivers fresh produce to underserved communities.</p>
                  </div>
                  <div className="job-bullet">
                     <img src={arrow} className="bullet"/>
                     <p className="job-desc-text">I incorporated agile development techniques such as weekly stand-ups, bi-weekly sprints, and pair programming to aid in my team members' professional development.</p>
                  </div>
                  <div className="job-bullet">
                     <img src={arrow} className="bullet"/>
                     <p className="job-desc-text">I handled client communication, specified product features, and defined project timelines and deliverables.</p>
                  </div>
               </div>
            </div>
         </div>
       );
   }
}

export default Leadership1;