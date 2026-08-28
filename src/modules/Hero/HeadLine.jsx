import styles from './Hero.module.css';

export const Headline = ({ nombre, titulo }) => {
    return (
        <div className={styles.headline}>
            <h1>{nombre}</h1>
            <p>{titulo}</p>
        </div>
    );
};