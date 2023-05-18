import { FaFolderOpen } from "react-icons/fa";
import classes from "./Skill.module.css";

const Skill = (props) => {
   const { folderTitle, skillsFiles } = props;

   return (
      <li>
         <div className={classes.iconAndText}>
            <FaFolderOpen size={30} className={classes.icon} />
            &ensp; {folderTitle}/
         </div>
         <ul className={classes.nestedList}>
            {skillsFiles.map((file) => (
               <li key={file.id}>
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

export default Skill;
