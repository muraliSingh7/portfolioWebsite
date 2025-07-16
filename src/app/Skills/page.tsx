import { default as SkillCard } from "./components/skillCard/skillCard";
import styles from "./style.module.css";
import skillCards from "./skillsData";
import SkillInfo from "./skillInfo";

export default function Skills() {
  return (
    <section id="skills" className="sectionContainer">
      <div>
        <h1 className="sectionTitle largeScreen">Tech Stack &#45; My Toolkit 🔧</h1>
        <h1 className="sectionTitle mobile">My Toolkit 🔧</h1>
        <p style={{ marginTop: "0.75rem", textAlign:"center" }}>
          <span style={{ display: "block" }}>Tools don&apos;t define us.</span>
          <span style={{ display: "block" }}>But the right ones push us forward.</span>
          <span style={{ display: "block" }}>This is my toolkit.</span>
          <span style={{ display: "block" }}>Fast. Focused. Flexible.</span>
        </p>
      </div>
      <div className={styles.skillsContainer}>
        {skillCards.map((skill: SkillInfo, index: number) => (
          <SkillCard key={"skill" + index} {...skill} />
        ))}
      </div>
    </section>
  );
}
