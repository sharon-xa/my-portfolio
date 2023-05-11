import React from "react";
import classes from "./Main.module.css";
import GithubProfileImage from "./GithubProfileImage";
import InfoCard from "../UI/InfoCard";

const Main = () => {
   return (
      <main className={classes["home-layout"]}>
         <section className={classes.section}>
            <GithubProfileImage />

            <InfoCard commandUsed="cat" path="/etc/motd">
               <p>
                  Hey, welcome to my portfolio !<br /> My name is Ali Jabar, I'm
                  a front-end web developer a computer science student, almost a
                  graduate
               </p>
            </InfoCard>

            <InfoCard commandUsed="lscpu" path=""></InfoCard>

            <InfoCard commandUsed="cat" path=""></InfoCard>
         </section>
      </main>
   );
};

export default Main;
