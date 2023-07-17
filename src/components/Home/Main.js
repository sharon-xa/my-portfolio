import React from "react";
import classes from "./Main.module.css";
import GithubProfileImage from "./GithubProfileImage";
import InfoCard from "../UI/InfoCard";
import Skills from "./Skills/Skills";

const Main = () => {
   return (
      <main className={classes["home-layout"]}>
         <section className={classes.section}>
            <GithubProfileImage />

            <InfoCard commandUsed="cat" path="/etc/motd">
               <div className={classes.padding}>
                  <p className={classes.welcome}>
                     Hey, welcome to my portfolio !
                  </p>
                  <p>
                     My name is Ali Jabar, I'm a front-end web developer a
                     computer science student, almost a graduate.
                  </p>
               </div>
            </InfoCard>

            <InfoCard commandUsed="tree" path="/home/ali/skills">
               <div className={classes.padding}>
                  <Skills />
               </div>
            </InfoCard>

            <InfoCard commandUsed="exit" path=""></InfoCard>
         </section>
      </main>
   );
};

export default Main;
