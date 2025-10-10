    <template>
    <section class="sobremi-section">
        <!-- Fondo animado de partículas -->
        <div class="particles-background">
        <div
            class="particle"
            v-for="n in 300"
            :key="n"
            :style="{
            '--x': Math.random() * 100 + '%',
            '--y': Math.random() * 100 + '%',
            '--size': Math.random() * 5 + 2 + 'px',
            '--duration': Math.random() * 10 + 5 + 's'
            }"
        ></div>
        </div>

        <!-- Encabezado -->
        <div class="sobremi-header">
        <div class="title-line">
            <h2><span class="hash">#</span>Sobre Mí</h2>
            <div class="line"></div>
        </div>
        <a href="#" class="view-all">View all →</a>
        </div>

        <!-- Contenido -->
        <div class="sobremi-content">
        <p>
        ¡Hola, soy Bairon!
Soy un desarrollador front-end autodidacta. Puedo desarrollar sitios web responsivos desde cero y convertirlos en experiencias web modernas e intuitivas.
Transformar mi creatividad y conocimientos en sitios web ha sido mi pasión durante más de un año. He ayudado a varios clientes a consolidar su presencia online. Siempre me esfuerzo por aprender sobre las tecnologías y frameworks más recientes.
        </p>
        </div>
    </section>
    </template>

    <script>
    export default {
    name: "SobreMi",
    };
    </script>

    <style src="../assets/sobremi.css" scoped>
    
    
    </style>

