/*
Footer
    1. I need a licence 
        🄯 Website code under (AGPL-3.0-only or another licence)· Website content under (CC-BY-SA-4.0 or another licence)

    2. Some info about the website
        Website powered by React · Hosted on Firebase 

    3. Some kind of button to toggle the dark mode and the glow mode
*/

import classes from "./Footer.module.css";

const Footer = () => {
   return (
      <footer className={classes.container}>
         <div className={classes.footer}>
            <p>
               🄯 Website code under (AGPL-3.0-only or another licence)· Website
               content under (CC-BY-SA-4.0 or another licence)
            </p>
            <p>Website powered by React · Hosted on Firebase</p>
            <label class={classes.switch}>
               <input type="checkbox" />
               <span class={`${classes.slider} ${classes.round}`}></span>
            </label>
         </div>
      </footer>
   );
};

export default Footer;
