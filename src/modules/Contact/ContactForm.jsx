import { useState } from 'react';
import styles from './Contact.module.css';

export const ContactForm = () => {
    const [enviado, setEnviado] = useState(false);

    const manejarEnvio = (e) => {
        e.preventDefault();
        setEnviado(true);
    };

    return (
        <form className={styles.form} onSubmit={manejarEnvio}>
            <input type="text" placeholder="Nombre" required />
            <input type="email" placeholder="Correo" required />
            <textarea placeholder="Mensaje" required />
            <button type="submit">Enviar</button>
            {enviado && <p>¡Mensaje enviado!</p>}
        </form>
    );
};