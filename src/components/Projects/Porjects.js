import classes from "./Projects.module.css";
import InfoCard from "../UI/InfoCard";
import allMyProjects from "./projectsArray";

const Projects = () => {
   return (
      <main>
         <div className={classes.wrapper}>
            <div className={classes.headerBox}>
               <InfoCard commandUsed="ls" path="/home/ali/projects"></InfoCard>
            </div>
            <section className={classes.container}>
               {allMyProjects.map((project) => {
                  if (!project.image) return null;
                  else
                     return (
                        <div className={classes.box} key={project.id}>
                           <img src={project.image} alt={project.name} />

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
