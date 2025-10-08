        <template>
    <main class="hero">
        <div class="content">
        <transition name="fade-slide" appear>
            <h1 v-if="show">
            Diseñador <span class="blue typing">web</span> y<br />
            <span class="blue typing-delay">desarrollador front</span>-end
            </h1>
        </transition>

        <transition name="fade" appear>
            <p v-if="showText">
            ¡Hola! Soy Bairon. Soy un desarrollador frontend creativo con más de
            2 años de experiencia en la creación de soluciones web de alto
            rendimiento, escalables y responsivas.
            </p>
        </transition>

        <transition name="fade" appear>
            <button v-if="showButton" @click="$emit('contact')" class="glow-btn">
            ¡¡Contáctame!!
            </button>
        </transition>
        </div>

        <!-- Efectos visuales decorativos -->
        <div class="floating-shapes">
        <span v-for="n in 6" :key="n" class="shape" :style="randomShapeStyle(n)"></span>
        </div>
    </main>
    </template>

    <script setup>
    import { ref, onMounted } from 'vue'

    const show = ref(false)
    const showText = ref(false)
    const showButton = ref(false)

    onMounted(() => {
    setTimeout(() => (show.value = true), 300)
    setTimeout(() => (showText.value = true), 1200)
    setTimeout(() => (showButton.value = true), 2000)
    })

    const randomShapeStyle = (n) => {
    const delay = n * 2
    const left = Math.random() * 100
    const size = Math.random() * 30 + 10
    return {
        left: `${left}%`,
        animationDelay: `${delay}s`,
        width: `${size}px`,
        height: `${size}px`
    }
    }
    </script>

    <style scoped>
    .hero {
    position: relative;
    text-align: center;
    margin-top: 10vh;
    overflow: hidden;
    min-height: 70vh;
    }

    .content {
    position: relative;
    z-index: 2;
    }

    /* Animación de entrada */
    .fade-slide-enter-active {
    transition: all 4s ease;
    }
    .fade-slide-enter-from {
    opacity: 0;
    transform: translateY(40px);
    }

    .fade-enter-active {
    transition: opacity 1.2s ease;
    }
    .fade-enter-from {
    opacity: 0;
    }

    /* Tipografía */
    .hero h1 {
    font-size: 3rem;
    font-weight: 700;
    line-height: 1.4;
    margin-bottom: 1rem;
    }

    .blue {
    color: #5c6bff;
    }

    /* Animación tipo "typing" */
    .typing {
    border-right: 3px solid #5c6bff;
    white-space: nowrap;
    overflow: hidden;
    display: inline-block;
    animation: typing 1.5s steps(10, end), blink 0.7s step-end infinite alternate;
    }

    .typing-delay {
    border-right: 3px solid #5c6bff;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    animation: typing 2.5s steps(25, end) 1.5s forwards, blink 0.7s step-end infinite alternate 1.5s;
    }

    @keyframes typing {
    from { width: 0; }
    to { width: 100%; }
    }

    @keyframes blink {
    50% { border-color: transparent; }
    }

    /* Párrafo */
    .hero p {
    max-width: 600px;
    margin: 1rem auto;
    font-size: 0.95rem;
    color: #aaa;
    }

    /* Botón animado */
    .glow-btn {
    margin-top: 1rem;
    padding: 0.8rem 2rem;
    background: transparent;
    border: 1px solid #5c6bff;
    color: white;
    font-family: inherit;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s;
    border-radius: 8px;
    position: relative;
    overflow: hidden;
    box-shadow: 0 0 10px transparent;
    }

    .glow-btn:hover {
    background: #5c6bff;
    box-shadow: 0 0 20px #5c6bff;
    }

    /* Figuras flotantes */
    .floating-shapes {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 1;
    }

    .shape {
    position: absolute;
    bottom: -40px;
    background: rgba(92, 107, 255, 0.2);
    border-radius: 50%;
    animation: floatUp 12s linear infinite;
    }

    @keyframes floatUp {
    0% {
        transform: translateY(0) scale(1);
        opacity: 0.6;
    }
    50% {
        opacity: 1;
    }
    100% {
        transform: translateY(-110vh) scale(1.2);
        opacity: 0;
    }
    }
    </style>
