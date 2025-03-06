import Image from "next/image";
import { default as AboutMe } from "./AboutMe/page";
import { default as ContactMe } from "./ContactMe/page";
import { default as Education } from "./Education/page";
import { default as Experience } from "./Experience/page";
import { default as Footer } from "./Footer/page";
import { default as CustomNavbar } from "./Header/page";
import Hero from "./Hero/page";
import { default as Projects } from "./Projects/page";
import { default as Skills } from "./Skills/page";
import { default as Testimonials } from "./Testimonials/page";
import { default as WhyWorkWithMe } from "./WhyWorkWithMe/page";

export default function Home() {
  return (
    <>
      <Image
        src="/background.svg"
        alt="Background"
        width={320}
        height={320}
        className="backgroundImage"
      />
      <CustomNavbar />
      <div className="mainContainer">
        <Hero />
        <AboutMe />
        <Experience />
        <Skills />
        <Projects />
        <Testimonials />
        <Education />
        <WhyWorkWithMe />
        <ContactMe />
      </div>
      <Footer />
    </>
  );
}
