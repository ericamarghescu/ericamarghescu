import './Experience-Page.css';
import arrow from '../../images/arrow.png';
import React from 'react';

class Experience2 extends React.Component {
   render() {
      return (
         <div className="experience-page">
            <div className={this.props.desktop ? "job-header-box" : "job-header-box-mobile"}>
               <div className={this.props.desktop ? "job-title-box" : "job-title-box-mobile"}>
                  <p className={this.props.desktop ? "job-title" : "job-title-mobile"}>Software Engineering Intern</p>
                  {this.props.desktop ? (<p className="company-title">@ Palo Alto Networks</p>) : (<p className="company-title-mobile">@ PAN</p>)}
               </div>
               <p className={this.props.desktop ? "job-date" : "job-date-mobile"}>May 2022 - August 2022</p>
            </div>
            <div className="job-desc-box">
               <div className={this.props.desktop ? "job-bullet" : "job-bullet-mobile"}>
                  <img src={arrow} className="bullet"/>
                  <p className={this.props.desktop ? "job-desc-text" : "job-desc-text-mobile"}>This summer, I integrated with a team of full-time employees, using React to improve UI for anomaly data within Prisma Cloud.</p>
               </div>
               <div className={this.props.desktop ? "job-bullet" : "job-bullet-mobile"}>
                  <img src={arrow} className="bullet"/>
                  <p className={this.props.desktop ? "job-desc-text" : "job-desc-text-mobile"}>I implemented and tested a full feature on a flagship product, and my code was ultimately used in production, which was a very rewarding feeling.</p>
               </div>
               <div className={this.props.desktop ? "job-bullet" : "job-bullet-mobile"}>
                  <img src={arrow} className="bullet"/>
                  <p className={this.props.desktop ? "job-desc-text" : "job-desc-text-mobile"}>During this experience, I learned to be resourceful and take initiative, first solving problems by myself and reaching out to mentors when appropriate.</p>
               </div>
            </div>
         </div>
       );
   }
}

export default Experience2;