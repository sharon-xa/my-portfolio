import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function RootLayout() {
   return (
      <>
         <NavigationBar />
         <Outlet />
         <Footer></Footer>
      </>
   );
}

export default RootLayout;
