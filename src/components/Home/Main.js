import React from "react";
import classes from "./Main.module.css";
import GithubProfileImage from "./GithubProfileImage";
import InfoCard from "../UI/InfoCard";
import Skills from "./Skills/Skills";
// import ButtonMailto from "../Helpers/Mailto";

const Main = () => {
   return (
      <main className={classes["home-layout"]}>
         <section className={classes.section}>
            <GithubProfileImage />

            <InfoCard commandUsed="cat" path="/etc/motd">
               <p>
                  Hey, welcome to my portfolio !<br /> My name is Ali Jabar, I'm
                  a front-end web developer a computer science student, almost a
                  graduate.
               </p>
            </InfoCard>

            <InfoCard commandUsed="ls -l" path="/home/ali/skills">
               <Skills />
            </InfoCard>

            <InfoCard commandUsed="cat" path="/home/ali/Socials.txt">
               {/* <div className={classes.socials}>
                  <div className={classes.github}>
                     Email:&nbsp;
                     <ButtonMailto
                        label="ali93456@gmail.com"
                        mailto="mailto:ali93456@gmail.com"
                     />
                  </div>
                  <div className={classes.email}>
                     Email:&nbsp;
                     <ButtonMailto
                        label="ali93456@gmail.com"
                        mailto="mailto:ali93456@gmail.com"
                     />
                  </div>
               </div> */}
            </InfoCard>
         </section>
      </main>
   );
};

export default Main;
