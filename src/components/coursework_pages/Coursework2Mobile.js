import './Coursework2Mobile.css';
import React from 'react';

class Coursework2Mobile extends React.Component {
   constructor() {
      super();
      this.state = {
         c1: true,
         c2: false,
         c3: false,
         c4: false
      };
      this.handleClick_c1 = this.handleClick_c1.bind(this);
      this.handleClick_c2 = this.handleClick_c2.bind(this);
      this.handleClick_c3 = this.handleClick_c3.bind(this);
      this.handleClick_c4 = this.handleClick_c4.bind(this);
   }

   handleClick_c1(e) {
      e.preventDefault();
      this.setState({ c1: true,
                      c2: false,
                      c3: false,
                      c4: false});
   }

   handleClick_c2(e) {
      e.preventDefault();
      this.setState({ c1: false,
         c2: true,
         c3: false,
         c4: false});
   }

   handleClick_c3(e) {
      e.preventDefault();
      this.setState({ c1: false,
         c2: false,
         c3: true,
         c4: false});
   }

   handleClick_c4(e) {
      e.preventDefault();
      this.setState({ c1: false,
         c2: false,
         c3: false,
         c4: true});
   }

   render() {
      return (
         <div className="coursework2-mobile">
            <div className="coursework2-top-mobile">
               <div className="coursework2-course-box-mobile">
                  <button className={this.state.c1 ? "coursework2-course-clicked-mobile" : "coursework2-course-mobile"} onClick={this.handleClick_c1}>CMSC250</button>
                  {this.state.c1 ? (<div className="coursework2-line-box-mobile"><div className="coursework2-line-mobile"/></div>) : (<div className="coursework2-line-box-mobile"/>)}
               </div>
               <div className="coursework2-course-box-mobile">
                  <button className={this.state.c2 ? "coursework2-course-clicked-mobile" : "coursework2-course-mobile"} onClick={this.handleClick_c2}>ENGL101</button>
                  {this.state.c2 ? (<div className="coursework2-line-box-mobile"><div className="coursework2-line-mobile"/></div>) : (<div className="coursework2-line-box-mobile"/>)}
               </div>
               <div className="coursework2-course-box-mobile">
                  <button className={this.state.c3 ? "coursework2-course-clicked-mobile" : "coursework2-course-mobile"} onClick={this.handleClick_c3}>HACS101</button>
                  {this.state.c3 ? (<div className="coursework2-line-box-mobile"><div className="coursework2-line-mobile"/></div>) : (<div className="coursework2-line-box-mobile"/>)}
               </div>
               <div className="coursework2-course-box-mobile">
                  <button className={this.state.c4 ? "coursework2-course-clicked-mobile" : "coursework2-course-mobile"} onClick={this.handleClick_c4}>HACS208A</button>
                  {this.state.c4 ? (<div className="coursework2-line-box-mobile"><div className="coursework2-line-mobile"/></div>) : (<div className="coursework2-line-box-mobile"/>)}
               </div>
            </div>
            <div className="coursework2-bottom-mobile">
               {this.state.c1 ? (<p className="coursework2-course-name-mobile">Discrete Structures</p>) : (<div/>)}
               {this.state.c1 ? (<p className="coursework2-course-desc-mobile">Fundamental mathematical concepts related to computer science, including finite and infinite sets, relations, functions, and propositional logic. Introduction to other techniques, modeling and solving problems in computer science. Introduction to permutations, combinations, graphs, and trees with selected applications.</p>) : (<div/>)}
               {this.state.c2 ? (<p className="coursework2-course-name-mobile">Academic Writing</p>) : (<div/>)}
               {this.state.c2 ? (<p className="coursework2-course-desc-mobile">An introductory course in expository writing.</p>) : (<div/>)}
               {this.state.c3 ? (<p className="coursework2-course-name-mobile">Applied Cybersecurity I</p>) : (<div/>)}
               {this.state.c3 ? (<p className="coursework2-course-desc-mobile">Prepares students for team research that will be conducted in HACS 200. Students gain an understanding across the breadth of cybersecurity including system monitoring, networking basics and penetration testing. An applied approach to statistics is also included to prepare students to assess the data collected for their research projects. The course is conducted with a hands-on approach applying virtual environments to practice the concepts learned in the technical lectures each week.</p>) : (<div/>)}
               {this.state.c4 ? (<p className="coursework2-course-name-mobile">Economic Aspects of Cybersecurity</p>) : (<div/>)}
               {this.state.c4 ? (<p className="coursework2-course-desc-mobile">Discuss the relationships among accounting, economics and cybersecurity, with a focus on the important roles of accounting and economics in understanding the issues related to cybersecurity. A basic framework for assessing the interactions among accounting, economics, and cybersecurity will be developed and discussed. A secondary objective of the course is to assist ACES students in developing their ability to conduct original and applied research on topics related to "accounting and economic aspects of cybersecurity."</p>) : (<div/>)}
            </div>
         </div>
       );
   }
}

export default Coursework2Mobile;