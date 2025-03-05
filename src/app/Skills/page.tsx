import { default as SkillCard } from "./components/skillCard/skillCard";
import styles from "./style.module.css";
import skillCards from "./skillsData";
import SkillInfo from "./skillInfo";

export default function Skills() {
  return (
    <section id="skills" className="sectionContainer">
      <h1 className="sectionTitle largeScreen">Tech Stack &#45; My Toolkit 🔧</h1>
      <h1 className="sectionTitle mobile">My Toolkit 🔧</h1>
      <div className={styles.skillsContainer}>
        {skillCards.map((skill: SkillInfo, index: number) => (
          <SkillCard key={"skill" + index} {...skill} />
        ))}
      </div>
    </section>
  );
}
