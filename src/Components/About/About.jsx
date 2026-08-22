import "./About.css";

const values = [
    {
        number: "01",
        title: "Enfoque humano",
        description:
            "Construimos soluciones pensando primero en las personas.",
    },
    {
        number: "02",
        title: "Confidencialidad y ética",
        description:
            "Trabajamos con responsabilidad, transparencia y respeto.",
    },
    {
        number: "03",
        title: "Resultados medibles",
        description:
            "Convertimos necesidades empresariales en objetivos concretos.",
    },
    {
        number: "04",
        title: "Relaciones que generan valor",
        description:
            "Creamos alianzas duraderas basadas en confianza y compromiso.",
    },
];

function About() {
    return (
        <section className="about" id="nosotros">
            <div className="about__glow" />

            <div className="about__container">
                <header className="about__header">
                    <div className="about__heading">
                        <span className="about__eyebrow">
                            Nosotros
                        </span>

                        <h2>
                            Integramos soluciones.
                            <span>
                                Construimos relaciones que generan valor.
                            </span>
                        </h2>
                    </div>

                    <div className="about__introduction">
                        <p>
                            Somos un grupo especializado en diseñar e
                            integrar soluciones que fortalecen a las
                            empresas, sus operaciones y su talento.
                        </p>

                        <p>
                            Trabajamos junto a nuestros clientes para
                            entender sus necesidades y convertirlas en
                            estrategias funcionales, confiables y
                            adaptadas a cada organización.
                        </p>
                    </div>
                </header>

                <div className="about__statement">
                    <div className="about__statement-mark">
                        <span>S</span>
                    </div>

                    <blockquote>
                        “Soluciones integrales diseñadas para impulsar
                        el talento y fortalecer el crecimiento de tu
                        empresa.”
                    </blockquote>

                    <span className="about__statement-label">
                        Integración de alto impacto
                    </span>
                </div>

                <div className="about__values">
                    {values.map((value) => (
                        <article
                            className="about__value"
                            key={value.number}
                        >
                            <span className="about__value-number">
                                {value.number}
                            </span>

                            <h3>{value.title}</h3>

                            <p>{value.description}</p>
                        </article>
                    ))}
                </div>

                <div className="about__experience">
                    <div>
                        <span className="about__experience-number">
                            05
                        </span>

                        <p>
                            Líneas de servicio especializadas
                        </p>
                    </div>

                    <div>
                        <span className="about__experience-number">
                            360°
                        </span>

                        <p>
                            Visión integral de las necesidades
                            empresariales
                        </p>
                    </div>

                    <div className="about__experience-message">
                        <span>
                            Grandes empresas
                        </span>

                        <strong>
                            Grandes alianzas
                        </strong>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;