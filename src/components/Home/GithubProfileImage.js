import React from "react";
import classes from "./GithubProfileImage.module.css";

const GithubProfileImage = ({ imageSrc }) => {
   return (
      <div className={classes["github-profile-img"]}>
         <h2>Ali Jabar</h2>
         <a
            href="https://github.com/sharonye0"
            target="_blank"
            rel="noreferrer"
         >
            <img src={imageSrc} alt="my github profile pic" />
         </a>
      </div>
   );
};

export default GithubProfileImage;
