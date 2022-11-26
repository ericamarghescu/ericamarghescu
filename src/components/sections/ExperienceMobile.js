import '../styles/ExperienceMobile.css';
import Experience1 from '../experience_pages/Experience1';
import Experience2 from '../experience_pages/Experience2';
import Experience3 from '../experience_pages/Experience3';
import Experience4 from '../experience_pages/Experience4';
import React from 'react';
import $ from 'jquery';


class ExperienceMobile extends React.Component {
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
      $("#experience-button1-mobile").on("click", function() {
         $(".experience-menu-line-mobile").animate({left: '6vw'});
      });
   }

   slideTransition2 = () => {
      $("#experience-button2-mobile").on("click", function() {
         $(".experience-menu-line-mobile").animate({left: '28vw'});
      });
   }

   slideTransition3 = () => {
      $("#experience-button3-mobile").on("click", function() {
         $(".experience-menu-line-mobile").animate({left: '50vw'});
      });
   }

   slideTransition4 = () => {
      $("#experience-button4-mobile").on("click", function() {
         $(".experience-menu-line-mobile").animate({left: '72vw'});
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
         <div id="ExperienceMobile" className="experience-mobile">
           <div className="experience-box-mobile">
              <div className="experience-title-box-mobile">
                 <p className="experience-num-mobile">03</p>
                 <p className="experience-title-text-mobile">Work Experience</p>
                 <div className="experience-line-box-mobile">
                    <div className="experience-line-mobile"/>
                 </div>
              </div>
              <div className="experience-menu-mobile">
                  <div className="experience-menu-buttons-mobile">
                     <button id="experience-button1-mobile" className={this.state.msft ? "experience-menu-button-clicked-mobile" : "experience-menu-button-mobile"} onClick={this.handleClick_msft}>Microsoft</button>
                     <button id="experience-button2-mobile" className={this.state.panw ? "experience-menu-button-clicked-mobile" : "experience-menu-button-mobile"} onClick={this.handleClick_panw}>Palo Alto Networks</button>
                     <button id="experience-button3-mobile" className={this.state.mnsm ? "experience-menu-button-clicked-mobile" : "experience-menu-button-mobile"} onClick={this.handleClick_mnsm}>Mathnasium</button>
                     <button id="experience-button4-mobile" className={this.state.frlc ? "experience-menu-button-clicked-mobile" : "experience-menu-button-mobile"} onClick={this.handleClick_frlc}>Freelance</button>
                  </div>
                  <span className="experience-menu-line-mobile"/>
              </div>
               {this.state.msft ? (<div className="experience-desc-mobile"><Experience1 desktop={this.props.desktop}/></div>) : (<div className="placeholder"/>)}
               {this.state.panw ? (<div className="experience-desc-mobile"><Experience2 desktop={this.props.desktop}/></div>) : (<div className="placeholder"/>)}
               {this.state.mnsm ? (<div className="experience-desc-mobile"><Experience3 desktop={this.props.desktop}/></div>) : (<div className="placeholder"/>)}
               {this.state.frlc ? (<div className="experience-desc-mobile"><Experience4 desktop={this.props.desktop}/></div>) : (<div className="placeholder"/>)}
           </div>
         </div>
       );
   }
}

export default ExperienceMobile;