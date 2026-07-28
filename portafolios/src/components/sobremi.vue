<template>
  <section id="sobremi" class="sobremi-section" ref="sectionRef" :class="{ 'is-visible': isVisible }">
    <div class="particles-background">
      <div
        class="particle"
        v-for="n in 40"
        :key="n"
        :style="{
          '--x': Math.random() * 100 + '%',
          '--y': Math.random() * 100 + '%',
          '--size': Math.random() * 5 + 2 + 'px',
          '--duration': Math.random() * 10 + 5 + 's'
        }"
      ></div>
    </div>

    <div class="sobremi-header">
      <div class="title-line">
        <h2><span class="hash">#</span>Sobre Mí</h2>
        <div class="line"></div>
      </div>
      <a href="#" class="view-all">View all →</a>
    </div>

    <div class="sobremi-content">
      <p>
        ¡Hola! Soy <span class="highlight">Bairon Candamil</span>, <span class="highlight">Ingeniero de Sistemas</span> y <span class="highlight">Desarrollador Full Stack</span>. Me apasiona la tecnología y el aprendizaje constante. Disfruto asumir nuevos desafíos, trabajar en equipo y crear soluciones que aporten valor.
      </p>
      <p>
        Soy una persona comprometida, curiosa y orientada a resultados, siempre en busca de nuevas oportunidades para crecer y generar un impacto positivo a través de mi trabajo.
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useIntersectionObserver } from '@/composables/useIntersectionObserver.js'

const sectionRef = ref(null)
const { isVisible } = useIntersectionObserver(sectionRef)
</script>

<style src="../assets/sobremi.css" scoped></style>