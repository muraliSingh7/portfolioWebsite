import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./style.module.css";
import {
  faEnvelope,
  faHeart,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Image from "next/image";
import topmateLogo from "../../../public/topmate.png";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.contactInfo}>
        <div className={styles.socialIconsContainer}>
          <Link
            href="https://github.com/MS07062000"
            aria-label="Github"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} className={styles.socialIcons} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/murali-singh/"
            aria-label="Linkedin"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} className={styles.socialIcons} />
          </Link>
          <Link
            href="https://twitter.com/Murali070600"
            target="_blank"
            aria-label="Twitter"
          >
            <FontAwesomeIcon icon={faTwitter} className={styles.socialIcons} />
          </Link>
          <Link
            href="https://www.youtube.com/@MuraliSingh07/videos"
            aria-label="Youtube"
            target="_blank"
          >
            <FontAwesomeIcon icon={faYoutube} className={styles.socialIcons} />
          </Link>
          <Link
            href="https://topmate.io/murali_singh/389479"
            aria-label="Topmate"
            target="_blank"
          >
            <Image
              src={topmateLogo}
              width={32}
              height={32}
              alt={"Topmate"}
              className={styles.topmateLogo}
            />
          </Link>
        </div>
        <div className={styles.contactDetails}>
          <div className={styles.telephone}>
            <FontAwesomeIcon icon={faPhone} className={styles.telephoneIcon} />
            <Link href="tel:+917678068572">+91 7678068572</Link>
          </div>
          <div className={styles.email}>
            <FontAwesomeIcon icon={faEnvelope} className={styles.emailIcon} />
            <Link href="mailto:singhmurali.14@gmail.com">
              singhmurali.14@gmail.com
            </Link>
          </div>
        </div>
      </div>
      <div>
        Designed with{" "}
        <span className={styles.heartIcon}>
          <FontAwesomeIcon icon={faHeart} beat />
        </span>
        <span>
          {" "}
          By <span className={styles.ownerName}>Murali Singh</span>
        </span>
      </div>
    </div>
  );
}
