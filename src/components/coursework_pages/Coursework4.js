import './Coursework4.css';
import React from 'react';

class Coursework4 extends React.Component {
   constructor() {
      super();
      this.state = {
         c1: true,
         c2: false,
         c3: false,
         c4: false,
         c5: false,
         c6: false
      };
      this.handleClick_c1 = this.handleClick_c1.bind(this);
      this.handleClick_c2 = this.handleClick_c2.bind(this);
      this.handleClick_c3 = this.handleClick_c3.bind(this);
      this.handleClick_c4 = this.handleClick_c4.bind(this);
      this.handleClick_c5 = this.handleClick_c5.bind(this);
      this.handleClick_c6 = this.handleClick_c6.bind(this);
   }

   handleClick_c1(e) {
      e.preventDefault();
      this.setState({ c1: true,
                      c2: false,
                      c3: false,
                      c4: false,
                      c5: false,
                      c6: false});
   }

   handleClick_c2(e) {
      e.preventDefault();
      this.setState({ c1: false,
         c2: true,
         c3: false,
         c4: false,
         c5: false,
         c6: false});
   }

   handleClick_c3(e) {
      e.preventDefault();
      this.setState({ c1: false,
         c2: false,
         c3: true,
         c4: false,
         c5: false,
         c6: false});
   }

   handleClick_c4(e) {
      e.preventDefault();
      this.setState({ c1: false,
         c2: false,
         c3: false,
         c4: true,
         c5: false,
         c6: false});
   }

   handleClick_c5(e) {
      e.preventDefault();
      this.setState({ c1: false,
         c2: false,
         c3: false,
         c4: false,
         c5: true,
         c6: false});
   }

   handleClick_c6(e) {
      e.preventDefault();
      this.setState({ c1: false,
         c2: false,
         c3: false,
         c4: false,
         c5: false,
         c6: true});
   }

   render() {
      return (
         <div className="coursework4">
            <div className="coursework4-left">
               <div className="coursework4-course-box">
                     <button className={this.state.c1 ? "coursework4-course-clicked" : "coursework4-course"} onClick={this.handleClick_c1}>CMSC330</button>
                     {this.state.c1 ? (<div className="coursework4-line-box"><div className="coursework4-line"/></div>) : (<div/>)}
                  </div>
                  <div className="coursework4-course-box">
                     <button className={this.state.c2 ? "coursework4-course-clicked" : "coursework4-course"} onClick={this.handleClick_c2}>CMSC351</button>
                     {this.state.c2 ? (<div className="coursework4-line-box"><div className="coursework4-line"/></div>) : (<div/>)}
                  </div>
                  <div className="coursework4-course-box">
                     <button className={this.state.c3 ? "coursework4-course-clicked" : "coursework4-course"} onClick={this.handleClick_c3}>FREN204</button>
                     {this.state.c3 ? (<div className="coursework4-line-box"><div className="coursework4-line"/></div>) : (<div/>)}
                  </div>
                  <div className="coursework4-course-box">
                     <button className={this.state.c4 ? "coursework4-course-clicked" : "coursework4-course"} onClick={this.handleClick_c4}>HACS408V</button>
                     {this.state.c4 ? (<div className="coursework4-line-box"><div className="coursework4-line"/></div>) : (<div/>)}
                  </div>
                  <div className="coursework4-course-box">
                     <button className={this.state.c5 ? "coursework4-course-clicked" : "coursework4-course"} onClick={this.handleClick_c5}>MATH206</button>
                     {this.state.c5 ? (<div className="coursework4-line-box"><div className="coursework4-line"/></div>) : (<div/>)}
                  </div>
                  <div className="coursework4-course-box">
                     <button className={this.state.c6 ? "coursework4-course-clicked" : "coursework4-course"} onClick={this.handleClick_c6}>NFSC100</button>
                     {this.state.c6 ? (<div className="coursework4-line-box"><div className="coursework4-line"/></div>) : (<div/>)}
                  </div>
            </div>
            <div className="coursework4-right">
               {this.state.c1 ? (<p className="course-name">Organization of Programming Languages</p>) : (<div/>)}
               {this.state.c1 ? (<p className="course-desc">A study of programming languages, including their syntax, semantics, and implementation. Several different models of languages are discussed, including dynamic, scripting (e.g., Ruby, Python) functional (e.g., OCaml, Haskell, Scheme), and memory safe systems programming (e.g., Rust). Explores language features such as formal syntax, scoping and binding of variables, higher-order programming, typing, and type polymorphism. Introduces finite automata, context free grammar, parsing, lambda calculus, and basics of security attacks and software security.</p>) : (<div/>)}
               {this.state.c2 ? (<p className="course-name">Algorithms</p>) : (<div/>)}
               {this.state.c2 ? (<p className="course-desc">A systematic study of the complexity of some elementary algorithms related to sorting, graphs and trees, and combinatorics. Algorithms are analyzed using mathematical techniques to solve recurrences and summations.</p>) : (<div/>)}
               {this.state.c3 ? (<p className="course-name">French Grammar and Composition</p>) : (<div/>)}
               {this.state.c3 ? (<p className="course-desc">Intensive study of French grammar and composition.</p>) : (<div/>)}
               {this.state.c4 ? (<p className="course-name">Cybersecurity Data Analysis</p>) : (<div/>)}
               {this.state.c4 ? (<p className="course-desc">Focuses on exploratory and statistical data analysis, data and information visualization, and the presentation and communication of analysis results. These topics will be presented and explored in the context of and with applications to cyber security related data. Examples and illustrations will often involve the R programming language, but prior experience with R is not required and submitted work may involve the use of other languages and tools at times.</p>) : (<div/>)}
               {this.state.c5 ? (<p className="course-name">Introduction to Matlab</p>) : (<div/>)}
               {this.state.c5 ? (<p className="course-desc">This course is intended to prepare students for subsequent courses requiring computation with MATLAB. Covers basics of MATLAB including simple commands, variables, solving equations, graphing differentiation and integration, matrices and vectors, functions, M-files and fundamentals of programming in the MATLAB environment.</p>) : (<div/>)}
               {this.state.c6 ? (<p className="course-name">Elements of Nutrition</p>) : (<div/>)}
               {this.state.c6 ? (<p className="course-desc">Fundamentals of human nutrition. Nutrient requirements related to changing individual and family needs.</p>) : (<div/>)}
            </div>
         </div>
       );
   }
}

export default Coursework4;