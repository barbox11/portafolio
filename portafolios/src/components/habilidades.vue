    <template>
    <section class="habilidades-section">
        <div class="habilidades-header">
        <div class="title-line">
            <h2><span class="hash">#</span>Proyectos</h2>
            <div class="line"></div>
        </div>
        <a href="#" class="view-all">View all →</a>
        </div>


        <div class="habilidades-grid">
        <div class="habilidad" v-for="(habilidad, index) in habilidades" :key="index">
            <img :src="habilidad.icon" :alt="habilidad.name" />
            <span>{{ habilidad.name }}</span>
        </div>
        </div>
    </section>
    </template>

    <script setup>
    const habilidades = [
    
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
    { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    { name: 'Bulma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bulma/bulma-plain.svg' },
    { name: 'Bootstrap Studio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'VSCode', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'Photoshop', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg' },
    { name: 'Illustrator', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg' },
    { name: 'Canva', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg' },
    { name: 'Microsoft Office', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png' },
    { name: 'WordPress', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg' }
    ]
    </script>

    <style src="../assets/habilidades.css"scoped>
    
    </style>
