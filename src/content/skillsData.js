import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaBootstrap } from "react-icons/fa";
import { DiSass } from "react-icons/di";
import { SiRedux, SiReactrouter } from "react-icons/si";
import { BsGit } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { SiBookstack } from "react-icons/si";
import { GoTerminal } from "react-icons/go";
import { HiOutlineLightBulb } from "react-icons/hi";

const NESTED_ICON_SIZE = 25;

export const cssSkills = [
   {
      id: 1,
      fileName: "BoxModel.css",
      icon: <DiCss3 size={NESTED_ICON_SIZE} />,
   },
   { id: 2, fileName: "FlexBox.css", icon: <DiCss3 size={NESTED_ICON_SIZE} /> },
   { id: 3, fileName: "Grid.css", icon: <DiCss3 size={NESTED_ICON_SIZE} /> },
   {
      id: 4,
      fileName: "Animations.css",
      icon: <DiCss3 size={NESTED_ICON_SIZE} />,
   },
   {
      id: 5,
      fileName: "Responsive.css",
      icon: <DiCss3 size={NESTED_ICON_SIZE} />,
   },
];

export const javaScriptSkills = [
   {
      id: 6,
      fileName: "ES6.js",
      icon: <IoLogoJavascript size={NESTED_ICON_SIZE} />,
   },
   {
      id: 7,
      fileName: "Destructuring.js",
      icon: <IoLogoJavascript size={NESTED_ICON_SIZE} />,
   },
   {
      id: 8,
      fileName: "ArrayMethods.js",
      icon: <IoLogoJavascript size={NESTED_ICON_SIZE} />,
   },
   {
      id: 9,
      fileName: "Async/Await.js",
      icon: <IoLogoJavascript size={NESTED_ICON_SIZE} />,
   },
   {
      id: 10,
      fileName: "Hoisting.js",
      icon: <IoLogoJavascript size={NESTED_ICON_SIZE} />,
   },
   {
      id: 11,
      fileName: "Closures.js",
      icon: <IoLogoJavascript size={NESTED_ICON_SIZE} />,
   },
];

export const librariesSkills = [
   { id: 12, fileName: "React.js", icon: <FaReact size={NESTED_ICON_SIZE} /> },
   { id: 13, fileName: "Redux.js", icon: <SiRedux size={NESTED_ICON_SIZE} /> },
   {
      id: 14,
      fileName: "ReactRouter.js",
      icon: <SiReactrouter size={NESTED_ICON_SIZE} />,
   },
   {
      id: 15,
      fileName: "Bootstrap.css",
      icon: <FaBootstrap size={NESTED_ICON_SIZE} />,
   },
   { id: 16, fileName: "Sass.scss", icon: <DiSass size={NESTED_ICON_SIZE} /> },
];

export const otherSkills = [
   { id: 17, fileName: "Git", icon: <BsGit size={NESTED_ICON_SIZE} /> },
   {
      id: 18,
      fileName: "GitHub",
      icon: <AiFillGithub size={NESTED_ICON_SIZE} />,
   },
   {
      id: 19,
      fileName: "CommandLine",
      icon: <GoTerminal size={NESTED_ICON_SIZE} />,
   },
   {
      id: 20,
      fileName: "ProblemSolving",
      icon: <HiOutlineLightBulb size={NESTED_ICON_SIZE} />,
   },
   {
      id: 21,
      fileName: "Learning",
      icon: <SiBookstack size={NESTED_ICON_SIZE} />,
   },
];
