import '../styles/AboutMobile.css';
import headshot from '../../images/headshot.jpg';
import arrow from '../../images/arrow.png';

function AboutMobile() {
  return (
    <div id="AboutMobile" className="about-mobile">
      <div className="about-box-mobile">
         <div className="about-title-mobile">
            <p className="about-num-mobile">01</p>
            <p className="about-title-text-mobile">About Me</p>
            <div className="about-line-box-mobile">
               <div className="about-line-mobile"/>
            </div>
         </div>
         <div className="headshot-box-mobile">
            <img src={headshot} className="headshot-mobile"/>
         </div>
         <p className="about-text-mobile">Hi! My name is Erica Marghescu and I am a student at the University of Maryland passionate about math, computer science, and problem solving. I have experience with front-end development, UI design, as well as back-end programming. I hope to use my skills to make a difference and love using technology to shape the world around me.</p>
         <p className="about-text-mobile">Outside of academics, I have a variety of interests and hobbies I like to pursue, including web development, skiing, weightlifting, learning French, and teaching.</p>
         <p className="skills-title-mobile">Languages and Technologies</p>
         <div className="langs-box-mobile">
            <div className="langs-split-mobile">
               <div className="lang-box-mobile">
                  <img src={arrow} className="lang-logo-mobile"/>
                  <p className="lang-text-mobile">Java</p>
               </div>
               <div className="lang-box-mobile">
                  <img src={arrow} className="lang-logo-mobile"/>
                  <p className="lang-text-mobile">JavaScript</p>
               </div>
               <div className="lang-box-mobile">
                  <img src={arrow} className="lang-logo-mobile"/>
                  <p className="lang-text-mobile">HTML</p>
               </div>
               <div className="lang-box-mobile">
                  <img src={arrow} className="lang-logo-mobile"/>
                  <p className="lang-text-mobile">CSS</p>
               </div>
            </div>
            <div className="langs-split-mobile">
               <div className="lang-box-mobile">
                  <img src={arrow} className="lang-logo-mobile"/>
                  <p className="lang-text-mobile">C</p>
               </div>
               <div className="lang-box-mobile">
                  <img src={arrow} className="lang-logo-mobile"/>
                  <p className="lang-text-mobile">Ruby</p>
               </div>
               <div className="lang-box-mobile">
                  <img src={arrow} className="lang-logo-mobile"/>
                  <p className="lang-text-mobile">OCaml</p>
               </div>
               <div className="lang-box-mobile">
                  <img src={arrow} className="lang-logo-mobile"/>
                  <p className="lang-text-mobile">Python</p>
               </div>
            </div>
            <div className="langs-split-mobile">
               <div className="lang-box-mobile">
                  <img src={arrow} className="lang-logo-mobile"/>
                  <p className="lang-text-mobile">R</p>
               </div>
               <div className="lang-box-mobile">
                  <img src={arrow} className="lang-logo-mobile"/>
                  <p className="lang-text-mobile">Matlab</p>
               </div>
               <div className="lang-box-mobile">
                  <img src={arrow} className="lang-logo-mobile"/>
                  <p className="lang-text-mobile">React</p>
               </div>
               <div className="lang-box-mobile">
                  <img src={arrow} className="lang-logo-mobile"/>
                  <p className="lang-text-mobile">Shell</p>
               </div>
            </div> 
         </div>
      </div>
    </div>
  );
}

export default AboutMobile;