import '../styles/SocialMobile.css';
import GitHubIcon from '../../icons/github';
import InstagramIcon from '../../icons/instagram';
import TwitterIcon from '../../icons/twitter';
import LinkedinIcon from '../../icons/linkedin';
import EmailIcon from '../../icons/email';

function SocialMobile() {
   return (
     <div id="SocialMobile" className="socials-mobile">
         <div className="social-icons-mobile">
            <a href="https://github.com/ericamarghescu" className="social-icon-mobile">
               <GitHubIcon/>
            </a>
            <a href="https://www.instagram.com/erica.m">
               <InstagramIcon/>
            </a>
            <a href="https://www.twitter.com/ericamarghescu">
               <TwitterIcon/>
            </a>
            <a href="https://www.linkedin.com/in/ericamarghescu">
               <LinkedinIcon/>
            </a>
            <a href="mailto: erica.marghescu@gmail.com">
               <EmailIcon/>
            </a>
         </div>
     </div>
   );
 }
 
 export default SocialMobile;