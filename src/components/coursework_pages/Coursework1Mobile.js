import './Coursework1Mobile.css';
import React from 'react';

class Coursework1Mobile extends React.Component {
   constructor() {
      super();
      this.state = {
         c1: true,
         c2: false,
         c3: false, 
         c4: false,
         c5: false
      };
      this.handleClick_c1 = this.handleClick_c1.bind(this);
      this.handleClick_c2 = this.handleClick_c2.bind(this);
      this.handleClick_c3 = this.handleClick_c3.bind(this);
      this.handleClick_c4 = this.handleClick_c4.bind(this);
      this.handleClick_c5 = this.handleClick_c5.bind(this);
   }

   handleClick_c1(e) {
      e.preventDefault();
      this.setState({ c1: true,
                      c2: false,
                      c3: false,
                      c4: false,
                      c5: false});
   }

   handleClick_c2(e) {
      e.preventDefault();
      this.setState({ c1: false,
         c2: true,
         c3: false,
         c4: false,
         c5: false});
   }

   handleClick_c3(e) {
      e.preventDefault();
      this.setState({ c1: false,
         c2: false,
         c3: true,
         c4: false,
         c5: false});
   }

   handleClick_c4(e) {
      e.preventDefault();
      this.setState({ c1: false,
         c2: false,
         c3: false,
         c4: true,
         c5: false});
   }

   handleClick_c5(e) {
      e.preventDefault();
      this.setState({ c1: false,
         c2: false,
         c3: false,
         c4: false,
         c5: true});
   }

   render() {
      return (
         <div className="coursework1-mobile">
            <div className="coursework1-top-mobile">
               <div className="coursework1-course-box-mobile">
                  <button className={this.state.c1 ? "coursework1-course-clicked-mobile" : "coursework1-course-mobile"} onClick={this.handleClick_c1}>CMSC132</button>
                  {this.state.c1 ? (<div className="coursework1-line-box-mobile"><div className="coursework1-line-mobile"/></div>) : (<div className="coursework1-line-box-mobile"/>)}
               </div>
               <div className="coursework1-course-box-mobile">
                  <button className={this.state.c2 ? "coursework1-course-clicked-mobile" : "coursework1-course-mobile"} onClick={this.handleClick_c2}>HACS100</button>
                  {this.state.c2 ? (<div className="coursework1-line-box-mobile"><div className="coursework1-line-mobile"/></div>) : (<div className="coursework1-line-box-mobile"/>)}
               </div>
               <div className="coursework1-course-box-mobile">
                  <button className={this.state.c3 ? "coursework1-course-clicked-mobile" : "coursework1-course-mobile"} onClick={this.handleClick_c3}>HACS208P</button>
                  {this.state.c3 ? (<div className="coursework1-line-box-mobile"><div className="coursework1-line-mobile"/></div>) : (<div className="coursework1-line-box-mobile"/>)}
               </div>
               <div className="coursework1-course-box-mobile">
                  <button className={this.state.c4 ? "coursework1-course-clicked-mobile" : "coursework1-course-mobile"} onClick={this.handleClick_c4}>INAG110</button>
                  {this.state.c4 ? (<div className="coursework1-line-box-mobile"><div className="coursework1-line-mobile"/></div>) : (<div className="coursework1-line-box-mobile"/>)}
               </div>
               <div className="coursework1-course-box-mobile">
                  <button className={this.state.c5 ? "coursework1-course-clicked-mobile" : "coursework1-course-mobile"} onClick={this.handleClick_c5}>SOCY100</button>
                  {this.state.c5 ? (<div className="coursework1-line-box-mobile"><div className="coursework1-line-mobile"/></div>) : (<div className="coursework1-line-box-mobile"/>)}
               </div>
            </div> 
            <div className="coursework1-bottom-mobile">
               {this.state.c1 ? (<p className="coursework1-course-name-mobile">Object-Oriented Programming II</p>) : (<div/>)}
               {this.state.c1 ? (<p className="coursework1-course-desc-mobile">Introduction to use of computers to solve problems using software engineering principles. Design, build, test, and debug medium -size software systems and learn to use relevant tools. Use object-oriented methods to create effective and efficient problem solutions. Use and implement application programming interfaces (APIs).</p>) : (<div/>)}
               {this.state.c2 ? (<p className="coursework1-course-name-mobile">Foundations of Cybersecurity</p>) : (<div/>)}
               {this.state.c2 ? (<p className="coursework1-course-desc-mobile">Interdisciplinary foundational course of the ACES program. Through lectures, lab activities, and discussions, students will learn and practice various aspects of cybersecurity. Weekly technical lectures will introduce students to the operating system UNIX. Students will partner with the Division of Information Technology in a project to engage the University of Maryland community in a cyber-hygiene and cyber-ethics campaign based on the concepts learned in class.</p>) : (<div/>)}
               {this.state.c3 ? (<p className="coursework1-course-name-mobile">Policy Implications of Cyberspace</p>) : (<div/>)}
               {this.state.c3 ? (<p className="coursework1-course-desc-mobile">Explores the key issues facing policy makers attempting to manage the problem of cybersecurity from its technical foundations to the domestic and international policy considerations surrounding governance, response, and critical infrastructure risk management. The course is designed for students with little to no background in information technology, and will provide the principles to understand the current debates shaping a rapidly evolving security landscape.</p>) : (<div/>)}
               {this.state.c4 ? (<p className="coursework1-course-name-mobile">Oral Communication</p>) : (<div/>)}
               {this.state.c4 ? (<p className="coursework1-course-desc-mobile">A study of how perception, self-concept, and verbal and nonverbal communications affect the communication process as it emerges in the workplace. The course provides skill training in speech writing, public speaking, group communication, interpersonal communication, listening, and responding.</p>) : (<div/>)}
               {this.state.c5 ? (<p className="coursework1-course-name-mobile">Introduction to Sociology</p>) : (<div/>)}
               {this.state.c5 ? (<p className="coursework1-course-desc-mobile">The fundamental concepts and principles of sociology. Includes consideration of culture, patterns of social interaction, norms, values, social institutions, stratification, and social change.</p>) : (<div/>)}
            </div>
         </div>
       );
   }
}

export default Coursework1Mobile;