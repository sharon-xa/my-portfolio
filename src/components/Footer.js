import classes from "./Footer.module.css";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

const MaterialUISwitch = styled(Switch)(({ theme }) => {
   return {
      width: 72,
      height: 38,
      padding: 8,
      "& .MuiSwitch-switchBase": {
         margin: 2,
         padding: 0,
         transform: "translateX(2px)",
         "&.Mui-checked": {
            color: "#fff",
            transform: "translateX(30px)",
            "& .MuiSwitch-thumb:before": {
               backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                  "#fff"
               )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
            },
            "& + .MuiSwitch-track": {
               opacity: 1,
               backgroundColor:
                  theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
            },
         },
      },
      "& .MuiSwitch-thumb": {
         backgroundColor: theme.palette.mode === "dark" ? "#eee" : "#2266dd",
         width: 36,
         height: 36,
         "&:before": {
            content: "''",
            position: "absolute",
            width: "100%",
            height: "100%",
            left: 0,
            top: 0,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
               "#fff"
            )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
         },
      },
      "& .MuiSwitch-track": {
         opacity: 1,
         backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
         borderRadius: 20 / 2,
      },
   };
});

const Footer = () => {
   const setDarkMode = () => {
      document.querySelector("body").setAttribute("data-theme", "dark");
      localStorage.setItem("selectedTheme", "dark");
   };

   const setGlowMode = () => {
      document.querySelector("body").setAttribute("data-theme", "glow");
      localStorage.setItem("selectedTheme", "glow");
   };

   const selectedTheme = localStorage.getItem("selectedTheme");

   if (selectedTheme === "glow") setGlowMode();
   else setDarkMode();

   const toggleTheme = (e) => {
      if (e.target.checked) setDarkMode();
      else setGlowMode();
   };

   return (
      <footer className={classes.container}>
         <div className={classes.footer}>
            <div className={classes.info}>
               <p>🄯 Website code under (MIT License)</p>
               <p>This Website Made With React · Hosted on Firebase</p>
               <p>
                  If you encounter any bug, you can report it by sending me
                  an&nbsp;
                  <a
                     href="mailto:ali93456@gmail.com?subject=A Bug Report"
                     className={classes.myEmail}
                  >
                     Email
                  </a>
               </p>
            </div>
            <div className={classes.mode}>
               <p>Change Mode</p>
               <MaterialUISwitch
                  onChange={toggleTheme}
                  defaultChecked={selectedTheme === "dark"}
               />
            </div>
         </div>
      </footer>
   );
};

export default Footer;
