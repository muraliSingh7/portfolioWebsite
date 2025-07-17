import { ProjectInfo } from "./projectInfo";
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
      "A store that feels grounded.",
      "Nature at the center. Commerce with care.",
      "Built to hold products that speak to the planet.",
      "Cart. Wishlist. Order.",
      "The flow is clear, the path is easy.",
      "Razorpay powers the motion, payments without pause.",
      "An admin page keeps track.",
      "Inventory made simple.",
      "I added a quiet layer:",
      "A Python service that listens.",
      "It emails when something shifts,",
      "A refund, a delivery, a moment.",
      "Links below, if you are curious.",
      "This is one of many.",
      "Built from zero. Built with intention."
    ]
    ,
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
    projectDescription:
      [
        "We gathered as a remote team, spread across borders, to shape a mobile-first recipe app from the ground up.",
        "We listened.",
        "Then built.",
        "One of us took the lead.",
        "I brought the ;View Recipe Detail' page to life—pixel for pixel, word for word.",
        "Behind the scenes, logic was forged.",
        "SQL queries for login, sign-up, favoriting, bookmarking each crafted to hold the user's intent in PostgreSQL.",
        "We moved fast.",
        "We co-developed the home page.",
        "We deployed on Render.",
        "The app stood live.",
        "We left the noise.",
        "We built with intent.",
        "This is what was shipped."
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
      "The wild calls.",
      "So I built a place to share stories, to review trails, to discover camps.",
      "A home for adventurers.",
      "Responsive layouts, crafted with care using media queries.",
      "Endpoints, wired for CRUD operations on MongoDB, speaking through Express.",
      "Middleware, guarding every route, locking it tight with JWT-based authentication.",
      "Every piece built for trust, speed, clarity.",
      "I didn't just build a site.",
      "I built a campfire.",
      "You bring the stories."
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
      "Travel, isn't just booking.",
      "It's choosing, filtering, searching with purpose.",
      "This app makes that fast and quiet.",
      "Search one-way, roundtrip, multi-way.",
      "Endpoints crafted to understand every route.",
      "ForerunnerDB powers the filters.",
      "Auto-search glides through names with debounced inputs, ensuring smooth skies.",
      "From airport to airport.",
      "I let users move how they want.",
      "No noise. Just motion."
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
