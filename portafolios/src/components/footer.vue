<template>
  <section id="contacto" class="contact-section" ref="sectionRef" :class="{ 'is-visible': isVisible }">
    <div class="contact-header">
      <div class="title-line">
        <h2><span class="hash">#</span>Contáctame</h2>
        <div class="line"></div>
      </div>
      <a href="#" class="view-all">View all →</a>
    </div>

    <div class="contact-content">
      <div class="contact-info">
        <p class="email">
          <a href="mailto:bcandamil5@gmail.com">bcandamil5@gmail.com</a>
        </p>
        <p class="role">Web designer and full-stack developer</p>
      </div>

      <div class="social-media">
        <h3>Media</h3>
        <div class="icons">
          <a href="https://github.com/barbox11" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <img src="@/assets/Github.png" alt="GitHub" />
          </a>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer" aria-label="Discord">
            <img src="@/assets/Discord.png" alt="Discord" />
          </a>
          <a href="https://figma.com" target="_blank" rel="noopener noreferrer" aria-label="Figma">
            <img src="@/assets/Figma.png" alt="Figma" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useIntersectionObserver } from '@/composables/useIntersectionObserver.js'

const sectionRef = ref(null)
const { isVisible } = useIntersectionObserver(sectionRef)
</script>

<style src="../assets/footer.css" scoped></style>