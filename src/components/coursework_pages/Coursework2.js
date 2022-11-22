import './Coursework2.css';
import React from 'react';

class Coursework2 extends React.Component {
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
         <div className="coursework2">
            <div className="coursework2-left">
               <div className="coursework2-course-box">
                     <button className={this.state.c1 ? "coursework2-course-clicked" : "coursework2-course"} onClick={this.handleClick_c1}>CMSC250</button>
                     {this.state.c1 ? (<div className="coursework2-line-box"><div className="coursework2-line"/></div>) : (<div/>)}
                  </div>
                  <div className="coursework2-course-box">
                     <button className={this.state.c2 ? "coursework2-course-clicked" : "coursework2-course"} onClick={this.handleClick_c2}>ENGL101</button>
                     {this.state.c2 ? (<div className="coursework2-line-box"><div className="coursework2-line"/></div>) : (<div/>)}
                  </div>
                  <div className="coursework2-course-box">
                     <button className={this.state.c3 ? "coursework2-course-clicked" : "coursework2-course"} onClick={this.handleClick_c3}>HACS101</button>
                     {this.state.c3 ? (<div className="coursework2-line-box"><div className="coursework2-line"/></div>) : (<div/>)}
                  </div>
                  <div className="coursework2-course-box">
                     <button className={this.state.c4 ? "coursework2-course-clicked" : "coursework2-course"} onClick={this.handleClick_c4}>HACS208A</button>
                     {this.state.c4 ? (<div className="coursework2-line-box"><div className="coursework2-line"/></div>) : (<div/>)}
                  </div>
            </div>
            <div className="coursework2-right">
               {this.state.c1 ? (<p className="course-name">Discrete Structures</p>) : (<div/>)}
               {this.state.c1 ? (<p className="course-desc">Fundamental mathematical concepts related to computer science, including finite and infinite sets, relations, functions, and propositional logic. Introduction to other techniques, modeling and solving problems in computer science. Introduction to permutations, combinations, graphs, and trees with selected applications.</p>) : (<div/>)}
               {this.state.c2 ? (<p className="course-name">Academic Writing</p>) : (<div/>)}
               {this.state.c2 ? (<p className="course-desc">An introductory course in expository writing.</p>) : (<div/>)}
               {this.state.c3 ? (<p className="course-name">Applied Cybersecurity I</p>) : (<div/>)}
               {this.state.c3 ? (<p className="course-desc">Prepares students for team research that will be conducted in HACS 200. Students gain an understanding across the breadth of cybersecurity including system monitoring, networking basics and penetration testing. An applied approach to statistics is also included to prepare students to assess the data collected for their research projects. The course is conducted with a hands-on approach applying virtual environments to practice the concepts learned in the technical lectures each week.</p>) : (<div/>)}
               {this.state.c4 ? (<p className="course-name">Economic Aspects of Cybersecurity</p>) : (<div/>)}
               {this.state.c4 ? (<p className="course-desc">This is an interdisciplinary Honors Seminar offered as part of UMD's ACES program. The primary objective of this course is to discuss the relationships among accounting, economics and cybersecurity, with a focus on the important roles of accounting and economics in understanding the issues related to cybersecurity. A basic framework for assessing the interactions among accounting, economics, and cybersecurity will be developed and discussed. A secondary objective of the course is to assist ACES students in developing their ability to conduct original and applied research on topics related to "accounting and economic aspects of cybersecurity."</p>) : (<div/>)}
            </div>
         </div>
       );
   }
}

export default Coursework2;