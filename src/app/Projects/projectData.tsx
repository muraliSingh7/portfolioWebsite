import { ProjectInfo } from "./projectInfo";
import ezlogo from "../../../public/projects/ezLogo.png";
import earthlyEcoThumbnail from "../../../public/projects/earthlyEcoThumbnail.webp";
import yelpcamp from "../../../public/projects/yelpcamp.png";
import flight from "../../../public/projects/flight.png";

export const projectData: ProjectInfo[] = [
  {
    projectName: "Earthly Eco",
    technologiesUsed: [
      "React.js",
      "Redux",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Firebase",
      "Python",
    ],
    projectDescription: [
      "Developed a nature-themed e-commerce platform with diverse categories and products.",
      "Incorporated cart and wishlist features for efficient product organization and selection.",
      "Integrated Razorpay for streamlined order and payment processing.",
      "Created an admin page for efficient inventory management.",
      "Implemented a Python-based mail service to notify users about refunded products or newly ordered items.",
    ],
    codeLink: "https://github.com/muraliSingh7/EarthlyEco",
    deployedLink: "https://maniecommercestore.web.app",
    videoLink: "",
    srcImage: earthlyEcoThumbnail,
  },
  {
    projectName: "Recigo",
    technologiesUsed: [
      "React.js",
      "TailwindCSS",
      "Node.js",
      "Express.js",
      "PostgreSQL",
    ],
    projectDescription: [
      "Partnered with a global remote team to build and launch a mobile-first recipe app.",
      "Solely developed the 'View Recipe Detail' page based on designer specifications.",
      "Crafted SQL queries for login, sign-up, favoriting, and bookmarking recipes in PostgreSQL.",
      "Collaborated to co-develop the home page and deployed the app on Render.",
    ],
    codeLink: "https://github.com/chingu-voyages/v46-tier3-team-38",
    videoLink: "",
    srcImage:
      "https://recipo-frontend.onrender.com/assets/recigo1-e6e5f85c.png",
    deployedLink: "https://recipo-frontend.onrender.com",
  },
  {
    projectName: "YelpCamp",
    technologiesUsed: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    projectDescription: [
      "Explore camping grounds, read reviews, and connect with outdoor enthusiasts on this user-friendly website. Share your experiences and discover the best spots for your next adventure",
      "Implemented responsive CSS layouts using media queries for various screen sizes.",
      "Created endpoints for CRUD operations on MongoDB using Express.",
      "Added middleware authentication for secure routes within Express.",
      "Developed authentication system from scratch using JWT (JSON Web Token).",
    ],
    codeLink: "https://github.com/muraliSingh7/campingWebsite",
    videoLink: "https://www.youtube.com/watch?v=gGzljDgcpz0",
    srcImage: yelpcamp,
    deployedLink: "https://yelpcamp-9gsq.onrender.com/landing",
  },
  {
    projectName: "FlightSearch",
    technologiesUsed: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express.js",
      "ForerunnerDB",
    ],
    projectDescription: [
      "The Flight Search Application is developed using HTML, CSS, JS, Node.js, and Express.js, enabling users to search for one-way, multi-way, and round-trip flights based on their criteria.",
      "Enabled filtering and sorting options by utilizing ForerunnerDB to manage server data.",
      "Created endpoints for different flight search types (one-way, roundtrip, multi-way) using Express.",
      "Integrated a debounced airport name auto-search for efficient API utilization.",
    ],
    codeLink: "https://github.com/muraliSingh7/toursandtravels",
    videoLink: "https://www.youtube.com/watch?v=Uk5gadtpViQ",
    srcImage: flight,
    deployedLink: "https://toursandtravels-7sng.onrender.com/flights",
  },
  // {
  //   projectName: "Location Notes",
  //   projectDescription: [
  //     "Location-based to-do list app powered by Flutter & Google Maps API.",
  //     "Create tasks for specific spots, simplifying task management.",
  //   ],
  //   technologiesUsed: ["Flutter", "Dart", "Google Maps API"],
  //   codeLink: "https://github.com/muraliSingh7/To_Do_List_App",
  //   videoLink: "https://www.youtube.com/watch?v=w9pjKrxJUCg",
  //   srcImage: "https://img.youtube.com/vi/w9pjKrxJUCg/mqdefault.jpg",
  //   deployedLink: "",
  // },
  // {
  //   projectName: "Youtube Clone",
  //   projectDescription: [
  //     "This project is built on Material UI and React. It utilizes the Rapid API for certain functionalities.",
  //   ],
  //   technologiesUsed: ["React.js", "Material UI", "Rapid API"],
  //   codeLink: "https://github.com/muraliSingh7/YoutubeClone",
  //   videoLink: "",
  //   srcImage:
  //     "https://i.pinimg.com/originals/14/e5/84/14e584760464db3248dd7c57e15d577a.jpg",
  //   deployedLink: "https://youtube-clone-ms07062000.vercel.app",
  // },
  // {
  //   projectName: "EZ Car Registration Services",
  //   projectDescription: [
  //     "EZ Car Registration Services is a dynamic website that leverages Vite and React as well as Google Sheets for blogs and customer reviews information.",
  //     "Achieving a stellar Lighthouse score of over 90, it ensures top-tier performance and great user experience"
  //   ],
  //   technologiesUsed: ["React.js", "Vite", "Google Sheets"],
  //   codeLink: "https://github.com/Honshu11/ez-car-landing-page",
  //   videoLink: "",
  //   srcImage: ezlogo,
  //   deployedLink: "https://ez-car-landing-page-alpha.vercel.app/",
  // },
  // {
  //   projectName: "Spence",
  //   projectDescription: [
  //     "Spence is a Flutter-based mobile app for tracking the shelf life of pantry items, medicines, cosmetics, and more by storing expiry dates in Firebase.",
  //   ],
  //   technologiesUsed: ["Flutter", "Firebase"],
  //   codeLink: "https://github.com/muraliSingh7/spence",
  //   videoLink: "https://www.youtube.com/watch?v=uA8kV7FX8Gw",
  //   srcImage: "https://img.youtube.com/vi/uA8kV7FX8Gw/mqdefault.jpg",
  //   deployedLink: "",
  // },
];
