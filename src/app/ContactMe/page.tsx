"use client";
import styles from "../ContactMe/style.module.css";
import Image from "next/image";
import emailImg from "../../../public/contactMe/email.png";
import contactImg from "../../../public/contact1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHeadset,
  faMessage,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useRef, useEffect, useMemo } from "react";

export default function ContactMe() {
  const imgRef = useRef<HTMLImageElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const submitButtonRef = useRef<HTMLButtonElement>(null);
  const refs = useMemo(
    () => [imgRef, formRef, submitButtonRef],
    [imgRef, formRef, submitButtonRef]
  );
  useEffect(() => {
    const formInputFields = formRef.current?.querySelectorAll<HTMLDivElement>("div");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // console.log(entry.target===submitButtonRef.current,entry.isIntersecting);
          if (entry.isIntersecting) {
            if (entry.target === formRef.current) {
              formInputFields!.forEach((formInputField: Element, index: number) => {
                const delay = index * 0.01; // Adjust delay as needed
                formInputField.setAttribute("style", `animation-delay: ${delay}s;`);
                formInputField.classList.add(styles.formInputFieldEnterAnimation);
              });
            } else if (entry.target === submitButtonRef.current) {
              entry.target.classList.add(styles.submitButtonEnterAnimation);
            } else if (entry.target === imgRef.current) {
              entry.target.classList.add(styles.contactImageEnterAnimation);
            }
          } else {
            if (entry.target === formRef.current) {
              formInputFields!.forEach((formInputField: HTMLDivElement) => {
                formInputField.removeAttribute("style");
                formInputField.classList.remove(styles.formInputFieldEnterAnimation);
              });
            } else if (entry.target === submitButtonRef.current) {
              entry.target.classList.remove(styles.submitButtonEnterAnimation);
            } else if (entry.target === imgRef.current) {
              entry.target.classList.remove(styles.contactImageEnterAnimation);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
      }
    );

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

  return (
    <div id="contactMe" className={styles.contactContainer}>
      <div className={styles.contactImageAndFormContainer}>
        <div className={styles.contactImageContainer}>
          <Image
            ref={imgRef}
            src={contactImg}
            alt="Contact Image"
            className={styles.contactImage}
            loading="lazy"
          ></Image>
        </div>
        <form
          ref={formRef}
          autoComplete="off"
          action="https://formsubmit.co/d6ea074874fa4c9cbbd9e25cee936d63"
          method="POST"
          className={styles.contactFormContainer}
        >
          <h1 className={`sectionTitle ${styles.contactMeTitle}`} >Let’s Build Something Awesome! &#128640;</h1>
          <div className={styles.formField}>
            <label htmlFor="name" className={styles.label}>
              Name
            </label>
            <div className={styles.formInputField}>
              {/* <FontAwesomeIcon icon={faUser} className={styles.formInputFieldIcon} /> */}
              <input
                type="text"
                placeholder="Name"
                className={styles.formInput}
                name="name"
                required
              ></input>
            </div>
          </div>
          <div className={styles.formField}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <div className={styles.formInputField}>
              <Image
                src={emailImg}
                alt="Email"
                className={styles.formInputFieldIcon}
              />
              <input
                type="email"
                placeholder="Email"
                className={styles.formInput}
                name="email"
                required
              ></input>
            </div>
          </div>
          <div className={styles.formField}>
            <label htmlFor="phone" className={styles.label}>
              Phone
            </label>
            <div className={styles.formInputField}>
              {/* <FontAwesomeIcon
                icon={faPhone}
                className={styles.formInputFieldIcon}
              /> */}
              <input
                type="tel"
                placeholder="Phone"
                className={styles.formInput}
                name="phone"
                required
              ></input>
            </div>
          </div>
          <div className={styles.formField}>
            <label htmlFor="message" className={styles.label}>
              Message
            </label>
            <div className={`${styles.formInputField} ${styles.formInputMessage}`}>
              {/* <FontAwesomeIcon
                icon={faMessage}
                className={styles.formInputFieldIcon}
              /> */}
              <input
                type="text"
                placeholder="Message"
                className={styles.formInput}
                name="message"
                required
              ></input>
            </div>
          </div>
          <input type="hidden" name="_captcha" value="false"></input>
          <button
            ref={submitButtonRef}
            className={styles.submitButton}
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
