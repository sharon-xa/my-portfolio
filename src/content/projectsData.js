import Bankist from "../assets/images/Bankist_2.webp";
import BankistWebsite from "../assets/images/Bankist_website_2.webp";
import Mapty from "../assets/images/Mapty_1.webp";
import Forkify from "../assets/images/Forkify_2.webp";
import FoodOrder from "../assets/images/FoodOrderApp_1.webp";
import ReduxStore from "../assets/images/Redux_store_1.webp";

const myProjects = [
   {
      id: "p1",
      name: "Bankist website",
      image: BankistWebsite,
      description:
         "A website showcases the services that the bank is providing for the customers.",
      codeLink: "https://github.com/sharonye0/BankistWebsite",
      demoLink: "https://bankist-website-testing.netlify.app/",
   },
   {
      id: "p2",
      name: "Bankist application",
      image: Bankist,
      description:
         "A banking application you can use it to deposit money, Send money or ask for a loan.",
      codeLink: "https://github.com/sharonye0/Bankist",
      demoLink: "https://bankist-application-testing.netlify.app/",
   },
   {
      id: "p3",
      name: "Mapty",
      image: Mapty,
      description:
         "A running and cycling application for people who love running, It's a workout planner, You can open the app, Choose a location and set some info about the workout pin that workout to the map.",
      codeLink: "https://github.com/sharonye0/Mapty",
      demoLink: "https://mapty-testing.netlify.app/",
   },
   {
      id: "p4",
      name: "Forkify",
      image: Forkify,
      description:
         "You can use this website to get a recipe for any kind of food you want, and if you like the recipe, You can bookmark it.",
      codeLink: "https://github.com/sharonye0/Forkify",
      demoLink: "https://forkify-application-testing.netlify.app/",
   },
   {
      id: "p5",
      name: "Food Order App",
      image: FoodOrder,
      description:
         "A simple application built with React, You can use this app to add food to your cart and then order the food you added to the cart.",
      codeLink: "https://github.com/sharonye0/food-order-app",
      demoLink: "https://food-order-app-testing.netlify.app/",
   },
   // delete this redux store BS and add your tic tac toe
   {
      id: "p6",
      name: "ReduxStore",
      image: ReduxStore,
      description:
         "An application to purchase phones This application is built with React and Redux, and connected to a simple firebase database.",
      codeLink: "https://github.com/sharonye0/ReduxStore",
      demoLink: "https://redux-store-testing.netlify.app/",
   },
];

export default myProjects;
