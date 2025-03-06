"use client";
import React, { useRef } from "react";
import styles from "./style.module.css";
import { FeatureInfo } from "../../featureInfo";
import useIntersectionObserver from "@/app/hooks/useIntersectionObserver";

interface FeatureCardProps {
  feature: FeatureInfo;
}
const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  const featureCardRef = useRef<HTMLDivElement>(null);
  const onIntersection = (isIntersecting: boolean, target: Element) => {
    if (isIntersecting) {
      target.classList.add(styles.featureCardAnimation);
    } else {
      target.classList.remove(styles.featureCardAnimation);
    }
  };

  useIntersectionObserver(featureCardRef, onIntersection);

  return (
    <div className={styles.featureCard} ref={featureCardRef}>
      <div
        className={styles.featureContent}
        style={{
          backgroundImage: `url(${feature.image.src})`,
        }}
      >
        <h2 className={styles.featureTitle}>{feature.title}</h2>
        <p className={styles.featureDescription}>{feature.description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
