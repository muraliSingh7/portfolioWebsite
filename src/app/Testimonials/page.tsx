import React from "react";
import { default as ClientCard } from "./components/clientCard/clientCard";
import styles from "./style.module.css";
import clientData from "./clientData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Testimonials() {
  return (
    <section id="testimonials" className="sectionContainer">
      <h1 className="sectionTitle">
        Clients Love{" "}
        <FontAwesomeIcon
          icon={faHeart}
          beat
          className={styles.clientHeartIcon}
        />
      </h1>
      <div className={styles.testimonialsContainer}>
        {clientData.map((clientInfo, index) => (
          <ClientCard key={clientInfo.name + index} clientInfo={clientInfo} />
        ))}
      </div>
    </section>
  );
}
