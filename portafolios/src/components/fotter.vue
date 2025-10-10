    <template>
    <section class="contact-section">
        <div class="contact-header">
        <div class="title-line">
            <h2><span class="hash">#</span>Proyectos</h2>
            <div class="line"></div>
        </div>
        <a href="#" class="view-all">View all →</a>
        </div>

        <div class="contact-content">
        <div class="contact-info">
            <p class="email">
            <i class="fas fa-envelope"></i> 
            <a href="mailto:bcandamil5@gmail.com">bcandamil5@gmail.com</a>
            </p>
            <p class="role">Web designer and front-end developer</p>
        </div>

        <div class="social-media">
            <h3>Media</h3>
            <div class="icons">
            <a href="https://github.com" target="_blank">
                <img src="../assets/Github.png" alt="GitHub" />
            </a>
            <a href="https://discord.com" target="_blank">
                <img src="../assets/Discord.png" alt="Discord" />
            </a>
            <a href="https://figma.com" target="_blank">
                <img src="../assets/Figma.png" alt="Figma" />
            </a>
            </div>
        </div>
        </div>
    </section>
    </template>

    <script>
    export default {
    name: "Contactame",
    };
    </script>

    <style scoped>
    /* Fondo y estructura */
    .contact-section {
    padding: 4rem 6rem;
    background-color: #030a16;
    color: #ffffff;
    font-family: "Fira Code", monospace;
    }

    /* Encabezado con línea */
    .contact-header {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    }

    .title-line {
    display: flex;
    align-items: center;
    gap: 10px;
    flex: 1;
    }

    .social-media {
    text-align: left;
    min-width: 200px;
}

.social-media h3 {
    color: #9ca3af;
    font-size: 1rem;
    margin-bottom: 1rem;
    font-weight: normal;
}

.icons {
    display: flex;
    gap: 1rem;
    align-items: center;
}

.icons a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
}
    /* Enlace de "View all" */
    .view-all {
    color: #9ca3af;
    text-decoration: none;
    font-size: 0.95rem;
    margin-left: 20px;
    transition: color 0.3s, transform 0.3s;
    }

    .view-all:hover {
    color: #5c6bff;
    transform: translateX(5px);
    }

.icons img {
    width: 24px;
    height: 24px;
    opacity: 0.8;
    transition: opacity 0.3s, transform 0.3s;
}

.icons a:hover img {
    opacity: 1;
    transform: scale(1.1);
}
    .title-line h2 {
    font-size: 1.6rem;
    font-weight: 700;
    white-space: nowrap;
    }

    .hash {
    color: #5c6bff;
    }

    .line {
    flex-grow: 1;
    height: 2px;
    background: linear-gradient(90deg, #5c6bff, transparent);
    opacity: 0.4;
    }

    /* Contenido principal */
    .contact-content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 2rem;
    }

    /* Información de contacto */
    .contact-info {
    flex: 1;
    min-width: 250px;
    }

    .email {
    margin-bottom: 0.5rem;
    }

    .email i {
    color: #5c6bff;
    margin-right: 8px;
    }

    .email a {
    color: #9ca3af;
    text-decoration: none;
    transition: color 0.3s;
    }

    .email a:hover {
    color: #5c6bff;
    }

    .role {
    color: #9ca3af;
    font-size: 0.95rem;
    }

    /* Redes sociales */
    .social-media {
    text-align: right;
    min-width: 200px;
    }

    .social-media h3 {
    color: #9ca3af;
    font-size: 1rem;
    margin-bottom: 0.5rem;
    }

    .icons {
    display: flex;
    justify-content: flex-end;
    gap: 15px;
    }

    .icons a {
    color: #9ca3af;
    font-size: 1.2rem;
    transition: color 0.3s, transform 0.3s;
    }

    .icons a:hover {
    color: #5c6bff;
    transform: scale(1.1);
    }
    </style>

