import React from "react";
import classes from "./GithubProfileImage.module.css";

const GithubProfileImage = ({ imageSrc }) => {
   return (
      <div className={classes["github-profile-img"]}>
         <h2>Ali Jabar</h2>
         <img
            src="https://avatars.githubusercontent.com/u/86781708?v=4"
            alt="my github profile pic"
         />
      </div>
   );
};

export default GithubProfileImage;
