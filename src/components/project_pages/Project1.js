import './Project-Page-Right.css';
import './Project1.css';
import GitHubIcon from '../../icons/github';

function Project1() {
   return (
     <div className="project-page">
         <div className="p1-project-img-container"/>
         <div className="p1-project-desc-box">
            <div className="project-title-box">
               <p className="project-category">Personal Project</p>
               <p className="project-title">Word Generator for Wordle</p>
            </div>
            <div className="project-desc">
               <p className="project-desc-text">A web app I built with a back-end servlet that accepts Wordle criteria (i.e. which letters are green or yellow) from the user and generates a list of possible words.</p>
            </div>
            <div className="project-tools-box">
               <div className="project-tools">
                  <p className="project-tool">Java</p>
                  <p className="project-tool">Jakarta EE</p>
                  <p className="project-tool">Glassfish 5</p>
                  <p className="project-tool">HTML</p>
                  <p className="project-tool">CSS</p>
               </div>
            </div>
            <div className="project-link-box">
               <a href="https://github.com/ericamarghescu/wordlesolver">
                  <GitHubIcon/>
               </a>
            </div>
         </div>
     </div>
   );
 }
 
 export default Project1;