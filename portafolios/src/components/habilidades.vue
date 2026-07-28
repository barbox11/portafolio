<template>
  <section class="habilidades-section" ref="sectionRef" :class="{ 'is-visible': isVisible }">
    <div class="habilidades-header">
      <div class="title-line">
        <h2><span class="hash">#</span>Habilidades</h2>
        <div class="line"></div>
      </div>
      <a href="#" class="view-all">View all →</a>
    </div>

    <div class="habilidades-grid">
      <div class="habilidad" v-for="(habilidad, index) in habilidades" :key="index">
        <img :src="habilidad.icon" :alt="habilidad.name" loading="lazy" />
        <span>{{ habilidad.name }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { habilidades } from '@/data/skills.js'
import { useIntersectionObserver } from '@/composables/useIntersectionObserver.js'

const sectionRef = ref(null)
const { isVisible } = useIntersectionObserver(sectionRef)
</script>

<style src="../assets/habilidades.css" scoped></style>