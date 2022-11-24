import '../experience_pages/Experience-Page.css';
import arrow from '../../images/arrow.png';
import React from 'react';

class Leadership2 extends React.Component {
   render() {
      return (
         <div className="experience-page">
            <div className="job-header-box">
               <div className="job-title-box">
                  <p className="job-title">PM Workshop Lead</p>
                  <p className="company-title">@ Break Through Tech</p>
               </div>
               <p className="job-date">November 2022</p>
            </div>
            <div className="job-desc-box">
               <div className="job-bullet">
                  <img src={arrow} className="bullet"/>
                  <p className="job-desc-text">I hosted a workshop in collaboration with Break Through Tech to inspire underrepresented genders to pursue leadership roles in STEM.</p>
               </div>
               <div className="job-bullet">
                  <img src={arrow} className="bullet"/>
                  <p className="job-desc-text">The workshop consisted of the basics of being a Product Manager and interactive activities to simulate certain aspects and engage the audience.</p>
               </div>
               <div className="job-bullet">
                  <img src={arrow} className="bullet"/>
                  <p className="job-desc-text">I got the chance to exercise my public-speaking skills and it felt really great to inspire others to pursue leadership roles, because I know how much it has helped me, both personally and professionally.</p>
               </div>
            </div>
         </div>
       );
   }
}

export default Leadership2;