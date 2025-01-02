import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./style.module.css";
import {
  faEnvelope,
  faHeart,
  faLocationDot,
  faAddressCard,
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
        <p>
          <span>
            <FontAwesomeIcon icon={faAddressCard} />
          </span>
          Contact Info
        </p>
        <p>
          <span>
            <FontAwesomeIcon icon={faPhone} />
          </span>
          <span>
            <a className={styles.telephoneEmailLink} href="tel:+917678068572">+91 7678068572</a>
          </span>
        </p>
        <p>
          <span>
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
          <span>
            <a className={styles.telephoneEmailLink} href="mailto:singhmurali.14@gmail.com">
              singhmurali.14@gmail.com
            </a>
          </span>
        </p>
        <p>
          <span>
            <FontAwesomeIcon icon={faLocationDot} />
          </span>
          Navi Mumbai, India-410 209
        </p>
        <p>
          <Link href="https://github.com/MS07062000" target="_blank">
            <span>
              <FontAwesomeIcon icon={faGithub} className={styles.socialIcons} />
            </span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/murali-singh/"
            target="_blank"
          >
            <span>
              <FontAwesomeIcon
                icon={faLinkedin}
                className={styles.socialIcons}
              />
            </span>
          </Link>
          <Link href="https://twitter.com/Murali070600" target="_blank">
            <span>
              <FontAwesomeIcon
                icon={faTwitter}
                className={styles.socialIcons}
              />
            </span>
          </Link>
          <Link
            href="https://www.youtube.com/@MuraliSingh07/videos"
            target="_blank"
          >
            <span>
              <FontAwesomeIcon
                icon={faYoutube}
                className={styles.socialIcons}
              />
            </span>
          </Link>
          <Link href="https://topmate.io/murali_singh/389479" target="_blank">
            <Image
              src={topmateLogo}
              width={32}
              height={32}
              alt={"Topmate"}
              className={styles.img}
            />
          </Link>
        </p>
      </div>
      <p>
        Designed with{" "}
        <span className={styles.heartIcon}>
          <FontAwesomeIcon icon={faHeart} beat />
        </span>
        <span>
          {" "}
          By <span className={styles.ownerName}>Murali Singh</span>
        </span>
      </p>
    </div>
  );
}
