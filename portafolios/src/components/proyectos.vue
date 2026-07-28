<template>
  <section id="proyectos" class="projects" ref="sectionRef" :class="{ 'is-visible': isVisible }">
    <div class="projects-header">
      <div class="title-line">
        <h2><span class="hash">#</span>Proyectos</h2>
        <div class="line"></div>
      </div>
      <a href="#" class="view-all">View all →</a>
    </div>

    <div class="projects-grid">
      <div class="project-card" v-for="(proyecto, index) in proyectos" :key="index">
        <img :src="proyecto.img" :alt="proyecto.title" class="project-image" loading="lazy" />
        <p class="project-tags">{{ proyecto.tags }}</p>
        <h3 class="project-title">{{ proyecto.title }}</h3>
        <p class="project-description">{{ proyecto.desc }}</p>
        <a :href="proyecto.url" class="project-btn" target="_blank" rel="noopener noreferrer" :aria-label="`Ver ${proyecto.title}`">Ver ↔</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { proyectos } from '@/data/projects.js'
import { useIntersectionObserver } from '@/composables/useIntersectionObserver.js'

const sectionRef = ref(null)
const { isVisible } = useIntersectionObserver(sectionRef)
</script>

<style src="../assets/proyectos.css" scoped></style>