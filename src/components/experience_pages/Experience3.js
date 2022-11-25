import './Experience-Page.css';
import arrow from '../../images/arrow.png';
import React from 'react';

class Experience3 extends React.Component {
   render() {
      return (
         <div className="experience-page">
            <div className={this.props.desktop ? "job-header-box" : "job-header-box-mobile"}>
               <div className={this.props.desktop ? "job-title-box" : "job-title-box-mobile"}>
                  <p className={this.props.desktop ? "job-title" : "job-title-mobile"}>Math Instructor</p>
                  <p className={this.props.desktop ? "company-title" : "company-title-mobile"}>@ Mathnasium</p>
               </div>
               <p className={this.props.desktop ? "job-date" : "job-date-mobile"}>October 2018 - October 2020</p>
            </div>
            <div className="job-desc-box">
               <div className={this.props.desktop ? "job-bullet" : "job-bullet-mobile"}>
                  <img src={arrow} className="bullet"/>
                  <p className={this.props.desktop ? "job-desc-text" : "job-desc-text-mobile"}>Each week, I taught ~25 students math, ranging from fundamental arithmetic to complex geometry proofs.</p>
               </div>
               <div className={this.props.desktop ? "job-bullet" : "job-bullet-mobile"}>
                  <img src={arrow} className="bullet"/>
                  <p className={this.props.desktop ? "job-desc-text" : "job-desc-text-mobile"}>I learned to build rapport with students and adapted to each individual’s learning needs by adjusting their tailored lesson plan.</p>
               </div>
               <div className={this.props.desktop ? "job-bullet" : "job-bullet-mobile"}>
                  <img src={arrow} className="bullet"/>
                  <p className={this.props.desktop ? "job-desc-text" : "job-desc-text-mobile"}>I also led games and crafted projects & activities to engage students and get them excited about math!</p>
               </div>
            </div>
         </div>
       );
   }
}

export default Experience3;