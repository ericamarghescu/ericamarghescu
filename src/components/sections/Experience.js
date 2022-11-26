import '../styles/Experience.css';
import Experience1 from '../experience_pages/Experience1';
import Experience2 from '../experience_pages/Experience2';
import Experience3 from '../experience_pages/Experience3';
import Experience4 from '../experience_pages/Experience4';
import React from 'react';
import $ from 'jquery';

class Experience extends React.Component {
   constructor() {
      super();
      this.state = {
         msft: true,
         panw: false,
         mnsm: false,
         frlc: false
      };
      this.handleClick_msft = this.handleClick_msft.bind(this);
      this.handleClick_panw = this.handleClick_panw.bind(this);
      this.handleClick_mnsm = this.handleClick_mnsm.bind(this);
      this.handleClick_frlc = this.handleClick_frlc.bind(this);
      this.slideTransition1 = this.slideTransition1.bind(this);
      this.slideTransition2 = this.slideTransition2.bind(this);
      this.slideTransition3 = this.slideTransition3.bind(this);
      this.slideTransition4 = this.slideTransition4.bind(this);
   }

   handleClick_msft(e) {
      e.preventDefault();
      this.setState({ msft: true,
                      panw: false,
                      mnsm: false,
                      frlc: false});
   }

   handleClick_panw(e) {
      e.preventDefault();
      this.setState({ msft: false,
         panw: true,
         mnsm: false,
         frlc: false});
   }

   handleClick_mnsm(e) {
      e.preventDefault();
      this.setState({ msft: false,
         panw: false,
         mnsm: true,
         frlc: false});
   }

   handleClick_frlc(e) {
      e.preventDefault();
      this.setState({ msft: false,
         panw: false,
         mnsm: false,
         frlc: true});
   }

   slideTransition1 = () => {
      $("#experience-button1").on("click", function() {
         $(".experience-menu-line").animate({top: '355vh'});
      });
   }

   slideTransition2 = () => {
      $("#experience-button2").on("click", function() {
         $(".experience-menu-line").animate({top: '362vh'});
      });
   }

   slideTransition3 = () => {
      $("#experience-button3").on("click", function() {
         $(".experience-menu-line").animate({top: '369vh'});
      });
   }

   slideTransition4 = () => {
      $("#experience-button4").on("click", function() {
         $(".experience-menu-line").animate({top: '376vh'});
      });
   }

   componentDidMount() {
      this.slideTransition1();
      this.slideTransition2();
      this.slideTransition3();
      this.slideTransition4();
   }

   render() {
      return (
         <div id="Experience" className="experience">
           <div className="experience-box">
               <div className="experience-title-box">
                  <p className="experience-num">03</p>
                  <p className="experience-title-text">Work Experience</p>
                  <div className="experience-line-box">
                     <div className="experience-line"/>
                  </div>
               </div>
               <div className="experience-content">
                  <div className="experience-menu">
                     <span className="experience-menu-line"/>
                     <div className="experience-menu-buttons">
                        <button id="experience-button1" className={this.state.msft ? "experience-menu-button-clicked" : "experience-menu-button"} onClick={this.handleClick_msft}>Microsoft</button>
                        <button id="experience-button2" className={this.state.panw ? "experience-menu-button-clicked" : "experience-menu-button"} onClick={this.handleClick_panw}>Palo Alto Networks</button>
                        <button id="experience-button3" className={this.state.mnsm ? "experience-menu-button-clicked" : "experience-menu-button"} onClick={this.handleClick_mnsm}>Mathnasium</button>
                        <button id="experience-button4" className={this.state.frlc ? "experience-menu-button-clicked" : "experience-menu-button"} onClick={this.handleClick_frlc}>Freelance</button>
                     </div>
                  </div>
                  {this.state.msft ? (<div className="experience-desc"><Experience1 desktop={this.props.desktop}/></div>) : (<div className="placeholder"/>)}
                  {this.state.panw ? (<div className="experience-desc"><Experience2 desktop={this.props.desktop}/></div>) : (<div className="placeholder"/>)}
                  {this.state.mnsm ? (<div className="experience-desc"><Experience3 desktop={this.props.desktop}/></div>) : (<div className="placeholder"/>)}
                  {this.state.frlc ? (<div className="experience-desc"><Experience4 desktop={this.props.desktop}/></div>) : (<div className="placeholder"/>)}
               </div>
           </div>
         </div>
       );
   }
}

export default Experience;