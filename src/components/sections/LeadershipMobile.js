import '../styles/LeadershipMobile.css';
import Leadership1 from '../leadership_pages/Leadership1';
import Leadership2 from '../leadership_pages/Leadership2';
import Leadership3 from '../leadership_pages/Leadership3';
import React from 'react';


class LeadershipMobile extends React.Component {
   constructor() {
      super();
      this.state = {
         h4i: true,
         pamc: false,
         ws: false
      };
      this.handleClick_h4i = this.handleClick_h4i.bind(this);
      this.handleClick_pamc = this.handleClick_pamc.bind(this);
      this.handleClick_ws = this.handleClick_ws.bind(this);
   }

   handleClick_h4i(e) {
      e.preventDefault();
      this.setState({ h4i: true,
                      pamc: false,
                      ws: false});
   }

   handleClick_pamc(e) {
      e.preventDefault();
      this.setState({ h4i: false,
                      pamc: true,
                      ws: false});
   }

   handleClick_ws(e) {
      e.preventDefault();
      this.setState({ h4i: false,
                      pamc: false,
                      ws: true});
   }

 
   render() {
      return (
         <div id="LeadershipMobile" className="leadership-mobile">
            <div className="space"/>
           <div className="leadership-box-mobile">
              <div className="leadership-title-box-mobile">
                 <p className="leadership-num-mobile">04</p>
                 <p className="leadership-title-text-mobile">Leadership & Impact</p>
                 <div className="leadership-line-box-mobile">
                    <div className="leadership-line-mobile"/>
                 </div>
              </div>
              <div className="leadership-menu-mobile">
                  <button className={this.state.h4i ? "leadership-menu-button-clicked-mobile" : "leadership-menu-button-mobile"} onClick={this.handleClick_h4i}>Hack4Impact</button>
                  <button className={this.state.ws ? "leadership-menu-button-clicked-mobile" : "leadership-menu-button-mobile"} onClick={this.handleClick_ws}>Workshops</button>
                  <button className={this.state.pamc ? "leadership-menu-button-clicked-mobile" : "leadership-menu-button-mobile"} onClick={this.handleClick_pamc}>Palo Alto Music Connection</button>
              </div>
               {this.state.h4i ? (<div className="leadership-desc-mobile"><Leadership1 desktop={this.props.desktop}/></div>) : (<div className="placeholder"/>)}
               {this.state.ws ? (<div className="leadership-desc-mobile"><Leadership2 desktop={this.props.desktop}/></div>) : (<div className="placeholder"/>)}
               {this.state.pamc ? (<div className="leadership-desc-mobile"><Leadership3 desktop={this.props.desktop}/></div>) : (<div className="placeholder"/>)}
           </div>
         </div>
       );
   }
}

export default LeadershipMobile;