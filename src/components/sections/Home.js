import '../styles/Home.css';

function Home({ desktop }) {
   return (
     <div id="Home" className={desktop ? "home" : "home-mobile"}>
         <div className={desktop ? "home-intro" : "home-intro-mobile"}>
            <p className={desktop ? "intro-text" : "intro-text-mobile"}>Hello! My name is</p>
            <p className={desktop ? "name-text" : "name-text-mobile"}>Erica Marghescu.</p>
            <p className={desktop ? "desc-text" : "desc-text-mobile"}>I study CS and Cybersecurity at UMD.</p>
            <div className={desktop ? "short-intro-box" : "short-intro-box-mobile"}>
               <p className={desktop ? "short-intro-text" : "short-intro-text-mobile"}>I'm a third-year student within the UMD Honors College. I've recently completed a 2-year cybersecurity honors program and am now working in leadership roles within Hack4Impact-UMD. I am passionate about using technology to make a difference and improving diversity in STEM.</p>
            </div>
         </div>
     </div>
   );
 } 
 
 export default Home;