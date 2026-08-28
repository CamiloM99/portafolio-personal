import styles from './About.module.css';

export const SkillBadge = ({ habilidades }) => {
    return (
        <div className={styles.skills}>
            {habilidades.map((h) => (
                <span key={h} className={styles.badge}>{h}</span>
            ))}
        </div>
    );
};