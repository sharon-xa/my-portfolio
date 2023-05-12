import classes from "./Skills.module.css";
import { FaHtml5 } from "react-icons/fa";

import CssSkills from "./CssSkills";
import JavascriptSkills from "./JavascriptSkills";
import LibrariesAndFramworks from "./LibrariesAndFramworks";
import OtherSkills from "./OtherSkills";

const Skills = () => {
   const ICON_SIZE = 30;
   const NESTED_ICON_SIZE = 25;

   // make a custom hooke for the skills to remove the duplication

   return (
      <ul className={classes.list}>
         <li>
            <div className={classes.iconAndText}>
               <FaHtml5 size={ICON_SIZE} />
               &ensp; HTML5.html
            </div>
         </li>
         <CssSkills iconSize={ICON_SIZE} nestedIconSize={NESTED_ICON_SIZE} />
         <JavascriptSkills
            iconSize={ICON_SIZE}
            nestedIconSize={NESTED_ICON_SIZE}
         />
         <LibrariesAndFramworks
            iconSize={ICON_SIZE}
            nestedIconSize={NESTED_ICON_SIZE}
         />
         <OtherSkills iconSize={ICON_SIZE} nestedIconSize={NESTED_ICON_SIZE} />
      </ul>
   );
};

export default Skills;
