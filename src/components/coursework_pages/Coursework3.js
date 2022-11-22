import './Coursework3.css';
import React from 'react';

class Coursework3 extends React.Component {
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
         <div className="coursework3">
            <div className="coursework3-left">
               <div className="coursework3-course-box">
                     <button className={this.state.c1 ? "coursework3-course-clicked" : "coursework3-course"} onClick={this.handleClick_c1}>BIOM301</button>
                     {this.state.c1 ? (<div className="coursework3-line-box"><div className="coursework3-line"/></div>) : (<div/>)}
                  </div>
                  <div className="coursework3-course-box">
                     <button className={this.state.c2 ? "coursework3-course-clicked" : "coursework3-course"} onClick={this.handleClick_c2}>CMSC216</button>
                     {this.state.c2 ? (<div className="coursework3-line-box"><div className="coursework3-line"/></div>) : (<div/>)}
                  </div>
                  <div className="coursework3-course-box">
                     <button className={this.state.c3 ? "coursework3-course-clicked" : "coursework3-course"} onClick={this.handleClick_c3}>HACS200</button>
                     {this.state.c3 ? (<div className="coursework3-line-box"><div className="coursework3-line"/></div>) : (<div/>)}
                  </div>
                  <div className="coursework3-course-box">
                     <button className={this.state.c4 ? "coursework3-course-clicked" : "coursework3-course"} onClick={this.handleClick_c4}>MATH240</button>
                     {this.state.c4 ? (<div className="coursework3-line-box"><div className="coursework3-line"/></div>) : (<div/>)}
                  </div>
                  <div className="coursework3-course-box">
                     <button className={this.state.c5 ? "coursework3-course-clicked" : "coursework3-course"} onClick={this.handleClick_c5}>STAT400</button>
                     {this.state.c5 ? (<div className="coursework3-line-box"><div className="coursework3-line"/></div>) : (<div/>)}
                  </div>
            </div>
            <div className="coursework3-right">
               {this.state.c1 ? (<p className="course-name">Introduction to Biometrics</p>) : (<div/>)}
               {this.state.c1 ? (<p className="course-desc">Descriptive statistics, introduction to probability, sampling, confidence interval estimation, hypothesis testing, simple regression and correlation. Emphasis on simple applications of statistical techniques and interpretation of statistical results.</p>) : (<div/>)}
               {this.state.c2 ? (<p className="course-name">Introduction to Computer Systems</p>) : (<div/>)}
               {this.state.c2 ? (<p className="course-desc">Introduction to the interaction between user programs and the operating system/hardware. Major topics include C programming, introductory systems programming, and assembly language. Other concepts covered include UNIX, machine data representation, thread management, optimization, and virtual memory. Programming is done in the Linux Environment.</p>) : (<div/>)}
               {this.state.c3 ? (<p className="course-name">Applied Cybersecurity II</p>) : (<div/>)}
               {this.state.c3 ? (<p className="course-desc">Students will apply the skills learned in HACS 100 and 101 to practice cybersecurity research through team led projects employing honeypots, carrying that project through all stages - proposal, implementation, and analysis. Weekly lectures will supplement project work by addressing trends observed in honeypot attacks and protections needed, along with data collection and analysis tools, and other foundational cybersecurity concepts.</p>) : (<div/>)}
               {this.state.c4 ? (<p className="course-name">Linear Algebra</p>) : (<div/>)}
               {this.state.c4 ? (<p className="course-desc">Basic concepts of linear algebra: vector spaces, applications to line and plane geometry, linear equations and matrices, similar matrices, linear transformations, eigenvalues, determinants and quadratic forms.</p>) : (<div/>)}
               {this.state.c5 ? (<p className="course-name">Applied Probability and Statistics</p>) : (<div/>)}
               {this.state.c5 ? (<p className="course-desc">Random variables, standard distributions, moments, law of large numbers and central limit theorem. Sampling methods, estimation of parameters, testing of hypotheses.</p>) : (<div/>)}
            </div>
         </div>
       );
   }
}

export default Coursework3;