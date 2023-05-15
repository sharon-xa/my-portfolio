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
   { fileName: "BoxModel.css", icon: <DiCss3 size={NESTED_ICON_SIZE} /> },
   { fileName: "FlexBox.css", icon: <DiCss3 size={NESTED_ICON_SIZE} /> },
   { fileName: "Grid.css", icon: <DiCss3 size={NESTED_ICON_SIZE} /> },
   { fileName: "Animations.css", icon: <DiCss3 size={NESTED_ICON_SIZE} /> },
   { fileName: "Responsive.css", icon: <DiCss3 size={NESTED_ICON_SIZE} /> },
];

export const javaScriptSkills = [
   { fileName: "ES6.js", icon: <IoLogoJavascript size={NESTED_ICON_SIZE} /> },
   {
      fileName: "Destructuring.js",
      icon: <IoLogoJavascript size={NESTED_ICON_SIZE} />,
   },
   {
      fileName: "ArrayMethods.js",
      icon: <IoLogoJavascript size={NESTED_ICON_SIZE} />,
   },
   {
      fileName: "Async/Await.js",
      icon: <IoLogoJavascript size={NESTED_ICON_SIZE} />,
   },
   {
      fileName: "Hoisting.js",
      icon: <IoLogoJavascript size={NESTED_ICON_SIZE} />,
   },
   {
      fileName: "Closures.js",
      icon: <IoLogoJavascript size={NESTED_ICON_SIZE} />,
   },
];

export const librariesSkills = [
   {
      fileName: "React.js",
      icon: <FaReact size={NESTED_ICON_SIZE} />,
   },
   {
      fileName: "Redux.js",
      icon: <SiRedux size={NESTED_ICON_SIZE} />,
   },
   {
      fileName: "ReactRouter.js",
      icon: <SiReactrouter size={NESTED_ICON_SIZE} />,
   },
   {
      fileName: "Bootstrap.css",
      icon: <FaBootstrap size={NESTED_ICON_SIZE} />,
   },
   {
      fileName: "Sass.scss",
      icon: <DiSass size={NESTED_ICON_SIZE} />,
   },
];

export const otherSkills = [
   {
      fileName: "Git",
      icon: <BsGit size={NESTED_ICON_SIZE} />,
   },
   { fileName: "GitHub", icon: <AiFillGithub size={NESTED_ICON_SIZE} /> },
   {
      fileName: "CommandLine",
      icon: <GoTerminal size={NESTED_ICON_SIZE} />,
   },
   {
      fileName: "ProblemSolving",
      icon: <HiOutlineLightBulb size={NESTED_ICON_SIZE} />,
   },
   {
      fileName: "Learning",
      icon: <SiBookstack size={NESTED_ICON_SIZE} />,
   },
];
