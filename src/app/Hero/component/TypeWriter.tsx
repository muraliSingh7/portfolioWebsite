"use client";
import React, { useEffect, useState } from "react";
import styles from "./style.module.css";

interface TypewriterProps {
  toRotate: string[];
  period?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({ toRotate, period = 2000 }) => {
  const [txt, setTxt] = useState("");
  const [loopNum, setLoopNum] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let index = loopNum % toRotate.length;
    let fullTxt = toRotate[index];
    let currentText = txt;

    const typeInterval = 200;
    const deleteInterval = 200;
    const switchDelay = period;

    const typing = setInterval(() => {
      if (isTyping) {
        currentText = fullTxt.substring(0, currentText.length + 1);
        setTxt(currentText);
        if (currentText === fullTxt) {
          clearInterval(typing);
          setTimeout(() => {
            setIsTyping(false);
          }, switchDelay);
        }
      }
    }, typeInterval);

    const deleting = setInterval(() => {
      if (!isTyping && currentText.length > 0) {
        currentText = fullTxt.substring(0, currentText.length - 1);
        setTxt(currentText);
        if (currentText === "") {
          clearInterval(deleting);
          setTimeout(() => {
            setIsTyping(true);
            setLoopNum(loopNum === 1 ? 0 : 1);
          }, switchDelay);
        }
      }
    }, deleteInterval);

    return () => {
      clearInterval(typing);
      clearInterval(deleting);
    };
  }, [txt, isTyping, loopNum, toRotate, period]);

  return <span className={styles.typewriter}>{txt}</span>;
};

export default Typewriter;
