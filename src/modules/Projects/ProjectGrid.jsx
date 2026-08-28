import { ProjectCard } from './ProjectCard';
import styles from './Projects.module.css';

export const ProjectGrid = ({ proyectos }) => {
    return (
        <div className={styles.grid}>
            {proyectos.map((p) => (
                <ProjectCard key={p.id} {...p} />
            ))}
        </div>
    );
};