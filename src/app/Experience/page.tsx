import styles from './style.module.css';
import experienceData from './experienceData';
import ExperienceInfo from './experienceInfo';
import ExperienceCard from './components/experienceCard/experienceCard';

export default function Experience() {
    const experienceCards = experienceData.map((experienceInfo: ExperienceInfo, index: number) => (
        <ExperienceCard
            key={'experience' + index}
            {...experienceInfo}
            alignment={index % 2 == 0 ? 'left' : 'right'}
        />
    ));
    return (
        <div id="experience" className="sectionContainer">
            <h1 className="sectionTitle">
                <span>&nbsp;My Experience &#128188;</span>
            </h1>
            <div className={styles.experienceTimeline}>
                {experienceCards}
            </div>
        </div>
    )
}
