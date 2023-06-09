import classes from "./Projects.module.css";
import InfoCard from "../UI/InfoCard";
import allMyProjects from "../../content/projectsData";
import { useState } from "react";
import Modal from "../UI/Modal";

const Projects = () => {
   const [imageIsShown, setImageIsShown] = useState(false);
   const [imageToShow, setImageToShow] = useState(null);

   const showImageHandler = () => {
      setImageIsShown(true);
   };

   const hideImageHandler = () => {
      setImageIsShown(false);
   };

   const escapeKeyHandler = (event) => {
      if (event.key === "Escape") setImageIsShown(false);
   };

   return (
      <main>
         {imageIsShown && (
            <Modal onClose={hideImageHandler}>
               <img src={imageToShow} alt="modal" />
            </Modal>
         )}
         <div className={classes.wrapper}>
            <div className={classes.headerBox}>
               <InfoCard commandUsed="ls" path="/home/ali/projects"></InfoCard>
            </div>
            <section className={classes.container}>
               {allMyProjects.map((project) => {
                  if (!project.image) return null;
                  else
                     return (
                        <div
                           className={classes.box}
                           key={project.id}
                           onClick={() => setImageToShow(project.image)}
                           tabIndex={0}
                           onKeyDown={escapeKeyHandler}
                        >
                           <img
                              src={project.image}
                              alt={project.name}
                              onClick={showImageHandler}
                           />

                           <div className={classes.info}>
                              <h2> {project.name} </h2>
                              <p>{project.description}</p>
                           </div>

                           <div className={classes.links}>
                              <a
                                 href={project.demoLink}
                                 target="_blank"
                                 rel="noreferrer"
                              >
                                 Live Demo
                              </a>
                              <a
                                 href={project.codeLink}
                                 target="_blank"
                                 rel="noreferrer"
                              >
                                 Code
                              </a>
                           </div>
                        </div>
                     );
               })}
            </section>
            <div className={classes.footerBox}>
               <InfoCard commandUsed="exit" path=""></InfoCard>
            </div>
         </div>
      </main>
   );
};

export default Projects;
