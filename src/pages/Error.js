import NavigationBar from "../components/NavigationBar";
import classes from "./Error.module.css";

import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
   const error = useRouteError();

   let title = "An error occurred!";
   let message = "Something went wrong!";

   if (error.status === 500) {
      message = error.data.message;
   }

   if (error.status === 404) {
      title = "Not Found!";
      message = "Could not find resource or page.";
   }

   return (
      <>
         <NavigationBar />
         <main className={classes.content}>
            <h1>{title} </h1>
            <p>{message}</p>
         </main>
      </>
   );
};

export default ErrorPage;
