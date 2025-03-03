import styles from "./style.module.css";

export default function Hero() {
  return (
    <div className="sectionContainer">
      <p className={styles.greeting}>HELLO THERE!</p>
      <h1 className={styles.heroTitle}>
        I am Murali Singh,
        <br />a Software Engineer from India
      </h1>
      <p className={styles.heroDescription}>
        With 2 years of experience in web and mobile app development, I
        specialize in full-stack development, delivering results remotely
      </p>
    </div>
  );
}
