class LandingPreviewRenderer {
    constructor(rootSelector, repository) {
        this.root = document.querySelector(rootSelector);
        this.repository = repository;
    }

    render() {
        if (!this.root) {
            return;
        }

        this.root.innerHTML = this.repository.featured(3)
            .map((procedure, index) => {
                const [toneA, toneB, toneC] = procedure.palette;

                return `
                    <a class="preview-card" href="${procedure.detailUrl}">
                        <div class="preview-montage">
                            <span style="background: linear-gradient(135deg, ${toneA}, ${toneB});"></span>
                            <span style="background: linear-gradient(135deg, ${toneB}, ${toneC});"></span>
                            <span style="background: linear-gradient(135deg, ${toneA}, ${toneC});"></span>
                        </div>
                        <div class="preview-copy">
                            <small>0${index + 1}</small>
                            <strong>${procedure.name}</strong>
                            <p>${procedure.shortDescription}</p>
                        </div>
                    </a>
                `;
            })
            .join("");
    }
}

new SiteNavigation().init();
new LandingPreviewRenderer("#landing-preview", procedureRepository).render();
new RevealController().init();
