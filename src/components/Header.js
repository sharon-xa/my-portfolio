import React from "react";
import classes from "./Header.module.css";

const Header = () => {
   return (
      <nav className={classes["nav-container"]}>
         <nav className={classes["floating-nav"]}>
            <a href="#" className={classes.active}>
               Home
            </a>
            <a href="#"> Projects </a>
            <a href="#"> About Me </a>
         </nav>
      </nav>
   );
};

export default Header;
