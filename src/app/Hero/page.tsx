import Typewriter from "./component/TypeWriter";
import styles from "./style.module.css";

export default function Hero() {
  return (
    <div className="sectionContainer">
      <p className={styles.greeting}>HELLO THERE &#128075;</p>
      <h1 className={styles.heroTitle}>
        I am Murali Singh,
        <br />a
        <span>
          <Typewriter toRotate={["Software Engineer", "Software Developer"]} />
        </span>
        from India
      </h1>
      <p className={styles.heroDescription}>
      2 years shaping web and mobile experiences.
      <span style={{display:"block"}}>Full-stack at heart.</span>
      <span style={{display:"block"}}>Working remotely, delivering what matters.</span>
      <span style={{display:"block"}}>Code is my craft, results are my language.</span>
      </p>
    </div>
  );
}
