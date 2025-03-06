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
        With 2 years of experience in web and mobile app development, I
        specialize in full-stack development, delivering results remotely
      </p>
    </div>
  );
}
