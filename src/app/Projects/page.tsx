"use client";
import styles from "./style.module.css";
import { projectData } from "./projectData";

import ProjectCard from "./components/projectCard/projectCard";

export default function Projects() {
  return (
    <section id="projects" className="sectionContainer">
      <h1 className="sectionTitle largeScreen"> Some of my latest work &#128187;</h1>
      <h1 className="sectionTitle mobile"> My latest work &#128187;</h1>
      <div className={styles.projectsContainer}>
        <div className={styles.projects}>
          {projectData.map((projectInfo, index) => (
            <ProjectCard key={index} index={index} projectInfo={projectInfo} />
          ))}
        </div>
      </div>
    </section>
  );
}
