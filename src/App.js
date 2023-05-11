import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import Projects from "./pages/Projects";
import AboutMe from "./pages/About";

function App() {
   const router = createBrowserRouter([
      {
         path: "/",
         element: <RootLayout />,
         children: [
            { path: "/", element: <HomePage /> },
            { path: "/projects", element: <Projects /> },
            { path: "/about-me", element: <AboutMe /> },
         ],
      },
   ]);

   return (
      <>
         <RouterProvider router={router} />
      </>
   );
}

export default App;
