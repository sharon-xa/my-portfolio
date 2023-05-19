import React from "react";
import classes from "./Main.module.css";
import GithubProfileImage from "./GithubProfileImage";
import InfoCard from "../UI/InfoCard";
import Skills from "./Skills/Skills";

const Main = ({ imageSrc }) => {
   return (
      <main className={classes["home-layout"]}>
         <section className={classes.section}>
            <GithubProfileImage imageSrc={imageSrc} />

            <InfoCard commandUsed="cat" path="/etc/motd">
               <p className={classes.welcome}>Hey, welcome to my portfolio !</p>
               <p>
                  My name is Ali Jabar, I'm a front-end web developer a computer
                  science student, almost a graduate.
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
