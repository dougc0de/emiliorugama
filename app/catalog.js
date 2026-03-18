class CatalogPageRenderer {
    constructor(repository) {
        this.repository = repository;
        this.root = document.querySelector("#catalog-root");
        this.nav = document.querySelector("#category-nav");
    }

    render() {
        if (!this.root || !this.nav) {
            return;
        }

        this.renderNav();
        this.renderSections();
    }

    renderNav() {
        this.nav.innerHTML = this.repository.categories
            .map((category) => {
                const anchor = this.toAnchor(category);

                return `<a class="category-pill" href="#${anchor}">${category}</a>`;
            })
            .join("");
    }

    renderSections() {
        this.root.innerHTML = this.repository.categories
            .map((category) => {
                const anchor = this.toAnchor(category);
                const procedures = this.repository.byCategory(category);

                return `
                    <section class="catalog-section reveal" id="${anchor}">
                        <div class="catalog-section-heading">
                            <span class="eyebrow">${category}</span>
                            <h2>${category}</h2>
                            <p>Cuadros visuales listos para reemplazar gradientes por fotografías reales del doctor.</p>
                        </div>
                        <div class="catalog-grid">
                            ${procedures.map((procedure) => this.renderCard(procedure)).join("")}
                        </div>
                    </section>
                `;
            })
            .join("");
    }

    renderCard(procedure) {
        const [toneA, toneB, toneC] = procedure.palette;
        const coverMarkup = procedure.coverImage
            ? `<img class="catalog-photo" src="${procedure.coverImage}" alt="${procedure.name}" onerror="this.remove()">`
            : "";

        return `
            <a class="catalog-card" href="${procedure.detailUrl}" aria-label="Abrir ${procedure.name}">
                <div class="catalog-card-media">
                    <span class="media-layer media-layer-one" style="background: linear-gradient(135deg, ${toneA}, ${toneB});"></span>
                    <span class="media-layer media-layer-two" style="background: linear-gradient(135deg, ${toneB}, ${toneC});"></span>
                    <span class="media-layer media-layer-three" style="background: linear-gradient(135deg, ${toneA}, ${toneC});"></span>
                    ${coverMarkup}
                </div>
                <div class="catalog-card-body">
                    <strong>${procedure.name}</strong>
                    <p>${procedure.name}</p>
                    <span>${procedure.galleryCount}</span>
                </div>
            </a>
        `;
    }

    toAnchor(value) {
        return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-");
    }
}

new SiteNavigation().init();
new CatalogPageRenderer(procedureRepository).render();
new RevealController().init();
