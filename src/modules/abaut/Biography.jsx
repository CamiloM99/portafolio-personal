import styles from './About.module.css';

export const Biography = ({ texto }) => {
    return (
        <div className={styles.about}>
            <h2>Sobre mí</h2>
            <p>{texto}</p>
        </div>
    );
};