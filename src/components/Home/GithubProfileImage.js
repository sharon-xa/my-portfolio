import React, { useEffect, useState } from "react";
import classes from "./GithubProfileImage.module.css";
const GITHUB_API = "https://api.github.com/users/sharonye0";

/*
TODO: 
    1. better error handling
    2. maybe get more info from github like the name
       and the url so people are able to click on the photo 
       and go to your profile on github
    3. everytime i change the page using the navbar the photo get fetched again
*/

const GithubProfileImage = () => {
   const [profilePicUrl, setProfilePicUrl] = useState(null);
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState(null);

   useEffect(() => {
      const fetchGithubProfilePic = async () => {
         setIsLoading(true);
         setError(null);
         try {
            const res = await fetch(GITHUB_API);

            if (!res.ok) {
               throw new Error("Something went wrong!");
            }

            const data = await res.json();

            setProfilePicUrl(data.avatar_url);
         } catch (error) {
            console.error(error);
            setError(error.message);
         }

         setIsLoading(false);
      };

      fetchGithubProfilePic();
   }, []);

   let content;

   if (profilePicUrl) {
      content = <img src={profilePicUrl} alt="my github profile pic" />;
   }

   if (error) {
      content = <p className={classes["error-paragraph"]}> {error} </p>;
   }

   if (isLoading) {
      content = <p className={classes["is-loading"]}>Loading...</p>;
   }

   return (
      <div className={classes["github-profile-img"]}>
         <h2>Sharon</h2>
         {content}
      </div>
   );
};

export default GithubProfileImage;
