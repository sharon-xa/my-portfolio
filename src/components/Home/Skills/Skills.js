import classes from "./Skills.module.css";
import { FaHtml5 } from "react-icons/fa";
import Skill from "./Skill";

import {
   cssSkills,
   javaScriptSkills,
   librariesSkills,
   otherSkills,
} from "../../../content/skillsData";

const ICON_SIZE = 30;
const Skills = () => {
   return (
      <ul className={classes.list}>
         <li>
            <div className={classes.iconAndText}>
               <FaHtml5 size={ICON_SIZE} />
               &ensp; HTML5.html
            </div>
         </li>
         <Skill folderTitle="CSS3" skillsFiles={cssSkills} />
         <Skill folderTitle="JavaScript" skillsFiles={javaScriptSkills} />
         <Skill
            folderTitle="LibrariesAndFrameworks"
            skillsFiles={librariesSkills}
         />
         <Skill folderTitle="OtherSkills" skillsFiles={otherSkills} />
      </ul>
   );
};

export default Skills;
