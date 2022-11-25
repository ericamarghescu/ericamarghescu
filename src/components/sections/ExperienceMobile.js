import '../styles/ExperienceMobile.css';
import Experience1 from '../experience_pages/Experience1';
import Experience2 from '../experience_pages/Experience2';
import Experience3 from '../experience_pages/Experience3';
import Experience4 from '../experience_pages/Experience4';
import React from 'react';


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
                  <button className={this.state.msft ? "experience-menu-button-clicked-mobile" : "experience-menu-button-mobile"} onClick={this.handleClick_msft}>Microsoft</button>
                  <button className={this.state.panw ? "experience-menu-button-clicked-mobile" : "experience-menu-button-mobile"} onClick={this.handleClick_panw}>Palo Alto Networks</button>
                  <button className={this.state.mnsm ? "experience-menu-button-clicked-mobile" : "experience-menu-button-mobile"} onClick={this.handleClick_mnsm}>Mathnasium</button>
                  <button className={this.state.frlc ? "experience-menu-button-clicked-mobile" : "experience-menu-button-mobile"} onClick={this.handleClick_frlc}>Freelance</button>
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