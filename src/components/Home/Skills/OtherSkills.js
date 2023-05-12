import classes from "./OtherSkills.module.css";

import { FaFolderOpen } from "react-icons/fa";
import { BsGit } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { SiBookstack } from "react-icons/si";
import { GoTerminal } from "react-icons/go";
import { HiOutlineLightBulb } from "react-icons/hi";

const OtherSkills = (props) => {
   const { nestedIconSize, iconSize } = props;

   const skillsFiles = [
      { fileName: "Git", icon: <BsGit size={nestedIconSize} /> },
      { fileName: "GitHub", icon: <AiFillGithub size={nestedIconSize} /> },
      { fileName: "CommandLine", icon: <GoTerminal size={nestedIconSize} /> },
      {
         fileName: "ProblemSolving",
         icon: <HiOutlineLightBulb size={nestedIconSize} />,
      },
      { fileName: "Learning", icon: <SiBookstack size={nestedIconSize} /> },
   ];
   return (
      <li>
         <div className={classes.iconAndText}>
            <FaFolderOpen size={iconSize} />
            &ensp; OtherSkills/
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

export default OtherSkills;
