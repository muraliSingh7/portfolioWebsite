"use client";
import React, { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import styles from "../institutionCard/style.module.css";
import useIntersectionObserver from "@/app/hooks/useIntersectionObserver";

type InstitutionCardProps = {
  index: number;
  srcImage: string | StaticImageData;
  courseName: string;
  institutionName: string;
  yearOfCompletion: string;
};

const InstitutionCard: React.FC<InstitutionCardProps> = ({
  index,
  srcImage,
  courseName,
  institutionName,
  yearOfCompletion,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const onIntersection = (
    isIntersecting: boolean,
    target: Element,
    index?: number
  ) => {
    if (isIntersecting) {
      if (index !== undefined && index % 2 === 0) {
        target.classList.add(styles.institutionCardEnteranceAnimationEvenChild);
      } else {
        target.classList.add(styles.institutionCardEnteranceAnimationOddChild);
      }
    } else {
      if (index !== undefined && index % 2 === 0) {
        target.classList.remove(
          styles.institutionCardEnteranceAnimationEvenChild
        );
      } else {
        target.classList.remove(
          styles.institutionCardEnteranceAnimationOddChild
        );
      }
    }
  };

  useIntersectionObserver(cardRef, onIntersection, index);

  return (
    <div ref={cardRef} className={`${styles.card} ${styles.grid}`}>
      <div className={styles.img_column}>
        <Image
          className={styles.img}
          src={srcImage}
          alt={courseName}
          height={0}
          width={0}
          loading="lazy"
        />
      </div>
      <div className={styles.info_column}>
        <h2 className={styles.course_name}>{courseName}</h2>
        <h3 className={styles.institution_name}>{institutionName}</h3>
        <h4 className={styles.year_Of_Completion}>
          Completed in {yearOfCompletion}
        </h4>
      </div>
    </div>
  );
};

export default InstitutionCard;
