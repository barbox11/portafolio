
    <template>
    <section class="hero">
        <!-- Fondo animado de gotas -->
        <div class="bubbles">
        <span v-for="n in 15" :key="n" :style="randomPosition()"></span>
        </div>

        <div class="hero-content">
        <h1 class="from-left neon-text">{{ frontEnd }}</h1>
        <h2 class="from-right gradient-text">{{ designer }}</h2>
        <p>
            Transformo ideas en experiencias digitales únicas, modernas y llenas de vida.
        </p>
        <button class="hero-btn">Ver proyectos</button>
        </div>
    </section>
    </template>

    <script>
    export default {
    name: "Hero",
    data() {
        return {
        frontEnd: "Diseñador Web y",
        designer: "Desarrollador Front-End",
        };
    },
    methods: {
        // Genera posiciones aleatorias para las gotas
        randomPosition() {
        const size = Math.random() * 40 + 10; // tamaño entre 10 y 50 px
        const left = Math.random() * 100; // posición horizontal
        const delay = Math.random() * 5; // retraso aleatorio
        const duration = Math.random() * 10 + 5; // duración variable

        return {
            left: `${left}%`,
            width: `${size}px`,
            height: `${size}px`,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
        };
        },
    },
    };
    </script>

    <style src="../assets/hero.css" scoped>
    </style>
