import { getAssetUrl } from "../utils/getAssetUrl.js";

import "./ServiceGallery.css";

function ServiceGallery({
    images = [],
    serviceName = "Servicio",
}) {
    if (images.length === 0) {
        return null;
    }

    return (
        <section
            className="service-gallery"
            
            aria-labelledby="service-gallery-title"
        >
            <div className="service-gallery__background" />

            <div className="service-gallery__container">
                <header className="service-gallery__header">
                    <h2 id="service-gallery-title">
                        "Book Work"
                    </h2>
                </header>

                <div className="service-gallery__images">
                    {images.map((image, index) => (
                        <figure
                            className="service-gallery__image"
                            key={`${serviceName}-${image}`}
                        >
                            <img
                                src={getAssetUrl(image)}
                                alt={`${serviceName}, fotografía ${index + 1}`}
                                loading="lazy"
                                draggable="false"
                            />
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ServiceGallery;