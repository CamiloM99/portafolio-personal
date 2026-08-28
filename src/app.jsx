import { ProfileImage } from './modules/Hero/ProfileImage';
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
                <ProfileImage
                    src="https://placehold.co/150x150"
                    alt="Foto de perfil"
                />
                <Headline nombre="Tu Nombre" titulo="Desarrollador Frontend" />
                <CallToAction texto="Contáctame" href="#contact" />
            </section>

            <section id="about" className={aboutStyles.about}>
                <Biography texto="Escribe aquí tu perfil profesional." />
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