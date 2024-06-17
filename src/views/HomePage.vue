<script setup>
import Carosello from '../components/CaroselloComponent.vue'
import Hero from '../components/HeroComponent.vue'
</script>

<template>
  <div class="d-flex flex-column">
    <main class="conteiner-fluid d-flex flex-column justify-content-center align-items-center mb-5">
      <section class="py-3 w-100">
        <div class="d-flex justify-content-center">
          <a class="btn btn-outline-primary btn-lg" href="/multiverse">Metaverses Download</a>
        </div>
        <div class="d-flex flex-wrap justify-content-center">
          <!-- Whatsapp -->
          <a
            class="btn btn-outline-dark btn-floating m-2 fs-5 text-white"
            role="button"
            href="https://chat.whatsapp.com/FdmQ0yq7Sk2HiPmZCE4JUP"
            target="_blank"
            ><i class="fab fa-whatsapp"></i
          ></a>
          <!-- Discord -->
          <a
            class="btn btn-outline-dark btn-floating m-2 fs-5 text-white"
            role="button"
            href="https://discord.gg/ns4GGuVG5Y"
            target="_blank"
            ><i class="fab fa-discord"></i
          ></a>
          <!-- Facebook -->
          <a
            class="btn btn-outline-dark btn-floating m-2 fs-5 text-white"
            role="button"
            href="https://www.facebook.com/mapod4d"
            target="_blank"
            ><i class="fab fa-facebook-f"></i
          ></a>
          <!-- Youtube -->
          <a
            class="btn btn-outline-dark btn-floating m-2 fs-5 text-white"
            role="button"
            href="https://www.youtube.com/@mapod4d"
            target="_blank"
            ><i class="fab fa-youtube"></i
          ></a>
          <!-- Twitch -->
          <a
            class="btn btn-outline-dark btn-floating m-2 fs-5 text-white"
            role="button"
            href="https://www.twitch.tv/mapod4d"
            target="_blank"
            ><i class="fab fa-twitch"></i
          ></a>
          <!-- GitHub -->
          <a
            class="btn btn-outline-dark btn-floating m-2 fs-5 text-white"
            role="button"
            href="https://github.com/mapod4d/"
            target="_blank"
            ><i class="fab fa-github"></i
          ></a>
        </div>
      </section>
      <!-- carosello -->
      <Carosello />
      <!-- sezione 1 -->
      <Hero />
      <!-- sezione 2 -->
      <section class="container-fluid">
        <article class="container mt-5 d-flex align-items-center py-5" style="max-width: 1200px">
          <div class="container text-center">
            <div>
              <h3 class="h1 mb-3"><strong>Stay tuned!</strong></h3>
              <p class="lead" style="font-size: 2.5rem">
                Core version 2 - Alpha launcher
                <a href="https://github.com/mapod4d/mapod4d_launcher_c2" target="_blank">here</a>
              </p>
            </div>
          </div>
        </article>
      </section>
    </main>
  </div>
</template>

<style></style>
