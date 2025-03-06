import React, { useRef, FunctionComponent } from "react";
import styles from "./style.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { ProjectInfo } from "../../projectInfo";
import Link from "next/link";
import Chip from "../chip/chip";
import useIntersectionObserver from "@/app/hooks/useIntersectionObserver";

interface ProjectCardProps {
  index: number;
  projectInfo: ProjectInfo;
}

const ProjectCard: FunctionComponent<ProjectCardProps> = ({
  index,
  projectInfo: {
    projectName,
    technologiesUsed,
    projectDescription,
    srcImage,
    codeLink,
    videoLink,
    deployedLink,
  },
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const onIntersection = (
    isIntersecting: boolean,
    target: Element,
    index?: number
  ) => {
    if (isIntersecting) {
      if (index !== undefined && index % 2 === 0) {
        target.classList.add(styles.projectCardEnteranceAnimationEvenChild);
      } else {
        target.classList.add(styles.projectCardEnteranceAnimationOddChild);
      }
    } else {
      if (index !== undefined && index % 2 === 0) {
        target.classList.remove(
          styles.projectCardEnteranceAnimationEvenChild
        );
      } else {
        target.classList.remove(
          styles.projectCardEnteranceAnimationOddChild
        );
      }
    }
  };

  useIntersectionObserver(cardRef, onIntersection, index);

  return (
    <div ref={cardRef} className={styles.projectCardContainer}>
      <Image
        className={styles.projectImg}
        src={srcImage}
        width={300}
        height={0}
        alt={projectName}
      />
      <div className={styles.projectDetailsContainer}>
        <h3 className={styles.projectName}>{projectName}</h3>
        <div>
          {projectDescription.map((description, index) => (
            <li
              key={"description" + index}
              className={styles.projectDescriptionContainer}
            >
              {description}
            </li>
          ))}
        </div>
        <div className={styles.technologiesContainer}>
          {technologiesUsed.map((tech, index) => (
            <Chip key={"tech" + index} chipName={tech} />
          ))}
        </div>
        <div className={styles.projectButtonsContainer}>
          {codeLink && codeLink.length > 0 && (
            <Link href={codeLink} aria-label="GitHub Link" target="_blank">
              <FontAwesomeIcon
                size="2xl"
                className={styles.projectCardIcon}
                icon={faGithub}
              />
            </Link>
          )}
          {videoLink && videoLink.length > 0 && (
            <Link href={videoLink} aria-label="Video Link" target="_blank">
              <FontAwesomeIcon
                size="2xl"
                className={styles.projectCardIcon}
                icon={faYoutube}
              />
            </Link>
          )}
          {deployedLink && deployedLink.length > 0 && (
            <Link
              href={deployedLink}
              aria-label="Deployed Link"
              target="_blank"
            >
              <FontAwesomeIcon
                size="2xl"
                className={styles.projectCardIcon}
                icon={faArrowUpRightFromSquare}
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
