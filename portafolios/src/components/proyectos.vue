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
        <div class="project-image-wrapper">
          <img :src="proyecto.img" :alt="proyecto.title" class="project-image" loading="lazy" />
          <div class="project-image-overlay"></div>
        </div>
        <div class="project-card-body">
          <div class="project-tags">
            <span class="project-tag" v-for="tag in proyecto.tagsList" :key="tag">{{ tag }}</span>
          </div>
          <h3 class="project-title">{{ proyecto.title }}</h3>
          <p class="project-description">{{ proyecto.desc }}</p>
          <a :href="proyecto.url" class="project-btn" target="_blank" rel="noopener noreferrer" :aria-label="`Ver ${proyecto.title}`">
            Ver proyecto <span>↗</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { proyectos } from '@/data/projects.js'
import { useIntersectionObserver } from '@/composables/useIntersectionObserver.js'

const proyectosConTags = proyectos.map(p => ({
  ...p,
  tagsList: p.tags.split(' ').filter(Boolean)
}))

const sectionRef = ref(null)
const { isVisible } = useIntersectionObserver(sectionRef)
</script>

<style src="../assets/proyectos.css" scoped></style>