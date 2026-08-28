import { ProfileImage } from './modules/Hero/ProfileImage';
import fotoPerfil from './assets/img/foto-perfil.jpg';
import heroStyles from './modules/Hero/Hero.module.css';
import aboutStyles from './modules/About/About.module.css';
import experienceStyles from './modules/Experience/Experience.module.css';
import contactStyles from './modules/Contact/Contact.module.css';
import { Headline } from './modules/Hero/Headline';

import { CallToAction } from './modules/Hero/CallToAction';
import { Biography } from './modules/About/Biography';
import { SkillBadge } from './modules/About/SkillBadge';
import { ProjectGrid } from './modules/Projects/ProjectGrid';
import { Timeline } from './modules/Experience/Timeline';
import { ContactForm } from './modules/Contact/ContactForm';
import { SocialLinks } from './modules/Contact/SocialLinks';
import {
    proyectosData,
    experienciaData,
    socialData,
    habilidadesData,
} from './data';

export const App = () => {
    return (
        <>
            <section id="hero" className={heroStyles.hero}>
                <ProfileImage src={fotoPerfil} alt="Foto de perfil" />

                <Headline nombre="Sung Jin-Woo" titulo="Monarca de las Sombras" />
                <CallToAction texto="Ver mis logros" href="#contact" />
            </section>

            <section id="about" className={aboutStyles.about}>
                <Biography texto="Soy un cazador que comenzó con el rango E y era conocido como el más débil de todos. Después de sobrevivir a una mazmorra doble, recibí el Sistema, gracias al cual pude subir de nivel y aumentar constantemente mis habilidades. Con cada batalla me hice más fuerte hasta convertirme en el Monarca de las Sombras. Ahora utilizo mi poder y mi ejército de sombras para proteger a las personas que me importan y enfrentar a mis enemigos." />
                <SkillBadge habilidades={habilidadesData} />
            </section>

            <section id="projects">
                <ProjectGrid proyectos={proyectosData} />
            </section>

            <section id="experience" className={experienceStyles.timeline}>
                <Timeline experiencias={experienciaData} />
            </section>

            <section id="contact">
                <ContactForm />
                <SocialLinks links={socialData} />
            </section>
        </>
    );
};