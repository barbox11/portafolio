<template>
  <div id="app">
    <Header :section="section" @changeSection="section = $event" />
      <Hero @contact="section = 'contacto'" />
      <Proyectos />
      <Habilidades />
  
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Header from './components/header.vue'
import Hero from './components/hero.vue'
import Proyectos from './components/proyectos.vue'
import Habilidades from './components/habilidades.vue'

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap');

body {
  background-color: #030a16;
  color: white;
  font-family: 'Roboto Mono', monospace;
  margin: 0;
  padding: 0;
}
</style>
