import SkillInfo from "./skillInfo";
import github from '../../../public/github.jpg';
import express from '../../../public/express.png';
import nextjs from '../../../public/nextjs.png';

const skillCards: SkillInfo[] = [
    { skillIconImage: "https://img.icons8.com/color/48/000000/html-5--v1.png", skillName: "HTML5" },
    { skillIconImage: "https://img.icons8.com/color/48/000000/css3.png", skillName: "CSS" },
    { skillIconImage: "https://img.icons8.com/color/48/000000/javascript--v1.png", skillName: "Javascript" },
    { skillIconImage: "https://img.icons8.com/color/48/000000/typescript--v1.png", skillName: "Typescript" },
    { skillIconImage: "https://img.icons8.com/color/48/000000/nodejs.png", skillName: "NodeJS" },
    { skillIconImage: express, skillName: "ExpressJS" },
    { skillIconImage: "https://img.icons8.com/color/48/000000/mongodb.png", skillName: "MongoDB" },
    { skillIconImage: "https://img.icons8.com/color/48/000000/flutter.png", skillName: "Flutter" },
    { skillIconImage: "https://img.icons8.com/color/48/000000/firebase.png", skillName: "Firebase" },
    { skillIconImage: "https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png", skillName: "Java" },
    { skillIconImage: github, skillName: "GitHub" },
    { skillIconImage: "https://img.icons8.com/?size=48&id=EzPCiQUqWWEa&format=png", skillName: "Bootstrap" },
    { skillIconImage: "https://img.icons8.com/?size=48&id=x7XMNGh2vdqA&format=png", skillName: "Tailwind CSS" },
    { skillIconImage: "https://img.icons8.com/?size=48&id=asWSSTBrDlTW&format=png", skillName: "React" },
    { skillIconImage: nextjs, skillName: "NextJS" },
];

export default skillCards;