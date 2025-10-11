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
            <a href="#" class="project-btn">Ver ↔</a>
        </div>
        </div>
    </section>
    </template>

    

    <script setup>
    const proyectos = [
    {
        img: new URL('../assets/trabajo 1.jpg', import.meta.url).href,
        title: "ChertNodes",
        tags: "HTML SCSS Python Flask",
        desc: "Descripción del proyecto"
    },
    {
        img: new URL('../assets/trabajo 2.png', import.meta.url).href,
        title: "ProtectX",
        tags: "React Express Discord.js Node.js",
        desc: "Descripción del proyecto"
    },
    {
        img: new URL('../assets/trabajo 3.png', import.meta.url).href,
        title: "Kahoot Answers Viewer",
        tags: "CSS Express Node.js",
        desc: "Descripción del proyecto"
    }
    ]
    </script>

    <style src="../assets/proyectos.css" scoped>

    </style>