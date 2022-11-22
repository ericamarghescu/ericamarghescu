import '../styles/Social.css';
import GitHubIcon from '../../icons/github';
import InstagramIcon from '../../icons/instagram';
import TwitterIcon from '../../icons/twitter';
import LinkedinIcon from '../../icons/linkedin';
import EmailIcon from '../../icons/email';

function Social() {
   return (
     <div className="socials">
         <div className="social-icons">
            <GitHubIcon/>
            <InstagramIcon/>
            <TwitterIcon/>
            <LinkedinIcon/>
            <EmailIcon/>
         </div>
         <div className="social-line">
            <div className="line"/>
         </div>
     </div>
   );
 }
 
 export default Social;