import '../styles/Experience.css';
import Experience1 from '../experience_pages/Experience1';
import Experience2 from '../experience_pages/Experience2';
import Experience3 from '../experience_pages/Experience3';
import Experience4 from '../experience_pages/Experience4';
import React from 'react';

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
                     <button className={this.state.msft ? "experience-menu-button-clicked" : "experience-menu-button"} onClick={this.handleClick_msft}>Microsoft</button>
                     <button className={this.state.panw ? "experience-menu-button-clicked" : "experience-menu-button"} onClick={this.handleClick_panw}>Palo Alto Networks</button>
                     <button className={this.state.mnsm ? "experience-menu-button-clicked" : "experience-menu-button"} onClick={this.handleClick_mnsm}>Mathnasium</button>
                     <button className={this.state.frlc ? "experience-menu-button-clicked" : "experience-menu-button"} onClick={this.handleClick_frlc}>Freelance</button>
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