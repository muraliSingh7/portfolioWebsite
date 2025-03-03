"use client";
import styles from "./style.module.css";
import { projectData } from "./projectData";

import ProjectCard from "./components/projectCard/projectCard";

export default function Projects() {
  return (
    <section id="projects" className="sectionContainer">
      <h1 className="sectionTitle"> Some of my latest work 💻</h1>
      <div className={styles.projectsContainer}>
        <div className={styles.projects}>
          {projectData.map((projectInfo, index) => (
            <ProjectCard key={index} projectInfo={projectInfo} />
          ))}
        </div>
      </div>
    </section>
  );
}
