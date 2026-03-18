class Procedure {
    constructor(config) {
        Object.assign(this, config);
    }

    get detailUrl() {
        return `./procedimiento.html?slug=${encodeURIComponent(this.slug)}`;
    }

    get heroImage() {
        return this.coverImage || this.galleryImages?.[0] || "";
    }
}

class ProcedureRepository {
    constructor(items) {
        this.items = items.map((item) => new Procedure(item));
    }

    get all() {
        return this.items;
    }

    get categories() {
        return [...new Set(this.items.map((item) => item.category))];
    }

    byCategory(category) {
        return this.items.filter((item) => item.category === category);
    }

    bySlug(slug) {
        return this.items.find((item) => item.slug === slug);
    }

    featured(count = 3) {
        return this.items.slice(0, count);
    }
}

const procedureRepository = new ProcedureRepository([
    {
        slug: "mamoplastia-aumento-senos",
        name: "Mamoplastía o Aumento de Senos",
        category: "Cirugía Corporal",
        badge: "Procedimiento destacado",
        coverImage: "./assets/procedimientos/mamoplastia-aumento-senos/cover.jpg",
        galleryImages: [
            "./assets/procedimientos/mamoplastia-aumento-senos/galeria-1.jpg",
            "./assets/procedimientos/mamoplastia-aumento-senos/galeria-2.jpg",
            "./assets/procedimientos/mamoplastia-aumento-senos/galeria-3.jpg"
        ],
        shortDescription: "Página preparada para explicar técnica, tamaños, perfil y objetivos estéticos.",
        intro: "Un procedimiento quirúrgico diseñado para mejorar volumen, forma y proporción mamaria.",
        longDescription: "Este espacio quedó listo para que luego agregues la explicación médica completa, tipos de implante, evaluación preoperatoria, posibles incisiones, recuperación y resultados esperados.",
        galleryCount: 10,
        palette: ["#7bc9ef", "#1d78bf", "#113c67"],
        gallery: ["Frontal", "Perfil", "Antes y después"],
        benefits: ["Aumentar volumen y proyección", "Corregir asimetrías", "Mejorar armonía corporal"],
        candidates: ["Pacientes con expectativa realista", "Mujeres que buscan más volumen", "Casos con pérdida de forma después de embarazo o peso"],
        recovery: ["Tiempo inicial editable", "Cuidados postoperatorios", "Seguimiento médico"],
        faqs: ["¿Qué tipo de implante se usa?", "¿Cuánto dura la recuperación?", "¿Cuándo se ven los resultados finales?"]
    },
    {
        slug: "liposuccion",
        name: "Liposucción",
        category: "Cirugía Corporal",
        badge: "Alta demanda",
        coverImage: "./assets/procedimientos/liposuccion/cover.jpg",
        galleryImages: [
            "./assets/procedimientos/liposuccion/galeria-1.jpg",
            "./assets/procedimientos/liposuccion/galeria-2.jpg",
            "./assets/procedimientos/liposuccion/galeria-3.jpg"
        ],
        shortDescription: "Lista para mostrar zonas tratadas, contorno corporal y evolución del paciente.",
        intro: "Un procedimiento para redefinir el contorno y eliminar acumulaciones localizadas de grasa.",
        longDescription: "Aquí puedes documentar áreas tratadas, candidatos ideales, método aplicado, indicaciones preoperatorias y expectativas de recuperación según el caso.",
        galleryCount: 8,
        palette: ["#cfeeff", "#4aa3da", "#0d4c7f"],
        gallery: ["Abdomen", "Cintura", "Espalda"],
        benefits: ["Definir silueta", "Resaltar contorno corporal", "Complementar otros procedimientos"],
        candidates: ["Pacientes con grasa localizada", "Buen estado general", "Piel con capacidad de retracción"],
        recovery: ["Inflamación inicial", "Uso de faja", "Retorno progresivo a actividades"],
        faqs: ["¿La liposucción baja de peso?", "¿Qué zonas pueden tratarse?", "¿Cuándo desinflama?"]
    },
    {
        slug: "abdominoplastia",
        name: "Abdominoplastia",
        category: "Cirugía Corporal",
        badge: "Contorno abdominal",
        coverImage: "./assets/procedimientos/abdominoplastia/cover.jpg",
        galleryImages: [
            "./assets/procedimientos/abdominoplastia/galeria-1.jpg",
            "./assets/procedimientos/abdominoplastia/galeria-2.jpg",
            "./assets/procedimientos/abdominoplastia/galeria-3.jpg"
        ],
        shortDescription: "Bloque ideal para explicar reconstrucción abdominal y corrección de flacidez.",
        intro: "Procedimiento enfocado en mejorar el abdomen retirando exceso de piel y tensando tejidos.",
        longDescription: "Esta página está preparada para describir indicaciones, cicatriz, recuperación, tipo de abdomen tratado y combinación con otras cirugías corporales.",
        galleryCount: 6,
        palette: ["#dff4ff", "#68b8e4", "#135685"],
        gallery: ["Abdomen", "Perfil corporal", "Recuperación"],
        benefits: ["Mejorar firmeza abdominal", "Reducir exceso de piel", "Definir cintura visual"],
        candidates: ["Pacientes post embarazo", "Flacidez abdominal", "Casos después de pérdida de peso"],
        recovery: ["Reposo inicial", "Soporte abdominal", "Controles periódicos"],
        faqs: ["¿Queda cicatriz?", "¿Cuánto dura la recuperación?", "¿Puede combinarse con liposucción?"]
    },
    {
        slug: "rinoplastia",
        name: "Rinoplastia",
        category: "Cirugía Facial",
        badge: "Facial premium",
        coverImage: "./assets/procedimientos/rinoplastia/cover.jpg",
        galleryImages: [
            "./assets/procedimientos/rinoplastia/galeria-1.jpg",
            "./assets/procedimientos/rinoplastia/galeria-2.jpg",
            "./assets/procedimientos/rinoplastia/galeria-3.jpg"
        ],
        shortDescription: "Pensada para mostrar armonía facial, perfil nasal y refinamiento estructural.",
        intro: "Cirugía orientada a mejorar forma, proporción y en algunos casos función nasal.",
        longDescription: "Podrás completar este bloque con análisis facial, tipo de abordaje, expectativas realistas, recuperación y fotografías comparativas.",
        galleryCount: 11,
        palette: ["#a8e0fb", "#3d89bf", "#0f3a61"],
        gallery: ["Frontal", "Perfil derecho", "Perfil izquierdo"],
        benefits: ["Mejorar armonía facial", "Refinar el perfil", "Ajustar proporciones estéticas"],
        candidates: ["Pacientes con desarrollo facial completo", "Expectativas realistas", "Casos funcionales o estéticos"],
        recovery: ["Edema temporal", "Controles sucesivos", "Resultado progresivo"],
        faqs: ["¿La recuperación duele?", "¿Cuándo baja la inflamación?", "¿Puede mejorar respiración?"]
    },
    {
        slug: "rejuvenecimiento-facial",
        name: "Rejuvenecimiento Facial",
        category: "Cirugía Facial",
        badge: "Armonización",
        coverImage: "./assets/procedimientos/rejuvenecimiento-facial/cover.jpg",
        galleryImages: [
            "./assets/procedimientos/rejuvenecimiento-facial/galeria-1.jpg",
            "./assets/procedimientos/rejuvenecimiento-facial/galeria-2.jpg",
            "./assets/procedimientos/rejuvenecimiento-facial/galeria-3.jpg"
        ],
        shortDescription: "Espacio para combinar lifting, contorno facial y rejuvenecimiento integral.",
        intro: "Procedimiento orientado a restaurar frescura y definición en el rostro.",
        longDescription: "Este módulo puede ampliarse con técnicas utilizadas, áreas tratadas, cuidados y expectativas según edad, piel y objetivo estético.",
        galleryCount: 4,
        palette: ["#e3f6ff", "#7bc9ef", "#16557f"],
        gallery: ["Rostro completo", "Mandíbula", "Cuello"],
        benefits: ["Recuperar definición", "Suavizar flacidez", "Mejorar apariencia descansada"],
        candidates: ["Pacientes con flacidez facial", "Objetivos de rejuvenecimiento", "Casos seleccionados por evaluación médica"],
        recovery: ["Inflamación moderada", "Seguimiento clínico", "Reincorporación gradual"],
        faqs: ["¿Qué zonas trata?", "¿Cuánto tarda la recuperación?", "¿Se combina con otros procedimientos?"]
    },
    {
        slug: "bichectomia",
        name: "Bichectomía",
        category: "Cirugía Facial",
        badge: "Definición facial",
        coverImage: "./assets/procedimientos/bichectomia/cover.jpg",
        galleryImages: [
            "./assets/procedimientos/bichectomia/galeria-1.jpg",
            "./assets/procedimientos/bichectomia/galeria-2.jpg",
            "./assets/procedimientos/bichectomia/galeria-3.jpg"
        ],
        shortDescription: "Tarjeta para destacar afinamiento de rostro y resultados sutiles.",
        intro: "Intervención enfocada en reducir volumen de mejillas para marcar mejor el contorno facial.",
        longDescription: "Puedes completar esta sección con indicaciones, límites del procedimiento, cuidados y resultados esperados en distintos tipos de rostro.",
        galleryCount: 6,
        palette: ["#d7f1ff", "#59b7e8", "#15496e"],
        gallery: ["Frontal", "Tres cuartos", "Postoperatorio"],
        benefits: ["Definir pómulos", "Afinar el rostro", "Resaltar contorno"],
        candidates: ["Pacientes con volumen malar marcado", "Buena salud general", "Expectativas realistas"],
        recovery: ["Inflamación breve", "Dieta blanda inicial", "Revisiones postoperatorias"],
        faqs: ["¿Es permanente?", "¿Deja cicatriz visible?", "¿Cuánto dura la inflamación?"]
    },
    {
        slug: "reduccion-mamaria",
        name: "Reducción Mamaria",
        category: "Cirugía Mamaria",
        badge: "Bienestar funcional",
        coverImage: "./assets/procedimientos/reduccion-mamaria/cover.jpg",
        galleryImages: [
            "./assets/procedimientos/reduccion-mamaria/galeria-1.jpg",
            "./assets/procedimientos/reduccion-mamaria/galeria-2.jpg",
            "./assets/procedimientos/reduccion-mamaria/galeria-3.jpg"
        ],
        shortDescription: "Bloque ideal para explicar alivio físico, proporción y comodidad diaria.",
        intro: "Procedimiento destinado a reducir volumen mamario y mejorar comodidad corporal.",
        longDescription: "Aquí podrás añadir criterios médicos, síntomas asociados, técnica utilizada, recuperación y beneficios funcionales y estéticos.",
        galleryCount: 5,
        palette: ["#c5ecff", "#2f95d9", "#103f68"],
        gallery: ["Frontal", "Perfil", "Resultado final"],
        benefits: ["Reducir peso mamario", "Mejorar proporción", "Disminuir molestias físicas"],
        candidates: ["Dolor cervical o dorsal", "Volumen excesivo", "Irritación por pliegues mamarios"],
        recovery: ["Vendaje inicial", "Control de cicatrización", "Seguimiento por etapas"],
        faqs: ["¿Mejora el dolor de espalda?", "¿Qué cicatrices deja?", "¿Se puede combinar con levantamiento?"]
    },
    {
        slug: "cirugia-post-bariatrica",
        name: "Cirugía Post Bariátrica",
        category: "Cirugía Reconstructiva",
        badge: "Abordaje integral",
        coverImage: "./assets/procedimientos/cirugia-post-bariatrica/cover.jpg",
        galleryImages: [
            "./assets/procedimientos/cirugia-post-bariatrica/galeria-1.jpg",
            "./assets/procedimientos/cirugia-post-bariatrica/galeria-2.jpg",
            "./assets/procedimientos/cirugia-post-bariatrica/galeria-3.jpg"
        ],
        shortDescription: "Diseñada para mostrar tratamiento por etapas tras pérdida masiva de peso.",
        intro: "Procedimiento o conjunto de procedimientos para remodelar el cuerpo tras pérdida importante de peso.",
        longDescription: "Este espacio puede crecer con secciones por áreas, planificación por etapas, cuidados especiales y resultados funcionales del tratamiento.",
        galleryCount: 3,
        palette: ["#b7e4fa", "#458ec2", "#103959"],
        gallery: ["Tronco", "Brazos", "Piernas"],
        benefits: ["Eliminar exceso de piel", "Mejorar movilidad", "Recuperar forma corporal"],
        candidates: ["Pacientes con peso estable", "Exceso de piel significativo", "Evaluación integral previa"],
        recovery: ["Procedimientos por fases", "Control cercano", "Plan postoperatorio personalizado"],
        faqs: ["¿Se hace en una sola cirugía?", "¿Cuándo puede realizarse?", "¿Qué áreas se tratan primero?"]
    }
]);

class SiteNavigation {
    constructor() {
        this.header = document.querySelector(".site-header");
        this.toggle = document.querySelector(".menu-toggle");
        this.panel = document.querySelector(".nav-panel");
    }

    init() {
        this.toggle?.addEventListener("click", () => {
            const isOpen = this.header.classList.toggle("menu-open");
            document.body.classList.toggle("menu-open", isOpen);
            this.toggle.setAttribute("aria-expanded", String(isOpen));
        });

        this.panel?.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                this.header.classList.remove("menu-open");
                document.body.classList.remove("menu-open");
                this.toggle?.setAttribute("aria-expanded", "false");
            });
        });
    }
}

class RevealController {
    constructor(selector = ".reveal") {
        this.selector = selector;
    }

    init() {
        const nodes = [...document.querySelectorAll(this.selector)];

        if (!("IntersectionObserver" in window)) {
            nodes.forEach((node) => node.classList.add("is-visible"));
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.16 }
        );

        nodes.forEach((node) => observer.observe(node));
    }
}
