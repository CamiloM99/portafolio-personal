import styles from './Hero.module.css';

export const CallToAction = ({ texto, href }) => {
    return (
        <a className={styles.cta} href={href}>
            {texto}
        </a>
    );
};