import { NavLink } from "react-router-dom";
import React from "react";
import classes from "./NavigationBar.module.css";

const NavigationBar = () => {
   return (
      <nav className={classes["nav-container"]}>
         <nav className={classes["floating-nav"]}>
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
               to="/projects"
               className={({ isActive }) =>
                  isActive ? classes.active : undefined
               }
               end
            >
               Projects
            </NavLink>
            <NavLink
               to="/about-me"
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
