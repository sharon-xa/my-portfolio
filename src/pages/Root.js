import NavigationBar from "../components/NavigationBar";
import { Outlet } from "react-router-dom";

function RootLayout() {
   return (
      <>
         <NavigationBar />
         <Outlet />
      </>
   );
}

export default RootLayout;
