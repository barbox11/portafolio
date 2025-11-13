        <template>

    <section id="proyectos" class="projects">
        <div class="projects-header">
        <div class="title-line">
            <h2><span class="hash">#</span>Proyectos</h2>
            <div class="line"></div>
        </div>
        <a href="#" class="view-all">View all →</a>
        </div>

        <div class="projects-grid">
        <div class="project-card" v-for="(proyecto, index) in proyectos" :key="index">
            <img :src="proyecto.img" :alt="proyecto.title" class="project-image" />
            <p class="project-tags">{{ proyecto.tags }}</p>
            <h3 class="project-title">{{ proyecto.title }}</h3>
            <p class="project-description">{{ proyecto.desc }}</p>
            <a href="proyecto.url" class="project-btn">Ver ↔</a>
        </div>
        </div>
    </section>
    </template>

    

    <script setup>
    const proyectos = [
    {
        img: new URL('../assets/trabajo 1.png', import.meta.url).href,
        title: "Biorutas Web",
        tags: "figma HTML CSS PYTHON",
        desc: "",
        url: "https://github.com/barbox11/biorutas"
    },
    {
        img: new URL('../assets/trabajo 2.png', import.meta.url).href,
        title: "Libreria api",
        tags: "PHP",
        desc: "",
        url: "https://github.com/barbox11/libreria_api"
    },
    {
        img: new URL('../assets/trabajo 3.jpg', import.meta.url).href,
        title: "diseño web pedidos",
        tags: "Figma",
        desc: "",
        url: "https://www.figma.com/design/J13eNdPTISdMBSOhRXtGpj/pedidos?node-id=0-1&t=AvqciLpiwlWJYIDA-1"

    }
    ]
    </script>

    <style src="../assets/proyectos.css" scoped>

    </style>