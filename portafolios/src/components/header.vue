<template>
    <header class="header">
        <div class="logo">
    <img src="@/assets/logo.png" alt="Logo" />
    </div>
        <nav>
        <ul>
            <li><a href="#" :class="{ active: section === 'inicio' }" @click="$emit('changeSection', 'inicio')">Inicio</a></li>
            <li><a href="#" :class="{ active: section === 'trabajos' }" @click="$emit('changeSection', 'trabajos')">Trabajos</a></li>
            <li><a href="#" :class="{ active: section === 'sobre-mi' }" @click="$emit('changeSection', 'sobre-mi')">Sobre mí</a></li>
            <li><a href="#" :class="{ active: section === 'contacto' }" @click="$emit('changeSection', 'contacto')">Contáctame</a></li>
        </ul>
        </nav>
    </header>
    </template>

    <script setup>
    defineProps({
    section: String
    })
    </script>

    <style src="../assets/header.css" scoped>
    
    </style>