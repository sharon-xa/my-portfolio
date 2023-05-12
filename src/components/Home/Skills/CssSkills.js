import { FaFolderOpen } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import classes from "./CssSkills.module.css";

const CssSkills = (props) => {
   const { nestedIconSize, iconSize } = props;

   const skillsFiles = [
      { fileName: "BoxModel.css" },
      { fileName: "FlexBox.css" },
      { fileName: "Grid.css" },
      { fileName: "Animations.css" },
      { fileName: "Responsive.css" },
   ];
   return (
      <li>
         <div className={classes.iconAndText}>
            <FaFolderOpen size={iconSize} className={classes.icon} />
            &ensp; CSS3/
         </div>
         <ul className={classes.nestedList}>
            {skillsFiles.map((file) => (
               <li>
                  <div className={classes.iconAndText}>
                     &emsp;&emsp;
                     <DiCss3 size={nestedIconSize} />
                     &nbsp;&nbsp;{file.fileName}
                  </div>
               </li>
            ))}
         </ul>
      </li>
   );
};

export default CssSkills;
