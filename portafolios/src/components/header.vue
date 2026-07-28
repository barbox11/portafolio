<template>
  <header class="header">
    <div class="logo">
      <img src="@/assets/logo.png" alt="Logo" />
    </div>

    <div class="menu-toggle" :class="{ 'active': menuAbierto }" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <nav :class="{ 'active': menuAbierto }">
      <ul>
        <li><a href="#inicio" :class="{ active: section === 'inicio' }" @click="cambiar('inicio')">#Inicio</a></li>
        <li><a href="#proyectos" :class="{ active: section === 'proyectos' }" @click="cambiar('proyectos')">#Proyectos</a></li>
        <li><a href="#sobremi" :class="{ active: section === 'sobremi' }" @click="cambiar('sobremi')">#Sobre mí</a></li>
        <li><a href="#contacto" :class="{ active: section === 'contacto' }" @click="cambiar('contacto')">#Contáctame</a></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'

defineProps({ section: String })
const emit = defineEmits(['changeSection'])

const menuAbierto = ref(false)

function toggleMenu() {
  menuAbierto.value = !menuAbierto.value
}

function cambiar(seccion) {
  menuAbierto.value = false
  emit('changeSection', seccion)
}
</script>

<style src="../assets/header.css" scoped></style>