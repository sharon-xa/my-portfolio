import React from "react";
import classes from "./InfoCard.module.css";

const InfoCard = () => {
   return (
      <section className={classes["info-card"]}>
         <code className="terminal-like-info">
            [Sharon ~]$ cat /etc/motd <span></span>
         </code>
         <p>
            Hey, welcome to my portfolio !
            <br /> My name is Ali, I'm a front-end web developer
            <br /> a computer science student, almost a graduate
         </p>
      </section>
   );
};

export default InfoCard;
