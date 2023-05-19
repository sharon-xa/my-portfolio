import classes from "./Terminal.module.css";

const Terminal = ({ commandUsed, path }) => {
   return (
      <code className={classes["terminal-like-info"]}>
         [Ali~]$ {commandUsed} {path}
         <span></span>
      </code>
   );
};
export default Terminal;
