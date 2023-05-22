import Main from "../components/Home/Main";
import { json, useLoaderData } from "react-router-dom";

const HomePage = () => {
   const data = useLoaderData();

   const imageSrc = data.avatar_url;

   return <Main imageSrc={imageSrc} />;
};

export default HomePage;

export async function loader() {
   const response = await fetch("https://api.github.com/users/sharonye0");

   if (!response.ok) {
      throw json(
         { message: "Could not fetch image." },
         { status: response.status }
      );
   } else {
      return response;
   }
}
