    <template>
    <header class="header">
        <div class="logo">
        <img src="@/assets/logo.png" alt="Logo" />
        </div>

        <!-- Botón hamburguesa -->
        <div class="menu-toggle" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
        </div>

        <nav>
        <ul :class="{ open: menuAbierto }">
            <a href="#" :class="{ active: section === 'inicio' }" @click="cambiar('inicio')">#Inicio</a>
            <a href="#proyectos" :class="{ active: section === 'trabajos' }" @click="cambiar('trabajos')">#Trabajos</a>
            <a href="#sobremi" :class="{ active: section === 'sobre-mi' }" @click="cambiar('sobre-mi')">#Sobre mí</a>
            <a href="#fotter" :class="{ active: section === 'contacto' }" @click="cambiar('contacto')">#Contáctame</a>
        </ul>
        </nav>
    </header>
    </template>

    <script setup>
    import { ref } from 'vue'

    defineProps({
    section: String
    })

    const menuAbierto = ref(false)

    function toggleMenu() {
    menuAbierto.value = !menuAbierto.value
    }

    function cambiar(seccion) {
    menuAbierto.value = false
    emit('changeSection', seccion)
    }

    const emit = defineEmits(['changeSection'])
    </script>

    <style src="../assets/header.css" scoped></style>
