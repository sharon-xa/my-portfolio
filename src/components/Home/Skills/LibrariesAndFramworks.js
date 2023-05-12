import { FaFolderOpen, FaReact, FaBootstrap } from "react-icons/fa";
import { DiSass } from "react-icons/di";
import { SiRedux, SiReactrouter } from "react-icons/si";
import classes from "./LibrariesAndFramworks.module.css";

const LibrariesAndFramworks = (props) => {
   const { nestedIconSize, iconSize } = props;

   const skillsFiles = [
      { fileName: "React.js", icon: <FaReact size={nestedIconSize} /> },
      { fileName: "Redux.js", icon: <SiRedux size={nestedIconSize} /> },
      {
         fileName: "ReactRouter.js",
         icon: <SiReactrouter size={nestedIconSize} />,
      },
      {
         fileName: "Bootstrap.css",
         icon: <FaBootstrap size={nestedIconSize} />,
      },
      { fileName: "Sass.scss", icon: <DiSass size={nestedIconSize} /> },
   ];
   return (
      <li>
         <div className={classes.iconAndText}>
            <FaFolderOpen size={iconSize} />
            &ensp; LibrariesAndFramworks/
         </div>
         <ul className={classes.nestedList}>
            {skillsFiles.map((file) => (
               <li>
                  <div className={classes.iconAndText}>
                     &emsp;&emsp;
                     {file.icon}
                     &nbsp;&nbsp;{file.fileName}
                  </div>
               </li>
            ))}
         </ul>
      </li>
   );
};

export default LibrariesAndFramworks;
