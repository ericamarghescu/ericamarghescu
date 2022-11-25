import '../styles/CourseworkMobile.css';
import Coursework1Mobile from '../coursework_pages/Coursework1Mobile';
import Coursework2Mobile from '../coursework_pages/Coursework2Mobile';
import Coursework3Mobile from '../coursework_pages/Coursework3Mobile';
import Coursework4Mobile from '../coursework_pages/Coursework4Mobile';
import Coursework5Mobile from '../coursework_pages/Coursework5Mobile';
import React from 'react';

class CourseworkMobile extends React.Component {
   constructor() {
      super();
      this.state = {
         f20: true,
         s21: false,
         f21: false,
         s22: false,
         f22: false
      };
      this.handleClick_f20 = this.handleClick_f20.bind(this);
      this.handleClick_s21 = this.handleClick_s21.bind(this);
      this.handleClick_f21 = this.handleClick_f21.bind(this);
      this.handleClick_s22 = this.handleClick_s22.bind(this);
      this.handleClick_f22 = this.handleClick_f22.bind(this);
   }

   handleClick_f20(e) {
      e.preventDefault();
      this.setState({ f20: true,
                      s21: false,
                      f21: false,
                      s22: false,
                      f22: false});
   }

   handleClick_s21(e) {
      e.preventDefault();
      this.setState({ f20: false,
         s21: true,
         f21: false,
         s22: false,
         f22: false});
   }

   handleClick_f21(e) {
      e.preventDefault();
      this.setState({ f20: false,
         s21: false,
         f21: true,
         s22: false,
         f22: false});
   }

   handleClick_s22(e) {
      e.preventDefault();
      this.setState({ f20: false,
         s21: false,
         f21: false,
         s22: true,
         f22: false});
   }

   handleClick_f22(e) {
      e.preventDefault();
      this.setState({ f20: false,
         s21: false,
         f21: false,
         s22: false,
         f22: true});
   }
 
   render() {
      return (
         <div id="CourseworkMobile" className="coursework-mobile">
           <div className="coursework-box-mobile">
              <div className="coursework-title-box-mobile">
                 <p className="coursework-num-mobile">02</p>
                 <p className="coursework-title-text-mobile">Relevant Coursework</p>
                 <div className="coursework-line-box-mobile">
                    <div className="coursework-line-mobile"/>
                 </div>
              </div>
              <div className="coursework-menu-mobile">
                  <button className={this.state.f20 ? "coursework-menu-button-clicked-mobile" : "coursework-menu-button-mobile"} onClick={this.handleClick_f20}>Fall 2020</button>
                  <button className={this.state.s21 ? "coursework-menu-button-clicked-mobile" : "coursework-menu-button-mobile"} onClick={this.handleClick_s21}>Spring 2021</button>
                  <button className={this.state.f21 ? "coursework-menu-button-clicked-mobile" : "coursework-menu-button-mobile"} onClick={this.handleClick_f21}>Fall 2021</button>
                  <button className={this.state.s22 ? "coursework-menu-button-clicked-mobile" : "coursework-menu-button-mobile"} onClick={this.handleClick_s22}>Spring 2022</button>
                  <button className={this.state.f22 ? "coursework-menu-button-clicked-mobile" : "coursework-menu-button-mobile"} onClick={this.handleClick_f22}>Fall 2022</button>
              </div>
              {this.state.f20 ? (<div className="coursework-page-mobile"><Coursework1Mobile/></div>) : (<div/>)}
              {this.state.s21 ? (<div className="coursework-page-mobile"><Coursework2Mobile/></div>) : (<div/>)}
              {this.state.f21 ? (<div className="coursework-page-mobile"><Coursework3Mobile/></div>) : (<div/>)}
              {this.state.s22 ? (<div className="coursework-page-mobile"><Coursework4Mobile/></div>) : (<div/>)}
              {this.state.f22 ? (<div className="coursework-page-mobile"><Coursework5Mobile/></div>) : (<div/>)}
           </div>
         </div>
       );
   }
}

export default CourseworkMobile;