<template>
  <section id="inicio" class="hero" ref="sectionRef">
    <div class="bubbles">
      <span v-for="n in 15" :key="n" :style="randomPosition()"></span>
    </div>

    <div class="hero-content">
      <h1 class="from-left neon-text">{{ frontEnd }}</h1>
      <h2 class="from-right gradient-text">{{ designer }}</h2>
      <p>
        Transformo ideas en experiencias digitales únicas, modernas y llenas de vida.
      </p>
      <a href="#proyectos" class="hero-btn">Ver proyectos</a>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const sectionRef = ref(null)
const frontEnd = ref('Diseñador Web y')
const designer = ref('Desarrollador FullStack')

function randomPosition() {
  const size = Math.random() * 40 + 10
  const left = Math.random() * 100
  const delay = Math.random() * 4
  const duration = Math.random() * 10 + 5

  return {
    left: `${left}%`,
    width: `${size}px`,
    height: `${size}px`,
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`
  }
}
</script>

<style src="../assets/hero.css" scoped></style>