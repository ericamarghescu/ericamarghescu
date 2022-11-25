import '../styles/About.css';
import headshot from '../../images/headshot.jpg';
import arrow from '../../images/arrow.png';

function About() {
  return (
    <div id="About" className="about">
      <div className="about-left">
         <img src={headshot} className="headshot"/>
      </div>
      <div className="about-right">
         <div className="about-title">
            <p className="about-num">01</p>
            <p className="about-title-text">About Me</p>
            <div className="about-line-box">
               <div className="about-line"/>
            </div>
         </div>
         <p className="about-text">Hi! My name is Erica Marghescu and I am a student at the University of Maryland passionate about math, computer science, and problem solving. I have experience with front-end development, UI design, as well as back-end programming. I hope to use my skills to make a difference and love using technology to shape the world around me.</p>
         <p className="about-text">Outside of academics, I have a variety of interests and hobbies I like to pursue, including web development, skiing, weightlifting, learning French, and teaching.</p>
         <p className="skills-title">Languages and Technologies</p>
         <div className="langs-box">
            <div className="langs-split">
               <div className="lang-box">
                  <img src={arrow} className="lang-logo"/>
                  <p className="lang-text">Java</p>
               </div>
               <div className="lang-box">
                  <img src={arrow} className="lang-logo"/>
                  <p className="lang-text">JavaScript</p>
               </div>
               <div className="lang-box">
                  <img src={arrow} className="lang-logo"/>
                  <p className="lang-text">HTML</p>
               </div>
               <div className="lang-box">
                  <img src={arrow} className="lang-logo"/>
                  <p className="lang-text">CSS</p>
               </div>
            </div>
            <div className="langs-split">
               <div className="lang-box">
                  <img src={arrow} className="lang-logo"/>
                  <p className="lang-text">C</p>
               </div>
               <div className="lang-box">
                  <img src={arrow} className="lang-logo"/>
                  <p className="lang-text">Ruby</p>
               </div>
               <div className="lang-box">
                  <img src={arrow} className="lang-logo"/>
                  <p className="lang-text">OCaml</p>
               </div>
               <div className="lang-box">
                  <img src={arrow} className="lang-logo"/>
                  <p className="lang-text">Python</p>
               </div>
            </div>
            <div className="langs-split">
                  <div className="lang-box">
                     <img src={arrow} className="lang-logo"/>
                     <p className="lang-text">R</p>
                  </div>
                  <div className="lang-box">
                     <img src={arrow} className="lang-logo"/>
                     <p className="lang-text">MATLAB</p>
                  </div>
                  <div className="lang-box">
                     <img src={arrow} className="lang-logo"/>
                     <p className="lang-text">React</p>
                  </div>
                  <div className="lang-box">
                     <img src={arrow} className="lang-logo"/>
                     <p className="lang-text">Shell</p>
                  </div>
               </div>
         </div>
      </div>
    </div>
  );
}

export default About;