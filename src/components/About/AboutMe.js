import classes from "./AboutMe.module.css";
import InfoCard from "../UI/InfoCard";
import Mailto from "../../helpers/Mailto";

const AboutMe = () => {
   return (
      <main>
         <section className={classes.section}>
            <InfoCard commandUsed="whoami" path="">
               <p>
                  My name is Ali Jabar, I'm 21 years old, I live in Iraq and I
                  study computer science in the university of technology, I've
                  been learning programming for quite sometime now.
               </p>
            </InfoCard>

            <InfoCard commandUsed="cat" path="/home/ali/Passion.txt">
               <p className={classes.passion}>
                  I love programming and lots of other things too, such as
                  music, movies and maybe some gaming from time to time.
               </p>
               <p className={classes.passion}>
                  I'm very passionate when it comes to technology, I'm trying to
                  get a job yet still wanna contribute to open source projects,
                  cuz i love the open source community.
               </p>
               <p className={classes.passion}>
                  I use linux as my operating system, EndeavourOS is my main
                  distro (I use ARCH BTW).
               </p>
               <p className={classes.passion}>
                  I really love learning new things like Data Structure,
                  Algorithms, Math and Ui/Ux design, and other things.
               </p>
            </InfoCard>

            <InfoCard commandUsed="cat" path="/home/ali/socials.txt">
               <div className={classes.socials}>
                  <p>
                     <a
                        href="https://www.github.com/sharonye0"
                        target="_blank"
                        rel="noreferrer"
                     >
                        GitHub
                     </a>
                  </p>
                  <p>
                     <a
                        href="https://www.linkedin.com/in/ali-jabar-aa056423b/"
                        target="_blank"
                        rel="noreferrer"
                     >
                        LinkedIn
                     </a>
                  </p>
                  <p className={classes.email}>
                     Email:&nbsp;
                     <Mailto email="ali93456@gmail.com" subject="" body="">
                        ali93456@gmail.com
                     </Mailto>
                  </p>
               </div>
            </InfoCard>
            <InfoCard commandUsed="exit" path=""></InfoCard>
         </section>
      </main>
   );
};

export default AboutMe;
