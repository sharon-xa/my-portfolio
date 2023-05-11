import React from "react";
import classes from "./Main.module.css";
import GithubProfileImage from "./GithubProfileImage";
import InfoCard from "./InfoCard";

const Main = () => {
   return (
      <main className={classes.main}>
         <GithubProfileImage />
         <div className={classes["cards-container"]}>
            <InfoCard />
         </div>
      </main>
   );
};

export default Main;
