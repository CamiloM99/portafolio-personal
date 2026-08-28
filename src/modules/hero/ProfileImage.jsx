import styles from './Hero.module.css';

export const ProfileImage = ({ src, alt }) => {
    return <img className={styles.profileImage} src={src} alt={alt} />;
};