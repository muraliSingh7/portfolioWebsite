import FeatureCard from "./components/featureCard/featureCard";
import featureData from "./featureData";
import { FeatureInfo } from "./featureInfo";
import styles from "./style.module.css";

export default function WhyWorkWithMe() {
  return (
    <section id="whyWorkWithMe" className="sectionContainer">
      <h1 className="sectionTitle">Why Work With Me &#128640;</h1>
      <div className={styles.featuresContainer}>
        {featureData.map((feature: FeatureInfo, index: number) => (
          <FeatureCard key={"feature" + index} feature={feature} />
        ))}
      </div>
    </section>
  );
}
