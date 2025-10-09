    <template>
    <section class="proyectos">
        <div class="proyectos-header">
        <h2><span class="hash">#</span>Proyectos</h2>
        <a href="#" class="view-all">View all →</a>
        </div>

        <div class="proyectos-grid">
        <!-- Proyecto 1 -->
        <div class="project-card">
            <img src="https://via.placeholder.com/400x200" alt="ChertNodes" class="project-image" />
            <div class="project-tags">HTML • SCSS • Python • Flask</div>
            <h3 class="project-title">ChertNodes</h3>
            <p class="project-description">Descripción del proyecto</p>
            <a href="#" class="project-btn">Ver ⮂</a>
        </div>

        <!-- Proyecto 2 -->
        <div class="project-card">
            <img src="https://via.placeholder.com/400x200" alt="ProtectX" class="project-image" />
            <div class="project-tags">React • Express • Node.js</div>
            <h3 class="project-title">ProtectX</h3>
            <p class="project-description">Descripción del proyecto</p>
            <a href="#" class="project-btn">Ver ⮂</a>
        </div>

        <!-- Proyecto 3 -->
        <div class="project-card">
            <img src="https://via.placeholder.com/400x200" alt="Kahoot Viewer" class="project-image" />
            <div class="project-tags">CSS • Express • Node.js</div>
            <h3 class="project-title">Kahoot Answers Viewer</h3>
            <p class="project-description">Descripción del proyecto</p>
            <a href="#" class="project-btn">Ver ⮂</a>
        </div>
        </div>
    </section>
    </template>

    <style scoped>
    .projects {
    background: #020617;
    color: #fff;
    padding: 100px 50px;
    font-family: 'Fira Code', monospace;
    }

    /* 🔹 Encabezado */
    .projects-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
    }

    .projects-header h2 {
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 1px;
    }

    .hash {
    color: #5c6bff;
    }

    .view-all {
    color: #9ca3af;
    text-decoration: none;
    font-size: 0.95rem;
    transition: color 0.3s;
    }

    .view-all:hover {
    color: #5c6bff;
    }

    /* 🔹 Grid de proyectos */
    .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 40px;
    }

    /* 🔹 Tarjeta individual */
    .project-card {
    background: #0f172a;
    border: 1px solid #1e293b;
    border-radius: 10px;
    padding: 20px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .project-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(92, 107, 255, 0.2);
    }

    .project-image {
    width: 100%;
    border-radius: 6px;
    margin-bottom: 15px;
    }

    .project-tags {
    font-size: 0.9rem;
    color: #a5b4fc;
    margin-bottom: 10px;
    }

    .project-title {
    font-size: 1.3rem;
    color: #fff;
    margin: 5px 0;
    }

    .project-description {
    font-size: 0.95rem;
    color: #94a3b8;
    margin-bottom: 15px;
    }

    .project-btn {
    display: inline-block;
    color: #5c6bff;
    border: 1px solid #5c6bff;
    padding: 8px 16px;
    border-radius: 6px;
    text-decoration: none;
    transition: all 0.3s;
    }

    .project-btn:hover {
    background: #5c6bff;
    color: #fff;
    }
    </style>
