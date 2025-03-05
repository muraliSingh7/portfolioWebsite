import SkillInfo from "./skillInfo";
import github from "../../../public/skills/github.svg";
import express from "../../../public/skills/express.svg";
import nextjs from "../../../public/skills/nextjs.svg";
import nodejs from "../../../public/skills/nodejs.svg";
import mongodb from "../../../public/skills/mongodb.svg";
import html from "../../../public/skills/html.svg";
import css from "../../../public/skills/css.svg";
import javascript from "../../../public/skills/javascript.svg";
import typescript from "../../../public/skills/typescript.svg";
import flutter from "../../../public/skills/flutter.svg";
import firebase from "../../../public/skills/firebase.svg";
import tailwind from "../../../public/skills/tailwind.svg";
import bootstrap from "../../../public/skills/bootstrap.svg";
import react from "../../../public/skills/react.svg";

const skillCards: SkillInfo[] = [
  {
    skillIconImage: html,
    skillName: "HTML5",
  },
  {
    skillIconImage: css,
    skillName: "CSS",
  },
  {
    skillIconImage: javascript,
    skillName: "Javascript",
  },
  {
    skillIconImage: typescript,
    skillName: "Typescript",
  },
  {
    skillIconImage: nodejs,
    skillName: "NodeJS",
  },
  { skillIconImage: express, skillName: "ExpressJS" },
  { skillIconImage: mongodb, skillName: "MongoDB" },
  {
    skillIconImage: flutter,
    skillName: "Flutter",
  },
  {
    skillIconImage: firebase,
    skillName: "Firebase",
  },
  { skillIconImage: github, skillName: "GitHub" },
  {
    skillIconImage: bootstrap,
    skillName: "Bootstrap",
  },
  {
    skillIconImage: react,
    skillName: "React",
  },
  { skillIconImage: nextjs, skillName: "NextJS" },
  {
    skillIconImage: tailwind,
    skillName: "Tailwind CSS",
  },
];

export default skillCards;
