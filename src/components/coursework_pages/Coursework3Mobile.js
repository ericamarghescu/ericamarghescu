import './Coursework3Mobile.css';
import React from 'react';

class Coursework3Mobile extends React.Component {
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
         <div className="coursework3-mobile">
            <div className="coursework3-top-mobile">
               <div className="coursework3-course-box-mobile">
                  <button className={this.state.c1 ? "coursework3-course-clicked-mobile" : "coursework3-course-mobile"} onClick={this.handleClick_c1}>BIOM301</button>
                  {this.state.c1 ? (<div className="coursework3-line-box-mobile"><div className="coursework3-line-mobile"/></div>) : (<div className="coursework3-line-box-mobile"/>)}
               </div>
               <div className="coursework3-course-box-mobile">
                  <button className={this.state.c2 ? "coursework3-course-clicked-mobile" : "coursework3-course-mobile"} onClick={this.handleClick_c2}>CMSC216</button>
                  {this.state.c2 ? (<div className="coursework3-line-box-mobile"><div className="coursework3-line-mobile"/></div>) : (<div className="coursework3-line-box-mobile"/>)}
               </div>
               <div className="coursework3-course-box-mobile">
                  <button className={this.state.c3 ? "coursework3-course-clicked-mobile" : "coursework3-course-mobile"} onClick={this.handleClick_c3}>HACS200</button>
                  {this.state.c3 ? (<div className="coursework3-line-box-mobile"><div className="coursework3-line-mobile"/></div>) : (<div className="coursework3-line-box-mobile"/>)}
               </div>
               <div className="coursework3-course-box-mobile">
                  <button className={this.state.c4 ? "coursework3-course-clicked-mobile" : "coursework3-course-mobile"} onClick={this.handleClick_c4}>MATH240</button>
                  {this.state.c4 ? (<div className="coursework3-line-box-mobile"><div className="coursework3-line-mobile"/></div>) : (<div className="coursework3-line-box-mobile"/>)}
               </div>
               <div className="coursework3-course-box-mobile">
                  <button className={this.state.c5 ? "coursework3-course-clicked-mobile" : "coursework3-course-mobile"} onClick={this.handleClick_c5}>STAT400</button>
                  {this.state.c5 ? (<div className="coursework3-line-box-mobile"><div className="coursework3-line-mobile"/></div>) : (<div className="coursework3-line-box-mobile"/>)}
               </div>
            </div>
            <div className="coursework3-bottom-mobile">
               {this.state.c1 ? (<p className="coursework3-course-name-mobile">Introduction to Biometrics</p>) : (<div/>)}
               {this.state.c1 ? (<p className="coursework3-course-desc-mobile">Descriptive statistics, introduction to probability, sampling, confidence interval estimation, hypothesis testing, simple regression and correlation. Emphasis on simple applications of statistical techniques and interpretation of statistical results.</p>) : (<div/>)}
               {this.state.c2 ? (<p className="coursework3-course-name-mobile">Introduction to Computer Systems</p>) : (<div/>)}
               {this.state.c2 ? (<p className="coursework3-course-desc-mobile">Introduction to the interaction between user programs and the operating system/hardware. Major topics include C programming, introductory systems programming, and assembly language. Other concepts covered include UNIX, machine data representation, thread management, optimization, and virtual memory. Programming is done in the Linux Environment.</p>) : (<div/>)}
               {this.state.c3 ? (<p className="coursework3-course-name-mobile">Applied Cybersecurity II</p>) : (<div/>)}
               {this.state.c3 ? (<p className="coursework3-course-desc-mobile">Students will apply the skills learned in HACS 100 and 101 to practice cybersecurity research through team led projects employing honeypots, carrying that project through all stages - proposal, implementation, and analysis. Weekly lectures will supplement project work by addressing trends observed in honeypot attacks and protections needed, along with data collection and analysis tools, and other foundational cybersecurity concepts.</p>) : (<div/>)}
               {this.state.c4 ? (<p className="coursework3-course-name-mobile">Linear Algebra</p>) : (<div/>)}
               {this.state.c4 ? (<p className="coursework3-course-desc-mobile">Basic concepts of linear algebra: vector spaces, applications to line and plane geometry, linear equations and matrices, similar matrices, linear transformations, eigenvalues, determinants and quadratic forms.</p>) : (<div/>)}
               {this.state.c5 ? (<p className="coursework3-course-name-mobile">Applied Probability and Statistics</p>) : (<div/>)}
               {this.state.c5 ? (<p className="coursework3-course-desc-mobile">Random variables, standard distributions, moments, law of large numbers and central limit theorem. Sampling methods, estimation of parameters, testing of hypotheses.</p>) : (<div/>)}
            </div>
         </div>
       );
   }
}

export default Coursework3Mobile;