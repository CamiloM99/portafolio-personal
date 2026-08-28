import styles from './Projects.module.css';

export const ProjectCard = ({ titulo, descripcion, imagen, link }) => {
    return (
        <div className={styles.card}>
            <img src={imagen} alt={titulo} />
            <h3>{titulo}</h3>
            <p>{descripcion}</p>
            <a href={link} target="_blank" rel="noreferrer">Ver proyecto</a>
        </div>
    );
};