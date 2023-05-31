import classes from "./AboutMe.module.css";
import InfoCard from "../UI/InfoCard";

const AboutMe = () => {
   return (
      <main>
         <section className={classes.section}>
            <InfoCard commandUsed="whoami" path="">
               <p>
                  My name is Ali Jabar, 21 years old, I live in Iraq and study
                  computer science at the University of Technology, I've been
                  learning programming for quite some time now.
               </p>
            </InfoCard>

            <InfoCard commandUsed="cat" path="/home/ali/Passion.txt">
               <p className={classes.passion}>
                  I love programming and lots of other things such as music,
                  movies, and maybe some gaming from time to time.
               </p>
               <p className={classes.passion}>
                  I'm very passionate when it comes to technology, I am trying
                  to get a job but still wanna contribute to open-source
                  projects because I love the free and open-source community and
                  their philosophy.
               </p>
               <p className={classes.passion}>
                  I use Linux as my operating system, and EndeavourOS is my main
                  distro (I use ARCH BTW).
               </p>
               <p className={classes.passion}>
                  I love learning new things like Data Structure, Algorithms,
                  Math and Ui/Ux design, and anything that interests me.
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
                     <a href="mailto:ali93456@gmail.com">ali93456@gmail.com</a>
                  </p>
               </div>
            </InfoCard>
            <InfoCard commandUsed="exit" path=""></InfoCard>
         </section>
      </main>
   );
};

export default AboutMe;
