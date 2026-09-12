import { useEffect } from "react";
import { Link } from "react-router-dom";

import "./PrivacyNotice.css";

const privacyInformation = {
    companyName: "[RAZÓN SOCIAL COMPLETA]",
    commercialName: "Serveco Group",
    address: "[DOMICILIO COMPLETO DE LA EMPRESA]",
    privacyEmail: "[CORREO PARA DATOS PERSONALES]",
    lastUpdate: "10 de septiembre de 2026",
};

function PrivacyNotice() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "auto",
        });
    }, []);

    return (
        <main className="privacy">
            <div className="privacy__glow privacy__glow--one" />
            <div className="privacy__glow privacy__glow--two" />

            <header className="privacy__hero">
                <div className="privacy__container">
                    <Link
                        to="/"
                        className="privacy__back"
                    >
                        <span aria-hidden="true">←</span>
                        Regresar al inicio
                    </Link>

                    <span className="privacy__eyebrow">
                        Protección de datos personales
                    </span>

                    <h1>Aviso de privacidad</h1>

                    <p>
                        En Serveco Group respetamos tu privacidad y
                        protegemos la información personal que nos
                        proporcionas.
                    </p>

                    <span className="privacy__updated">
                        Última actualización:{" "}
                        {privacyInformation.lastUpdate}
                    </span>
                </div>
            </header>

            <div className="privacy__layout privacy__container">
                <aside className="privacy__index">
                    <span>Contenido</span>

                    <nav aria-label="Contenido del aviso">
                        <a href="#responsable">
                            01. Responsable
                        </a>

                        <a href="#datos">
                            02. Datos personales
                        </a>

                        <a href="#finalidades">
                            03. Finalidades
                        </a>

                        <a href="#transferencias">
                            04. Transferencias
                        </a>

                        <a href="#derechos">
                            05. Derechos ARCO
                        </a>

                        <a href="#limitacion">
                            06. Limitación y revocación
                        </a>

                        <a href="#seguridad">
                            07. Seguridad
                        </a>

                        <a href="#cambios">
                            08. Cambios al aviso
                        </a>
                    </nav>
                </aside>

                <article className="privacy__content">
                    <section
                        id="responsable"
                        className="privacy__section"
                    >
                        <span className="privacy__number">
                            01
                        </span>

                        <h2>Identidad del responsable</h2>

                        <p>
                            <strong>
                                {privacyInformation.companyName}
                            </strong>
                            , comercialmente conocida como{" "}
                            <strong>
                                {privacyInformation.commercialName}
                            </strong>
                            , es responsable del tratamiento, uso,
                            almacenamiento y protección de los datos
                            personales que recabe.
                        </p>

                        <div className="privacy__information">
                            <div>
                                <span>Responsable</span>
                                <strong>
                                    {privacyInformation.companyName}
                                </strong>
                            </div>

                            <div>
                                <span>Domicilio</span>
                                <strong>
                                    {privacyInformation.address}
                                </strong>
                            </div>

                            <div>
                                <span>Contacto de privacidad</span>
                                <strong>
                                    {privacyInformation.privacyEmail}
                                </strong>
                            </div>
                        </div>
                    </section>

                    <section
                        id="datos"
                        className="privacy__section"
                    >
                        <span className="privacy__number">
                            02
                        </span>

                        <h2>Datos personales tratados</h2>

                        <p>
                            Dependiendo de la relación que mantengas
                            con Serveco Group, podremos recabar las
                            siguientes categorías de información:
                        </p>

                        <ul className="privacy__list">
                            <li>
                                Datos de identificación, como nombre
                                completo y firma.
                            </li>

                            <li>
                                Datos de contacto, como teléfono,
                                correo electrónico y domicilio.
                            </li>

                            <li>
                                Datos laborales y profesionales, como
                                experiencia, puesto, referencias,
                                habilidades y currículum.
                            </li>

                            <li>
                                Datos académicos, como estudios,
                                certificaciones y formación.
                            </li>

                            <li>
                                Datos fiscales, administrativos o de
                                facturación cuando sean necesarios
                                para la prestación de servicios.
                            </li>

                            <li>
                                Información proporcionada mediante
                                WhatsApp, correo electrónico, redes
                                sociales o cualquier otro canal de
                                contacto.
                            </li>

                            <li>
                                Datos técnicos de navegación, como
                                dirección IP, dispositivo, navegador
                                y actividad dentro del sitio, cuando
                                se utilicen herramientas de medición
                                o cookies.
                            </li>
                        </ul>

                        <div className="privacy__notice">
                            <strong>Datos personales sensibles</strong>

                            <p>
                                Cuando resulte estrictamente necesario
                                para la prestación de servicios de
                                salud, seguridad laboral o procesos
                                específicos de recursos humanos,
                                Serveco Group podría tratar información
                                relacionada con el estado de salud.
                                Estos datos serán tratados con medidas
                                reforzadas de seguridad y, cuando la
                                legislación lo requiera, mediante
                                consentimiento expreso.
                            </p>
                        </div>
                    </section>

                    <section
                        id="finalidades"
                        className="privacy__section"
                    >
                        <span className="privacy__number">
                            03
                        </span>

                        <h2>Finalidades del tratamiento</h2>

                        <h3>Finalidades primarias</h3>

                        <p>
                            Los datos personales podrán utilizarse
                            para:
                        </p>

                        <ul className="privacy__list">
                            <li>
                                Atender solicitudes de información,
                                cotizaciones y mensajes.
                            </li>

                            <li>
                                Identificar las necesidades de cada
                                cliente y ofrecer soluciones
                                relacionadas con nuestros servicios.
                            </li>

                            <li>
                                Gestionar relaciones comerciales,
                                contractuales y administrativas.
                            </li>

                            <li>
                                Prestar y dar seguimiento a servicios
                                de recursos humanos, catering,
                                producción, protección personal,
                                publicidad y salud empresarial.
                            </li>

                            <li>
                                Gestionar procesos de reclutamiento,
                                selección, evaluación y vinculación
                                laboral.
                            </li>

                            <li>
                                Verificar información académica,
                                profesional, laboral y referencias,
                                cuando resulte necesario.
                            </li>

                            <li>
                                Cumplir obligaciones legales,
                                contractuales, fiscales y de seguridad.
                            </li>

                            <li>
                                Atender aclaraciones, solicitudes y
                                seguimiento posterior a la prestación
                                de un servicio.
                            </li>
                        </ul>

                        <h3>Finalidades secundarias</h3>

                        <p>
                            Cuando corresponda, también podremos
                            utilizar tus datos para enviar información
                            comercial, novedades, promociones,
                            encuestas de satisfacción y comunicaciones
                            relacionadas con Serveco Group.
                        </p>

                        <p>
                            Puedes solicitar que tus datos no sean
                            utilizados para estas finalidades mediante
                            el correo de privacidad indicado en este
                            aviso.
                        </p>
                    </section>

                    <section
                        id="transferencias"
                        className="privacy__section"
                    >
                        <span className="privacy__number">
                            04
                        </span>

                        <h2>Transferencias de datos</h2>

                        <p>
                            Los datos personales podrán compartirse,
                            únicamente cuando resulte necesario, con:
                        </p>

                        <ul className="privacy__list">
                            <li>
                                Clientes que soliciten servicios de
                                reclutamiento y selección.
                            </li>

                            <li>
                                Proveedores que apoyen en la operación,
                                administración o prestación de los
                                servicios.
                            </li>

                            <li>
                                Profesionales de salud o especialistas
                                autorizados involucrados en la
                                prestación de un servicio contratado.
                            </li>

                            <li>
                                Autoridades competentes cuando exista
                                una obligación legal o requerimiento
                                formal.
                            </li>
                        </ul>

                        <p>
                            Serveco Group procurará que las personas
                            receptoras mantengan medidas adecuadas de
                            confidencialidad y protección. Cuando una
                            transferencia requiera consentimiento,
                            este será solicitado conforme a la
                            legislación aplicable.
                        </p>
                    </section>

                    <section
                        id="derechos"
                        className="privacy__section"
                    >
                        <span className="privacy__number">
                            05
                        </span>

                        <h2>Derechos ARCO</h2>

                        <p>
                            Como titular de tus datos personales
                            puedes ejercer los siguientes derechos:
                        </p>

                        <div className="privacy__rights">
                            <div>
                                <strong>A</strong>

                                <span>
                                    <b>Acceso</b>
                                    Conocer qué datos personales
                                    conservamos y cómo los utilizamos.
                                </span>
                            </div>

                            <div>
                                <strong>R</strong>

                                <span>
                                    <b>Rectificación</b>
                                    Solicitar la corrección o
                                    actualización de datos incorrectos.
                                </span>
                            </div>

                            <div>
                                <strong>C</strong>

                                <span>
                                    <b>Cancelación</b>
                                    Solicitar que tus datos sean
                                    eliminados cuando corresponda.
                                </span>
                            </div>

                            <div>
                                <strong>O</strong>

                                <span>
                                    <b>Oposición</b>
                                    Oponerte al uso de tus datos para
                                    determinadas finalidades.
                                </span>
                            </div>
                        </div>

                        <p>
                            Para ejercer estos derechos deberás enviar
                            una solicitud a:
                        </p>

                        <a
                            href={`mailto:${privacyInformation.privacyEmail}`}
                            className="privacy__email"
                        >
                            {privacyInformation.privacyEmail}
                            <span aria-hidden="true">↗</span>
                        </a>

                        <p>
                            La solicitud deberá incluir nombre,
                            información de contacto, descripción clara
                            del derecho que deseas ejercer y, cuando
                            resulte necesario, documentos que permitan
                            acreditar tu identidad o representación
                            legal.
                        </p>
                    </section>

                    <section
                        id="limitacion"
                        className="privacy__section"
                    >
                        <span className="privacy__number">
                            06
                        </span>

                        <h2>
                            Limitación del uso y revocación
                        </h2>

                        <p>
                            Puedes solicitar la limitación del uso o
                            divulgación de tus datos, así como revocar
                            el consentimiento previamente otorgado,
                            enviando una solicitud al correo de
                            privacidad.
                        </p>

                        <p>
                            La revocación no tendrá efectos
                            retroactivos y podrá estar sujeta a las
                            obligaciones legales o contractuales que
                            requieran conservar determinada
                            información durante un plazo específico.
                        </p>
                    </section>

                    <section
                        id="seguridad"
                        className="privacy__section"
                    >
                        <span className="privacy__number">
                            07
                        </span>

                        <h2>Medidas de seguridad</h2>

                        <p>
                            Serveco Group implementará medidas
                            administrativas, técnicas y físicas
                            razonables para proteger los datos
                            personales contra daño, pérdida,
                            alteración, destrucción, acceso o
                            tratamiento no autorizado.
                        </p>

                        <p>
                            Sin embargo, ninguna transmisión de
                            información por internet puede garantizar
                            una seguridad absoluta. Por ello,
                            recomendamos no enviar información
                            sensible mediante canales que no hayan
                            sido expresamente habilitados para ese
                            propósito.
                        </p>
                    </section>

                    <section
                        id="cambios"
                        className="privacy__section"
                    >
                        <span className="privacy__number">
                            08
                        </span>

                        <h2>Cambios al aviso de privacidad</h2>

                        <p>
                            Serveco Group podrá modificar este aviso
                            para incorporar cambios legales,
                            operativos o relacionados con sus
                            servicios.
                        </p>

                        <p>
                            Las actualizaciones serán publicadas en
                            esta misma página e indicarán la fecha de
                            su última modificación.
                        </p>
                    </section>

                    <footer className="privacy__footer">
                        <div>
                            <span>
                                ¿Tienes dudas sobre tus datos?
                            </span>

                            <h2>
                                Comunícate con nuestro responsable de
                                privacidad.
                            </h2>
                        </div>

                        <Link
                            to="/contacto"
                            className="privacy__contact"
                        >
                            Contactar
                            <span aria-hidden="true">→</span>
                        </Link>
                    </footer>
                </article>
            </div>
        </main>
    );
}

export default PrivacyNotice;