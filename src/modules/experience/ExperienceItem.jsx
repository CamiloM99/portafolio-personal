import styles from './Experience.module.css';

export const ExperienceItem = ({ cargo, empresa, periodo }) => {
    return (
        <div className={styles.item}>
            <h4>{cargo} — {empresa}</h4>
            <span>{periodo}</span>
        </div>
    );
};