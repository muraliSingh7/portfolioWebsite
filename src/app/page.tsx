import { default as AboutMe } from './AboutMe/page';
import { default as ContactMe } from './ContactMe/page';
import { default as Education } from './Education/page';
import { default as Experience} from './Experience/page';
import { default as Footer } from './Footer/page';
import { default as CustomNavbar } from './Header/page';
import { default as Projects } from './Projects/page';
import { default as Skills } from './Skills/page';

export default function Home() {
  return (
    <>
    <CustomNavbar></CustomNavbar>
    <AboutMe></AboutMe>
    <Experience></Experience>
    <Skills></Skills>
    <Projects></Projects>
    <Education></Education>
    <ContactMe></ContactMe>
    <Footer></Footer>
    </>
  )
}
