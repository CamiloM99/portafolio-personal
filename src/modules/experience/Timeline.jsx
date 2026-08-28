import { ExperienceItem } from './ExperienceItem';
import styles from './Experience.module.css';

export const Timeline = ({ experiencias }) => {
    return (
        <div className={styles.timeline}>
            {experiencias.map((exp) => (
                <ExperienceItem key={exp.id} {...exp} />
            ))}
        </div>
    );
};