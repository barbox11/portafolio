    <template>
    <header class="header">
        <div class="logo">
        <img src="@/assets/logo.png" alt="Logo" />
        </div>

        <!-- Botón hamburguesa -->
        <div class="menu-toggle" :class="{ 'active': menuAbierto }" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
        </div>

        <nav :class="{ 'active': menuAbierto }">
            <ul>
                <li><a href="#" :class="{ active: section === 'inicio' }" @click="cambiar('inicio')">#Inicio</a></li>
                <li><a href="#proyectos" :class="{ active: section === 'proyectos' }" @click="cambiar('proyectos')">#Proyectos</a></li>
                <li><a href="#sobremi" :class="{ active: section === 'sobremi' }" @click="cambiar('sobremi')">#Sobre mí</a></li>
                <li><a href="#fotter" :class="{ active: section === 'fotter' }" @click="cambiar('fotter')">#Contáctame</a></li>
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
