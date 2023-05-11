import { Outlet } from "react-router-dom";

import NavigationBar from "../components/NavigationBar";
// import classes from "./Root.module.css";

function RootLayout() {
   return (
      <>
         <NavigationBar />
         <Outlet />
      </>
   );
}

export default RootLayout;
