import { Link } from "react-router-dom";

import "./PrivacyNotice.css";
import usePageTitle from "../hooks/usePageTitle.js";


const responsibleName = "Serveco Group";
const privacyEmail = "servecogroup.adm@gmail.com";

function PrivacyNotice() {
    usePageTitle("Aviso de privacidad");
    return (
        <main className="privacy-notice">
            <div
                className="privacy-notice__glow privacy-notice__glow--one"
                aria-hidden="true"
            />

            <div
                className="privacy-notice__glow privacy-notice__glow--two"
                aria-hidden="true"
            />

            <div className="privacy-notice__container">
                <header className="privacy-notice__header">
                    <span className="privacy-notice__eyebrow">
                        Protección de datos personales
                    </span>

                    <h1>Aviso de privacidad</h1>

                    <p>
                        En {responsibleName} respetamos tu
                        privacidad y protegemos la información
                        personal que compartes con nosotros.
                    </p>

                    <span className="privacy-notice__updated">
                        Última actualización: 12 de septiembre de
                        2026
                    </span>
                </header>

                <div className="privacy-notice__layout">
                    <aside className="privacy-notice__index">
                        <span>Contenido</span>

                        <nav aria-label="Contenido del aviso">
                            <a href="#responsable">
                                Responsable
                            </a>

                            <a href="#datos">
                                Datos recabados
                            </a>

                            <a href="#finalidades">
                                Finalidades
                            </a>

                            <a href="#transferencias">
                                Transferencias
                            </a>

                            <a href="#derechos-arco">
                                Derechos ARCO
                            </a>

                            <a href="#cambios">
                                Modificaciones
                            </a>
                        </nav>
                    </aside>

                    <article className="privacy-notice__content">
                        <section id="responsable">
                            <span className="privacy-notice__number">
                                01
                            </span>

                            <h2>Responsable del tratamiento</h2>

                            <p>
                                {responsibleName} es responsable del
                                tratamiento, uso, protección y
                                resguardo de los datos personales que
                                las personas usuarias proporcionen a
                                través de este sitio web, WhatsApp,
                                correo electrónico, redes sociales o
                                cualquier otro canal oficial de
                                contacto.
                            </p>

                            <p>
                                Para cualquier asunto relacionado con
                                privacidad y protección de datos
                                personales, puedes comunicarte mediante:
                            </p>

                            <a
                                className="privacy-notice__email"
                                href={`mailto:${privacyEmail}`}
                            >
                                {privacyEmail}
                            </a>
                        </section>

                        <section id="datos">
                            <span className="privacy-notice__number">
                                02
                            </span>

                            <h2>Datos personales recabados</h2>

                            <p>
                                Dependiendo de la interacción que
                                mantengas con nosotros, podremos
                                recabar los siguientes datos:
                            </p>

                            <ul>
                                <li>Nombre completo.</li>

                                <li>
                                    Número telefónico y cuenta de
                                    WhatsApp.
                                </li>

                                <li>Correo electrónico.</li>

                                <li>
                                    Empresa, puesto o área de trabajo.
                                </li>

                                <li>
                                    Información proporcionada dentro de
                                    solicitudes de cotización.
                                </li>

                                <li>
                                    Información relacionada con el
                                    servicio de tu interés.
                                </li>

                                <li>
                                    Datos incluidos voluntariamente en
                                    currículums o solicitudes laborales.
                                </li>

                                <li>
                                    Información técnica básica, como
                                    navegador, dispositivo, dirección IP
                                    aproximada y actividad dentro del
                                    sitio, cuando se utilicen herramientas
                                    analíticas.
                                </li>
                            </ul>

                            <div className="privacy-notice__notice">
                                <strong>
                                    Datos personales sensibles
                                </strong>

                                <p>
                                    Este sitio no solicita directamente
                                    datos sensibles. Te recomendamos no
                                    enviar información médica, financiera
                                    o especialmente protegida mediante
                                    formularios, WhatsApp o redes sociales.
                                    Cuando un servicio requiera esta clase
                                    de información, se proporcionará el
                                    aviso correspondiente y se solicitará
                                    el consentimiento aplicable.
                                </p>
                            </div>
                        </section>

                        <section id="finalidades">
                            <span className="privacy-notice__number">
                                03
                            </span>

                            <h2>Finalidades del tratamiento</h2>

                            <p>
                                Los datos personales podrán utilizarse
                                para las siguientes finalidades
                                necesarias:
                            </p>

                            <ul>
                                <li>
                                    Atender solicitudes de información.
                                </li>

                                <li>
                                    Preparar y dar seguimiento a
                                    cotizaciones.
                                </li>

                                <li>
                                    Identificar las necesidades de cada
                                    cliente.
                                </li>

                                <li>
                                    Brindar información sobre nuestros
                                    servicios.
                                </li>

                                <li>
                                    Establecer comunicación comercial,
                                    administrativa u operativa.
                                </li>

                                <li>
                                    Gestionar relaciones contractuales y
                                    prestar los servicios solicitados.
                                </li>

                                <li>
                                    Atender aclaraciones, comentarios,
                                    quejas o solicitudes.
                                </li>

                                <li>
                                    Gestionar candidaturas cuando una
                                    persona comparta información con
                                    fines laborales.
                                </li>

                                <li>
                                    Cumplir obligaciones legales y
                                    contractuales.
                                </li>
                            </ul>

                            <h3>Finalidades secundarias</h3>

                            <p>
                                Cuando resulte aplicable, también podremos
                                utilizar tus datos para enviar información
                                comercial, novedades, promociones,
                                encuestas de satisfacción o comunicaciones
                                relacionadas con nuestros servicios.
                            </p>

                            <p>
                                Puedes solicitar que tus datos no sean
                                utilizados para estas finalidades
                                escribiendo a{" "}
                                <a href={`mailto:${privacyEmail}`}>
                                    {privacyEmail}
                                </a>.
                            </p>
                        </section>

                        <section id="transferencias">
                            <span className="privacy-notice__number">
                                04
                            </span>

                            <h2>Transferencias de información</h2>

                            <p>
                                No comercializamos ni vendemos datos
                                personales.
                            </p>

                            <p>
                                La información podrá compartirse con
                                proveedores que apoyen la operación,
                                alojamiento, comunicación, administración
                                o prestación de servicios de{" "}
                                {responsibleName}, siempre bajo medidas
                                de confidencialidad y protección
                                adecuadas.
                            </p>

                            <p>
                                También podrá comunicarse a autoridades
                                competentes cuando exista una obligación
                                legal, requerimiento debidamente fundado
                                o alguna de las excepciones previstas en
                                la legislación aplicable.
                            </p>
                        </section>

                        <section id="derechos-arco">
                            <span className="privacy-notice__number">
                                05
                            </span>

                            <h2>Derechos ARCO</h2>

                            <p>
                                Como titular de tus datos personales,
                                puedes ejercer los derechos de:
                            </p>

                            <div className="privacy-notice__rights">
                                <div>
                                    <strong>Acceso</strong>

                                    <span>
                                        Conocer qué datos conservamos y
                                        cómo los utilizamos.
                                    </span>
                                </div>

                                <div>
                                    <strong>Rectificación</strong>

                                    <span>
                                        Solicitar la corrección o
                                        actualización de tus datos.
                                    </span>
                                </div>

                                <div>
                                    <strong>Cancelación</strong>

                                    <span>
                                        Solicitar su eliminación cuando
                                        legalmente proceda.
                                    </span>
                                </div>

                                <div>
                                    <strong>Oposición</strong>

                                    <span>
                                        Oponerte al tratamiento para
                                        determinadas finalidades.
                                    </span>
                                </div>
                            </div>

                            <p>
                                Para ejercer estos derechos, limitar el
                                uso o divulgación de tus datos o revocar
                                tu consentimiento, envía una solicitud a:
                            </p>

                            <a
                                className="privacy-notice__email"
                                href={`mailto:${privacyEmail}`}
                            >
                                {privacyEmail}
                            </a>

                            <p>
                                La solicitud deberá contener tu nombre,
                                un medio para recibir notificaciones, una
                                descripción clara del derecho que deseas
                                ejercer y los elementos necesarios para
                                localizar la información. También será
                                necesario acreditar la identidad de la
                                persona titular o de su representante
                                legal.
                            </p>

                            <p>
                                La solicitud será atendida dentro de los
                                plazos establecidos por la legislación
                                aplicable.
                            </p>
                        </section>


                        <section id="seguridad">
                            <span className="privacy-notice__number">
                                07
                            </span>

                            <h2>Seguridad y conservación</h2>

                            <p>
                                Aplicamos medidas administrativas,
                                técnicas y organizativas razonables para
                                proteger la información contra pérdida,
                                alteración, acceso, divulgación o uso no
                                autorizado.
                            </p>

                            <p>
                                Los datos serán conservados únicamente
                                durante el tiempo necesario para cumplir
                                las finalidades descritas, las obligaciones
                                contractuales y los periodos legales
                                aplicables.
                            </p>
                        </section>

                        <section id="cambios">
                            <span className="privacy-notice__number">
                                08
                            </span>

                            <h2>Modificaciones al aviso</h2>

                            <p>
                                {responsibleName} podrá modificar este
                                aviso para reflejar cambios legales,
                                operativos o relacionados con nuestros
                                servicios.
                            </p>

                            <p>
                                Cualquier actualización será publicada en
                                esta misma página e indicará la fecha de
                                su última modificación.
                            </p>
                        </section>

                        <section className="privacy-notice__consent">
                            <h2>Consentimiento</h2>

                            <p>
                                Al proporcionar voluntariamente tus datos
                                personales a través de nuestros canales,
                                reconoces haber consultado este aviso de
                                privacidad y aceptas el tratamiento
                                correspondiente, salvo que manifiestes lo
                                contrario mediante los mecanismos
                                descritos.
                            </p>
                        </section>
                    </article>
                </div>

                <footer className="privacy-notice__footer">
                    <Link to="/">
                        <span aria-hidden="true">←</span>
                        Regresar al inicio
                    </Link>
                </footer>
            </div>
        </main>
    );
}

export default PrivacyNotice;