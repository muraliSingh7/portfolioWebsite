"use client";
import React, { FunctionComponent, useEffect, useRef } from "react";
import styles from './style.module.css';
import Image, { StaticImageData } from 'next/image';
import useIntersectionObserver from "@/app/hooks/useIntersectionObserver";

type SkillsProps = { skillName: string; skillIconImage: string | StaticImageData };

const SkillCard: FunctionComponent<SkillsProps> = ({ skillName, skillIconImage }) => {
    const isUrl = typeof skillIconImage === "string";
    const skillCardRef = useRef<HTMLDivElement>(null);

    const onIntersection = (isIntersecting: boolean, target: Element) => {
      if (isIntersecting) {
        target.classList.add(styles.skillCardAnimation);
      } else {
        target.classList.remove(styles.skillCardAnimation);
      }
    };
  
    useIntersectionObserver(skillCardRef, onIntersection);

    if (isUrl) {
        return (
            <div className={styles.card} ref={skillCardRef}>
                <Image
                    className={styles.skillImage}
                    src={skillIconImage}
                    width={50}
                    height={50}
                    alt="skillLogo"
                    loading="lazy"
                />
                <p className={styles.skillName}>{skillName}</p>
            </div>
        );
    } else {
        return (
            <div className={styles.card} ref={skillCardRef}>
                <Image
                    className={styles.skillImage}
                    src={skillIconImage}
                    width={50}
                    height={50}
                    alt="skillLogo"
                />
                <p className={styles.skillName}>{skillName}</p>
            </div>
        );
    }
}


export default SkillCard;