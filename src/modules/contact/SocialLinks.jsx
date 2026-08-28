import styles from './Contact.module.css';

export const SocialLinks = ({ links }) => {
    return (
        <div className={styles.social}>
            {links.map((l) => (
                <a key={l.nombre} href={l.url} target="_blank" rel="noreferrer">
                    {l.nombre}
                </a>
            ))}
        </div>
    );
};