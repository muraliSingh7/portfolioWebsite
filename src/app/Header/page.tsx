"use client";
import styles from "./style.module.css";
import hamburgerStyles from "./hamburgerMenu.module.css";
import React, { MouseEvent, useEffect } from "react";
import Link from "next/link";
import { Cute_Font } from "next/font/google";

const cuteFont = Cute_Font({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-cute",
});

export default function CustomNavbar() {
  const handleOnClick = (bodyElementID: String) => {
    document.body.querySelector(`[id=${bodyElementID}]`)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const handleToggle = (e: MouseEvent<HTMLDivElement>) => {
    e.currentTarget.classList.toggle(hamburgerStyles.open);
    document
      .getElementsByClassName(styles.navbar)[0]
      .classList.toggle(styles.open);
    document
      .getElementsByClassName(styles.navbarNav)[0]
      .classList.toggle(styles.open);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        document
          .getElementsByClassName(styles.navbar)[0]
          .classList.remove(styles.open);
        document
          .getElementsByClassName(styles.navbarNav)[0]
          .classList.remove(styles.open);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className={styles.navbar}>
      <p className={`${styles.logo} ${cuteFont.className}`}>{"<MS/>"}</p>
      <div className={hamburgerStyles.navIcon} onClick={handleToggle}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={styles.navbarNav}>
        <li className={styles.navItem} onClick={() => handleOnClick("aboutMe")}>
          About
        </li>
        <li
          className={styles.navItem}
          onClick={() => handleOnClick("experience")}
        >
          Experience
        </li>
        <li
          className={styles.navItem}
          onClick={() => handleOnClick("testimonials")}
        >
          Testimonials
        </li>
        <li className={styles.navItem}>
          <Link href="https://muralisingh.hashnode.dev/" target="_blank">
            Blogs
          </Link>
        </li>
        <li
          className={styles.navItem}
          onClick={() => handleOnClick("contactMe")}
        >
          Contact Me
        </li>
        <li className={styles.divider} />
        <li className={styles.resumeLink}>
        <Link
          href="https://drive.google.com/file/d/1WHIXmMFif8_XeQ-pSBNwRjpBMiJC7Urh/view"
          target="_blank"
        >
          <button className={styles.resumeButton}>Resume</button>
        </Link>
        </li>
      </ul>
    </nav>
  );
}
