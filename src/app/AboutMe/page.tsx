"use client";
import Image from "next/image";
import styles from "../AboutMe/style.module.css";
import profilePic from "../../../public/murali.jpeg";
import { useEffect, useMemo, useRef } from "react";
import Link from "next/link";
export default function AboutMe() {
  const titleRef = useRef<HTMLParagraphElement>(null);
  const infoRef = useRef<HTMLParagraphElement>(null);
  const contactRef = useRef<HTMLButtonElement>(null);
  const imgOverlayRef = useRef<HTMLDivElement>(null);
  const refs = useMemo(
    () => [imgOverlayRef, titleRef, infoRef, contactRef],
    [imgOverlayRef, titleRef, infoRef, contactRef]
  );

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentRef = refs.find((ref) => ref.current === entry.target);
          if (currentRef && currentRef.current) {
            currentRef.current.classList.add(
              getAnimationClass(currentRef.current)
            );
          }
        } else {
          const currentRef = refs.find((ref) => ref.current === entry.target);
          if (currentRef && currentRef.current) {
            currentRef.current.classList.remove(
              getAnimationClass(currentRef.current)
            );
          }
        }
      });
    });

    refs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      refs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [refs]);

  function getAnimationClass(element: HTMLElement) {
    // Define your logic to determine the appropriate animation class based on the element
    if (element === titleRef.current) {
      return styles.bounceInFromRightAnimation;
    } else if (element === infoRef.current) {
      return styles.bounceInFromRightAnimation;
    } else if (element === contactRef.current) {
      return styles.pulse;
    } else if (element === imgOverlayRef.current) {
      return styles.bounceInFromLeftAnimation;
    }
    return "";
  }

  return (
    <div id="aboutMe" className={styles.aboutMeContainer}>
      <div className={styles.imageContainer}>
        <div ref={imgOverlayRef} className={styles.imageOverlay}>
          <Image
            src={profilePic}
            alt="Picture of the author"
            className={styles.selfImage}
          />
        </div>
      </div>
      <div className={styles.selfInformationContainer}>
        <p ref={titleRef} className={styles.title}>
          So, who am I?
        </p>
        <div ref={infoRef} className={styles.information}>
          <p>
            Hi, I'm Murali Singh, a Fullstack Developer from India with
            experience in building scalable web and mobile applications.
          </p>
          <br />
          <p>I have worked on high-impact projects, such as:</p>
          <ul>
            <li>
              <strong>GoldSmith AI</strong>: Designed and implemented a
              ChatGPT-style chatbot from scratch, significantly improving user
              engagement with AI integration.
            </li>
            <li>
              <strong>Trawl International Solutions</strong>: Developed a CRM
              platform designed to streamline the engagement process for
              community members, enhancing communication and fostering stronger
              connections.
            </li>
          </ul>
          <br />
          {/* <h4>Why I am a Great Fit for your team:</h4>
          <ul>
            <li>
              <strong>Technical Proficiency</strong>
            </li>
            <li>
              <strong>Remote Collaboration Expertise</strong>
            </li>
            <li>
              <strong>Task-Driven, Not Bound by Fixed Hours</strong>
            </li>
            <li>
              <strong>Results-Oriented Approach</strong>
            </li>
            <li>
              <strong>Adaptable to Local Time Zones</strong>
            </li>
          </ul> */}
        </div>

        <Link
          href="https://cal.com/murali-singh/30min"
          target="_blank"
        >
          <button
            ref={contactRef}
            className={styles.contactMeButton}
            // onClick={() =>
            //   window.open(
            //     "https://drive.google.com/file/d/1WHIXmMFif8_XeQ-pSBNwRjpBMiJC7Urh/view"
            //   )
            // }
          >
            Let's talk &rarr;
          </button>
        </Link>
      </div>
    </div>
  );
}
