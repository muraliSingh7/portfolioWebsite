"use client";
import React, { useRef } from "react";
import { ClientInfo } from "../../clientInfo";
import styles from "./style.module.css";
import Image from "next/image";
import location from "../../../../../public/testimonials/location.svg";
import quotes from "../../../../../public/testimonials/quotes.png";
import useIntersectionObserver from "@/app/hooks/useIntersectionObserver";

interface ClientCardProps {
  clientInfo: ClientInfo;
}
const clientCard: React.FC<ClientCardProps> = ({ clientInfo }) => {
  const ratingArray = new Array(5).fill(0);
  const clientCardRef = useRef<HTMLDivElement>(null);

  const onIntersection = (isIntersecting: boolean, target: Element) => {
    if (isIntersecting) {
      target.classList.add(styles.clientCardAnimation);
    } else {
      target.classList.remove(styles.clientCardAnimation);
    }
  };

  useIntersectionObserver(clientCardRef, onIntersection);

  return (
    <div ref={clientCardRef} className={styles.clientCard}>
      <div
        style={{
          backgroundImage: `url(${quotes.src})`,
        }}
        className={styles.clientReview}
      >
        <Image
          src={clientInfo.clientImage}
          width={80}
          height={80}
          className={styles.image}
          alt={clientInfo.name}
        />
        <p className={styles.review}>{clientInfo.review}</p>
        <div className={styles.ratingContainer}>
          {ratingArray.map((_, index) => (
            <svg
              key={index}
              width="46"
              height="44"
              viewBox="0 0 46 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.rating}
            >
              <path
                d="M23 0L30.0534 14.2918L45.8254 16.5836L34.4127 27.7082L37.1068 43.4164L23 36L8.89315 43.4164L11.5873 27.7082L0.174644 16.5836L15.9466 14.2918L23 0Z"
                fill="url(#paint0_linear_2035_768)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_2035_768"
                  x1="-1"
                  y1="24"
                  x2="47"
                  y2="24"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#CC3F14" />
                  <stop offset="1" stopColor="#FF6700" />
                </linearGradient>
              </defs>
            </svg>
          ))}
        </div>

        <div className={styles.clientNameAndLocation}>
          <p className={styles.clientName}>{clientInfo.name}</p>
          <div className={styles.clientLocation}>
            <Image src={location.src} width={25} height={25} alt={"Location"} />
            <span>{clientInfo.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default clientCard;
