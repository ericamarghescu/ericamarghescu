import './Coursework5.css';
import React from 'react';

class Coursework5 extends React.Component {
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
         <div className="coursework5">
            <div className="coursework5-left">
               <div className="coursework5-course-box">
                     <button className={this.state.c1 ? "coursework5-course-clicked" : "coursework5-course"} onClick={this.handleClick_c1}>CMSC426</button>
                     {this.state.c1 ? (<div className="coursework5-line-box"><div className="coursework5-line"/></div>) : (<div/>)}
                  </div>
                  <div className="coursework5-course-box">
                     <button className={this.state.c2 ? "coursework5-course-clicked" : "coursework5-course"} onClick={this.handleClick_c2}>HACS498</button>
                     {this.state.c2 ? (<div className="coursework5-line-box"><div className="coursework5-line"/></div>) : (<div/>)}
                  </div>
                  <div className="coursework5-course-box">
                     <button className={this.state.c3 ? "coursework5-course-clicked" : "coursework5-course"} onClick={this.handleClick_c3}>HACS408O</button>
                     {this.state.c3 ? (<div className="coursework5-line-box"><div className="coursework5-line"/></div>) : (<div/>)}
                  </div>
                  <div className="coursework5-course-box">
                     <button className={this.state.c4 ? "coursework5-course-clicked" : "coursework5-course"} onClick={this.handleClick_c4}>CMSC320</button>
                     {this.state.c4 ? (<div className="coursework5-line-box"><div className="coursework5-line"/></div>) : (<div/>)}
                  </div>
                  <div className="coursework5-course-box">
                     <button className={this.state.c5 ? "coursework5-course-clicked" : "coursework5-course"} onClick={this.handleClick_c5}>FREN250</button>
                     {this.state.c5 ? (<div className="coursework5-line-box"><div className="coursework5-line"/></div>) : (<div/>)}
                  </div>
            </div>
            <div className="coursework5-right">
               {this.state.c1 ? (<p className="coursework5-course-name">Computer Vision</p>) : (<div/>)}
               {this.state.c1 ? (<p className="coursework5-course-desc">An introduction to basic concepts and techniques in computervision. This includes low-level operations such as image filtering and edge detection, 3D reconstruction of scenes using stereo and structure from motion, and object detection, recognition and classification.</p>) : (<div/>)}
               {this.state.c2 ? (<p className="coursework5-course-name">Cybersecurity Group Problem Solving</p>) : (<div/>)}
               {this.state.c2 ? (<p className="coursework5-course-desc">Students team up to solve a cybersecurity-related project throughout the semester-long course.</p>) : (<div/>)}
               {this.state.c3 ? (<p className="coursework5-course-name">IoT Security</p>) : (<div/>)}
               {this.state.c3 ? (<p className="coursework5-course-desc">This course will expose students to topics in Internet of Things (IoT) and Cyber Physical System (CPS) device types, IoT/CPS threat categories, security services, distributed networking, activity privacy, and intrusion detection for embedded environments. In addition to individual homework assignments, students will participate in a semester long group project involving research, design, and implementation.</p>) : (<div/>)}
               {this.state.c4 ? (<p className="coursework5-course-name">Data Science</p>) : (<div/>)}
               {this.state.c4 ? (<p className="coursework5-course-desc">An introduction to the data science pipeline, i.e., the end-to-end process of going from unstructured, messy data to knowledge and actionable insights. Provides a broad overview of several topics including statistical data analysis, basic data mining and machine learning algorithms, large-scale data management, cloud computing, and information visualization.</p>) : (<div/>)}
               {this.state.c5 ? (<p className="coursework5-course-name">French Literature and Composition</p>) : (<div/>)}
               {this.state.c5 ? (<p className="coursework5-course-desc">Introduction to cultural and textual analysis of selected readings from various genres in French literature. Taught in French.</p>) : (<div/>)}
            </div>
         </div>
       );
   }
}

export default Coursework5;