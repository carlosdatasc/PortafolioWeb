// --- Script del Año del Footer ---
// (Buscamos 'current-year-footer' en lugar de 'current-year' para ser específicos)
const yearSpan = document.getElementById('current-year-footer');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// --- SCRIPT DEL MODAL ---

// 1. LA BASE DE DATOS DE TUS PROYECTOS
// Aquí es donde pones toda la información.
// El ID (ej. "proyecto1") DEBE coincidir con el "data-project-id" del HTML.
const projectData = {
    "proyecto1": {
        title: "MINE-OS: Operational Intelligence System",
        image: "images/Dasboard.png",
        why: "Managers spend 80% of their time 'wrangling chaos' and only 20% making decisions",
        what: "I engineered an automated Text Analysis System (NLP). My goal was to move beyond theory and build a robust End-to-End solution applicable to real-world business environments",
        tags: ["MachineLearning", "NaturalLanguageProcessing", "DataScience" , "DataEngineering"],
        technologies: ["Graph Objects", "Plotly Express", "Scikit-learn", "Pandas","Custom CSS injection"],
        links: [
            { text: "See GitHub", url: "https://github.com/carlosdatasc/mining-ops-intelligence?tab=readme-ov-file" },
            { text: "See Dashboard", url: "https://mining-ops-intelligence-mlg5xxru2xjvurbcjdpa9c.streamlit.app/" }
        ]
    },
    "proyecto2": {
        title: "Is NVIDIA 'Processing' a Bubble? ",
        image: "images/profit.png",
        why: "Everyone is talking about the AI 'Hype', but how much of that value is real and how much is pure speculation? I decided to build my own Automated Financial Valuation Engine to put NVIDIA's numbers to the test.",
        what: "I developed a Python algorithm that performs real-time fundamental analysis:Data Ingestion (ETL): Direct connection to the Yahoo Finance API to extract balance sheets and prices to the second. Modeling: Automatic Discounted Cash Flow (DCF) projection and dynamic WACC calculation. Visualization: Instant comparison between Intrinsic Value vs. Market Price.",
        tags: ["Finance", "NVIDIA", "AlgorithmicTrading"  ,"DataAnalysis"],
        technologies: ["yfinance","Pandas","Matplotlib"],
        links: [
            { text: "See GitHub", url: "https://github.com/carlosdatasc/Data-Scientist-Projects/tree/main/NVIDIA%20Stock" }
        ]
    },
    "proyecto3": {
        title: "Civil Works Cost Prediction",
        image: "images/obra.png",
        why: "Construction firms face a daily dilemma: Underestimate the budget, and you lose money. Overestimate it, and you lose the bid.",
        what: "To address this, I developed a Machine Learning model capable of predicting Direct Construction Costs with over 95% accuracy. The Challenge: Traditional models failed significantly on smaller-scale projects (Error >40%). The Solution: I implemented a Random Forest algorithm capable of capturing the non-linear complexity between materials, duration, and soil type.The Impact: I managed to reduce error variability to just 5.13% (MAPE), transforming risky estimates into reliable, definitive budgets. Although this model was trained on synthetic data designed with physical logic, it demonstrates the immense potential of AI to optimize project management and protect profit margins.",
        tags: ["MachineLearning" ,"ConstructionTech" ,"CivilEngineering","Budgeting"],
        technologies: ["Pandas","Numpy","Matplotlib","Seaborn","Sklearn","math"],
        links: [
            { text: "See GitHub", url: "https://github.com/carlosdatasc/Data-Scientist-Projects/tree/main/Obras" }
        ]
    }
};

// 2. ELEMENTOS DEL DOM
// Usamos 'const' para elementos que no cambiarán
const modalOverlay = document.getElementById('project-modal-overlay');
const modalContainer = document.getElementById('project-modal-container');
const modalCloseBtn = document.getElementById('modal-close-btn');
const projectCards = document.querySelectorAll('.proyecto-card'); // Esto es un NodeList

// Elementos de contenido del modal
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalTags = document.getElementById('modal-tags');
const modalWhy = document.getElementById('modal-why');
const modalWhat = document.getElementById('modal-what');
const modalTech = document.getElementById('modal-tech');
const modalLinks = document.getElementById('modal-links');

// 3. FUNCIONES

// Función para ABRIR el modal
function openModal(projectId) {
    const data = projectData[projectId];
    if (!data) {
        console.error("No se encontraron datos para el proyecto:", projectId);
        return; // Si no hay datos, no hace nada
    }

    // Rellenar el contenido
    modalImage.src = data.image;
    modalImage.alt = "Imagen de " + data.title;
    modalTitle.textContent = data.title;
    modalWhy.textContent = data.why;
    modalWhat.textContent = data.what;
    
    // Rellenar tags (función auxiliar)
    fillTags(modalTags, data.tags);
    fillTags(modalTech, data.technologies);

    // Rellenar links
    modalLinks.innerHTML = ''; // Limpiar links anteriores
    if (data.links && data.links.length > 0) {
        data.links.forEach(link => {
            const isDemo = link.text.toLowerCase().includes('demo');
            // Añadimos btn-secundario a todos, y btn-primario solo si es demo
            const linkClass = isDemo ? 'btn-primario' : 'btn-secundario';
            modalLinks.innerHTML += `<a href="${link.url}" class="${linkClass}" target="_blank" rel="noopener noreferrer">${link.text}</a>`;
        });
    }
    
    // Mostrar el modal
    document.body.classList.add('modal-open'); // Usa clase para controlar el overflow
    modalOverlay.classList.remove('modal-hidden');
    modalContainer.classList.remove('modal-hidden');
}

// Función para CERRAR el modal
function closeModal() {
    document.body.classList.remove('modal-open'); // Restaura scroll
    modalOverlay.classList.add('modal-hidden');
    modalContainer.classList.add('modal-hidden');
}

// Función auxiliar para crear las "píldoras" (tags)
function fillTags(container, tagsArray) {
    container.innerHTML = ''; // Limpiar tags anteriores
    if (tagsArray && tagsArray.length > 0) {
        tagsArray.forEach(tag => {
            const tagElement = document.createElement('span');
            tagElement.className = 'modal-tag-item';
            tagElement.textContent = tag;
            container.appendChild(tagElement);
        });
    }
}

// 4. EVENT LISTENERS
// Nos aseguramos de que los elementos existan antes de añadir listeners

// Añadir listener a CADA tarjeta de proyecto
if (projectCards.length > 0) {
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const projectId = card.getAttribute('data-project-id');
            openModal(projectId);
        });
    });
}

// Listeners para cerrar
if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
}
if (modalOverlay) {
    modalOverlay.addEventListener('click', closeModal);
}