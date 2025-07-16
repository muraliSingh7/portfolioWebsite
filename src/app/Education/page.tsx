import styles from "./style.module.css";
import InstitutionCard from "./components/institutionCard/institutionCard";
import secondarySchoolImage from "../../../public/education/secondarySchoolLogo.png";
import higherSecondarySchoolImage from "../../../public/education/higherSecondarySchoolLogo.png";
import collegeImage from "../../../public/education/KJSCE-Logo.svg";

export default function Education() {
  return (
    <div id="education" className="sectionContainer">
      <h1 className="sectionTitle">My Education &#127891;</h1>
      <div className={styles.educationContainer}>
        <InstitutionCard
          index={2}
          srcImage={collegeImage}
          courseName="Bachelor Of Technology In Electronics And Telecommunications"
          institutionName="K. J. Somaiya College of Engineering"
          yearOfCompletion="2022"
        />
        <InstitutionCard
          index={1}
          srcImage={higherSecondarySchoolImage}
          courseName="Higher Secondary Certification(HSC)"
          institutionName="B.K. Birla College of Arts, Science & Commerce, Kalyan"
          yearOfCompletion="2018"
        />
        <InstitutionCard
          index={0}
          srcImage={secondarySchoolImage}
          courseName="Secondary School Certification(SSC)"
          institutionName="St.Thomas High School"
          yearOfCompletion="2016"
        />
      </div>
    </div>
  );
}
