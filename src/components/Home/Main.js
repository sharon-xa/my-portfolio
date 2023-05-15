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
               <p>
                  <span className={classes.welcome}>
                     Hey, welcome to my portfolio !
                  </span>
                  <br /> My name is Ali Jabar, I'm a front-end web developer a
                  computer science student, almost a graduate.
               </p>
            </InfoCard>

            <InfoCard commandUsed="ls -l" path="/home/ali/skills">
               <Skills />
            </InfoCard>

            <InfoCard commandUsed="exit" path=""></InfoCard>
         </section>
      </main>
   );
};

export default Main;
