import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import classes from "./NavigationBar.module.css";

const NavigationBar = () => {
   const [fixed, setFixed] = useState(false);

   window.addEventListener("scroll", (e) => {
      if (window.scrollY >= 100) {
         setFixed(true);
      } else {
         setFixed(false);
      }
   });

   return (
      <nav className={classes.navContainer}>
         <nav
            className={`${classes.floatingNav} ${
               fixed ? classes.transition : classes.transitionBack
            }`}
         >
            <NavLink
               to="/"
               className={({ isActive }) =>
                  isActive ? classes.active : undefined
               }
               end
            >
               Home
            </NavLink>
            <NavLink
               to="projects"
               className={({ isActive }) =>
                  isActive ? classes.active : undefined
               }
               end
            >
               Projects
            </NavLink>
            <NavLink
               to="about-me"
               className={({ isActive }) =>
                  isActive ? classes.active : undefined
               }
               end
            >
               About Me
            </NavLink>
         </nav>
      </nav>
   );
};

export default NavigationBar;
