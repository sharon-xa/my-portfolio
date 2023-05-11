import React from "react";
import Terminal from "./Terminal";
import classes from "./InfoCard.module.css";

const InfoCard = (props) => {
   const { commandUsed, path } = props;
   return (
      <div className={classes["card-container"]}>
         <div className={classes["info-card"]}>
            <Terminal commandUsed={commandUsed} path={path} />
            {props.children}
         </div>
      </div>
   );
};

export default InfoCard;
