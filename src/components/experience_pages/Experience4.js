import './Experience-Page.css';
import arrow from '../../images/arrow.png';
import React from 'react';

class Experience4 extends React.Component {
   render() {
      return (
         <div className="experience-page">
            <div className={this.props.desktop ? "job-header-box" : "job-header-box-mobile"}>
               <div className={this.props.desktop ? "job-title-box" : "job-title-box-mobile"}>
                  <p className={this.props.desktop ? "job-title" : "job-title-mobile"}>Computer Science Tutor</p>
                  {this.props.desktop ? (<p className="company-title">@ Gunn High School</p>) : (<p className="company-title-mobile">@ GHS</p>)}
               </div>
               <p className={this.props.desktop ? "job-date" : "job-date-mobile"}>August 2019 - March 2020</p>
            </div>
            <div className="job-desc-box">
               <div className={this.props.desktop ? "job-bullet" : "job-bullet-mobile"}>
                  <img src={arrow} className="bullet"/>
                  <p className={this.props.desktop ? "job-desc-text" : "job-desc-text-mobile"}>To teach my student the fundamentals of computer science, I created a curriculum from scratch in Python and Java.</p>
               </div>
               <div className={this.props.desktop ? "job-bullet" : "job-bullet-mobile"}>
                  <img src={arrow} className="bullet"/>
                  <p className={this.props.desktop ? "job-desc-text" : "job-desc-text-mobile"}>I taught fundamentals such as sorting algorithms, data structures, writing functions, recursion, etc.</p>
               </div>
               <div className={this.props.desktop ? "job-bullet" : "job-bullet-mobile"}>
                  <img src={arrow} className="bullet"/>
                  <p className={this.props.desktop ? "job-desc-text" : "job-desc-text-mobile"}>My student grew passionate about programming and ultimately decided to pursue computer science for their career, which was extremely rewarding, as I was able to share my love for the field with others. </p>
               </div>
            </div>
         </div>
       );
   }
}

export default Experience4;