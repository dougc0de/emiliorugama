class ProcedurePageRenderer {
    constructor(repository, rootSelector) {
        this.repository = repository;
        this.root = document.querySelector(rootSelector);
    }

    render() {
        if (!this.root) {
            return;
        }

        const slug = new URLSearchParams(window.location.search).get("slug");
        const procedure = this.repository.bySlug(slug) ?? this.repository.all[0];

        document.title = `${procedure.name} | Dr. Emilio Rugama`;
        this.root.innerHTML = this.template(procedure);
    }

    template(procedure) {
        const [toneA, toneB, toneC] = procedure.palette;
        const heroVisual = `
            <div class="detail-hero-art" style="background: linear-gradient(135deg, ${toneA}, ${toneB} 55%, ${toneC});">
                <span>${procedure.badge}</span>
                <strong>${procedure.galleryCount} imágenes disponibles</strong>
                ${procedure.heroImage ? `<img class="detail-hero-photo" src="${procedure.heroImage}" alt="${procedure.name}" onerror="this.remove()">` : ""}
            </div>
        `;
        const galleryVisuals = procedure.galleryImages?.length
            ? procedure.galleryImages
                .map(
                    (imagePath, index) => `
                        <div class="detail-thumb">
                            <span class="detail-thumb-fallback" style="background: linear-gradient(135deg, ${index % 2 === 0 ? toneA : toneB}, ${toneC});">${procedure.gallery[index] || `Imagen ${index + 1}`}</span>
                            <img src="${imagePath}" alt="${procedure.name} imagen ${index + 1}" onerror="this.remove()">
                        </div>
                    `
                )
                .join("")
            : procedure.gallery
                .map(
                    (label, index) => `
                        <div class="detail-thumb" style="background: linear-gradient(135deg, ${index % 2 === 0 ? toneA : toneB}, ${toneC});">
                            <span>${label}</span>
                        </div>
                    `
                )
                .join("");

        return `
            <section class="procedure-hero section-pad">
                <div class="container procedure-hero-grid">
                    <div class="section-heading reveal">
                        <a class="back-link" href="./cirugia-estetica.html">Volver a cirugía estética</a>
                        <span class="eyebrow">${procedure.category}</span>
                        <h1>${procedure.name}</h1>
                        <p>${procedure.intro}</p>
                        <div class="hero-actions">
                            <a class="button button-primary icon-button" href="https://wa.me/50589134973" target="_blank" rel="noopener noreferrer">
                                <span class="icon-whatsapp" aria-hidden="true">
                                    <svg viewBox="0 0 32 32" role="img" aria-hidden="true">
                                        <path d="M27.3 4.7A15.4 15.4 0 0 0 3.7 24.3L2 30l5.9-1.6A15.4 15.4 0 1 0 27.3 4.7Zm-11.3 23c-2.5 0-4.9-.7-7-2.1l-.5-.3-3.5 1 1-3.4-.3-.5a12.2 12.2 0 1 1 10.3 5.3Zm6.7-9.1c-.4-.2-2.2-1.1-2.6-1.2-.3-.1-.6-.2-.8.2l-.9 1.1c-.2.2-.4.3-.7.2-2-.8-3.8-2.4-4.9-4.2-.2-.3 0-.5.1-.7l.8-.9c.1-.2.2-.4.3-.6.1-.2 0-.5 0-.7 0-.2-.8-2-1.1-2.7-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.7.1-1 .5s-1.4 1.3-1.4 3.2c0 1.9 1.4 3.7 1.6 4 .2.3 2.7 4.2 6.7 5.7 4 1.5 4 1 4.7.9.7-.1 2.2-.9 2.5-1.7.3-.8.3-1.5.2-1.7-.1-.2-.3-.2-.7-.4Z" fill="currentColor"/>
                                    </svg>
                                </span>
                                Solicitar valoración
                            </a>
                        </div>
                    </div>
                    <div class="detail-visual reveal">
                        ${heroVisual}
                        <div class="detail-thumb-row">
                            ${galleryVisuals}
                        </div>
                    </div>
                </div>
            </section>

            <section class="section-pad">
                <div class="container detail-layout">
                    <article class="surface-card reveal">
                        <span class="label">Descripción</span>
                        <h2>Información del procedimiento</h2>
                        <p>${procedure.longDescription}</p>
                    </article>
                    <aside class="surface-card reveal">
                        <span class="label">Contacto</span>
                        <h2>Agenda tu cita</h2>
                        <p>Este botón abre una conversación directa por WhatsApp con el número del consultorio.</p>
                        <a class="contact-phone" href="https://wa.me/50589134973" target="_blank" rel="noopener noreferrer">
                            +505 89134973
                        </a>
                    </aside>
                </div>
            </section>

            <section class="section-pad section-tint">
                <div class="container info-grid">
                    ${this.renderInfoCard("Beneficios", procedure.benefits)}
                    ${this.renderInfoCard("Candidatos ideales", procedure.candidates)}
                    ${this.renderInfoCard("Recuperación", procedure.recovery)}
                    ${this.renderInfoCard("Preguntas frecuentes", procedure.faqs)}
                </div>
            </section>
        `;
    }

    renderInfoCard(title, items) {
        return `
            <article class="surface-card reveal">
                <span class="label">${title}</span>
                <h2>${title}</h2>
                <ul class="info-list">
                    ${items.map((item) => `<li>${item}</li>`).join("")}
                </ul>
            </article>
        `;
    }
}

new SiteNavigation().init();
new ProcedurePageRenderer(procedureRepository, "#procedure-root").render();
new RevealController().init();
