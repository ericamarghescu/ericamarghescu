import './Experience-Page.css';
import arrow from '../../images/arrow.png';
import React from 'react';

class Experience1 extends React.Component {
   render() {
      return (
         <div className="experience-page">
            <div className={this.props.desktop ? "job-header-box" : "job-header-box-mobile"}>
               <div className={this.props.desktop ? "job-title-box" : "job-title-box-mobile"}>
                  <p className={this.props.desktop ? "job-title" : "job-title-mobile"}>Software Engineering Intern</p>
                  <p className={this.props.desktop ? "company-title" : "company-title-mobile"}>@ Microsoft</p> 
               </div>
               <p className={this.props.desktop ? "job-date" : "job-date-mobile"}>May 2023 - August 2023</p>
            </div>
            <div className="job-desc-box">
               <div className={this.props.desktop ? "job-bullet" : "job-bullet-mobile"}>
                  <img src={arrow} className="bullet"/>
                  <p className={this.props.desktop ? "job-desc-text" : "job-desc-text-mobile"}>Next summer, I will be joining the Windows + Devices team, working on back-end programming to improve the experience for users of public-facing products.</p>
               </div>
               <div className={this.props.desktop ? "job-bullet" : "job-bullet-mobile"}>
                  <img src={arrow} className="bullet"/>
                  <p className={this.props.desktop ? "job-desc-text" : "job-desc-text-mobile"}>I will be staying in Redmond, WA for the summer and am so excited to be back on the West Coast and experience some new scenery!</p>
               </div>
               <div className={this.props.desktop ? "job-bullet" : "job-bullet-mobile"}>
                  <img src={arrow} className="bullet"/>
                  <p className={this.props.desktop ? "job-desc-text" : "job-desc-text-mobile"}>My goals for this summer are to meet a lot of new people and put 100% into everything I do. I hope to gain experience with back-end programming in industry, and ideally return here full-time.</p>
               </div>
            </div>
         </div>
       );
   }
}

export default Experience1;