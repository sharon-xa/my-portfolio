import { FaFolderOpen } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import classes from "./JavascriptSkills.module.css";

const JavascriptSkills = (props) => {
   const { nestedIconSize, iconSize } = props;

   const skillsFiles = [
      { fileName: "ES6.js" },
      { fileName: "Destructuring.js" },
      { fileName: "ArrayMethods.js" },
      { fileName: "Async/Await.js" },
      { fileName: "Hoisting.js" },
      { fileName: "Closures.js" },
   ];
   return (
      <li>
         <div className={classes.iconAndText}>
            <FaFolderOpen size={iconSize} />
            &ensp; JavaScript/
         </div>
         <ul className={classes.nestedList}>
            {skillsFiles.map((file) => (
               <li>
                  <div className={classes.iconAndText}>
                     &emsp;&emsp;
                     <TbBrandJavascript size={nestedIconSize} />
                     &nbsp;&nbsp;{file.fileName}
                  </div>
               </li>
            ))}
         </ul>
      </li>
   );
};

export default JavascriptSkills;
