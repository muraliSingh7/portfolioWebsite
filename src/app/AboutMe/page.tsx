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
            Hi, I&apos;m Murali Singh. 
            <span style={{display:"block"}}>A Fullstack Developer from India.</span>
            <span style={{display:"block"}}>I build scalable web and mobile applications.</span>
          </p>
          <br />
          <p>I have worked on what matters, such as:</p>
          <ul>
            <li>
              <strong>GoldSmith AI</strong>: Designed and implemented a Chain-of-Thought (CoT) reasoning approach prior to ChatGPT's widespread adoption, significantly enhancing user engagement through advanced AI integration.
            </li>
            <li>
              <strong>Trawl International Solutions</strong>: Created a CRM platform to streamline engagement, improve communication & grow connections that last.
            </li>
          </ul>
          <br />
        </div>

        <Link
          href="https://cal.com/murali-singh/30min"
          target="_blank"
        >
          <button
            ref={contactRef}
            className={styles.contactMeButton}
          >
            Let&apos;s talk &rarr;
          </button>
        </Link>
      </div>
    </div>
  );
}
