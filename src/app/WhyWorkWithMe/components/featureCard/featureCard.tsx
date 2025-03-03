import React from "react";
import styles from "./style.module.css";
import { FeatureInfo } from "../../featureInfo";

interface FeatureCardProps {
  feature: FeatureInfo;
}
const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  return (
    <div className={styles.featureCard}>
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
