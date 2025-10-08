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

    <style scoped>
    .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 3rem;
    color: white;
    }

    .logo {
    font-size: 1.8rem;
    }

    nav ul {
    display: flex;
    list-style: none;
    gap: 1.5rem;
    }

    nav a {
    text-decoration: none;
    color: #aaa;
    transition: 0.3s;
    }

    nav a:hover,
    nav a.active {
    color: #5c6bff;
    }
    </style>