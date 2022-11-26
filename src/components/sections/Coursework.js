import '../styles/Coursework.css';
import Coursework1 from '../coursework_pages/Coursework1';
import Coursework2 from '../coursework_pages/Coursework2';
import Coursework3 from '../coursework_pages/Coursework3';
import Coursework4 from '../coursework_pages/Coursework4';
import Coursework5 from '../coursework_pages/Coursework5';
import React from 'react';
import $ from 'jquery';

class Coursework extends React.Component {
   constructor() {
      super();
      this.state = { 
         f20: false,
         s21: false,
         f21: false,
         s22: false,
         f22: true
      };
      this.handleClick_f20 = this.handleClick_f20.bind(this);
      this.handleClick_s21 = this.handleClick_s21.bind(this);
      this.handleClick_f21 = this.handleClick_f21.bind(this);
      this.handleClick_s22 = this.handleClick_s22.bind(this);
      this.handleClick_f22 = this.handleClick_f22.bind(this);
      this.slideTransition1 = this.slideTransition1.bind(this);
      this.slideTransition2 = this.slideTransition2.bind(this);
      this.slideTransition3 = this.slideTransition3.bind(this);
      this.slideTransition4 = this.slideTransition4.bind(this);
      this.slideTransition5 = this.slideTransition5.bind(this);
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

   slideTransition1 = () => {
      $("#coursework-button1").on("click", function() {
         $(".coursework-menu-line").animate({left: '25vw'});
      });
   }

   slideTransition2 = () => {
      $("#coursework-button2").on("click", function() {
         $(".coursework-menu-line").animate({left: '35vw'});
      });
   }

   slideTransition3 = () => {
      $("#coursework-button3").on("click", function() {
         $(".coursework-menu-line").animate({left: '45vw'});
      });
   }

   slideTransition4 = () => {
      $("#coursework-button4").on("click", function() {
         $(".coursework-menu-line").animate({left: '55vw'});
      });
   }

   slideTransition5 = () => {
      $("#coursework-button5").on("click", function() {
         $(".coursework-menu-line").animate({left: '65vw'});
      });
   }

   componentDidMount() {
      this.slideTransition1();
      this.slideTransition2();
      this.slideTransition3();
      this.slideTransition4();
      this.slideTransition5();
   }
 
   render() {
      return (
         <div id="Coursework" className="coursework">
           <div className="coursework-box">
              <div className="coursework-title-box">
                 <p className="coursework-num">02</p>
                 <p className="coursework-title-text">Relevant Coursework</p>
                 <div className="coursework-line-box">
                    <div className="coursework-line"/>
                 </div>
              </div>
              <div className="coursework-menu">
                  <span className="coursework-menu-line"/>
                  <div className="coursework-menu-buttons">
                     <button id="coursework-button1" className={this.state.f22 ? "coursework-menu-button-clicked" : "coursework-menu-button"} onClick={this.handleClick_f22}>
                        <p className="coursework-menu-button-text">Fall 2022</p>
                     </button>
                     <button id="coursework-button2" className={this.state.s22 ? "coursework-menu-button-clicked" : "coursework-menu-button"} onClick={this.handleClick_s22}>
                        <p className="coursework-menu-button-text">Spring 2022</p>
                     </button>
                     <button id="coursework-button3" className={this.state.f21 ? "coursework-menu-button-clicked" : "coursework-menu-button"} onClick={this.handleClick_f21}>
                        <p className="coursework-menu-button-text">Fall 2021</p>
                     </button>
                     <button id="coursework-button4" className={this.state.s21 ? "coursework-menu-button-clicked" : "coursework-menu-button"} onClick={this.handleClick_s21}>
                        <p className="coursework-menu-button-text">Spring 2021</p>
                     </button>
                     <button id="coursework-button5" className={this.state.f20 ? "coursework-menu-button-clicked" : "coursework-menu-button"} onClick={this.handleClick_f20}>
                        <p className="coursework-menu-button-text">Fall 2020</p>
                     </button>
                  </div>
              </div>
              {this.state.f20 ? (<div className="coursework-page"><Coursework1/></div>) : (<div/>)}
              {this.state.s21 ? (<div className="coursework-page"><Coursework2/></div>) : (<div/>)}
              {this.state.f21 ? (<div className="coursework-page"><Coursework3/></div>) : (<div/>)}
              {this.state.s22 ? (<div className="coursework-page"><Coursework4/></div>) : (<div/>)}
              {this.state.f22 ? (<div className="coursework-page"><Coursework5/></div>) : (<div/>)}
           </div>
         </div>
       );
   }
}

export default Coursework;