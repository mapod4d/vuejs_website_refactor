<script setup>
import { ref } from 'vue'
const cards = ref([
  {
    href: '/screenshots/main_menu.png',
    src: '/screenshots/main_menu_t.png',
    alt: 'MAPOD4D main menu',
    describe: 'MAPOD4D version 1 - metaverse menu'
  },
  {
    href: '/screenshots/ancient_jaw.png',
    src: '/screenshots/ancient_jaw_t.png',
    alt: 'ancient jaw',
    describe: 'MAPOD4D version 1 - ancient jaw'
  },
  {
    href: '/screenshots/gam_museum.png',
    src: '/screenshots/gam_museum_t.png',
    alt: 'gam_museum',
    describe: 'MAPOD4D version 1 - GAM museum'
  },
  {
    href: '/screenshots/test_environment.jpg',
    src: '/screenshots/test_environment_t.jpg',
    alt: 'test environment',
    describe: 'MAPOD4D version 1 - test environment'
  },
  {
    href: '/screenshots/metaverse_test.jpg',
    src: '/screenshots/metaverse_test_t.jpg',
    alt: 'metaverse test',
    describe: 'MAPOD4D version 1 - metaverse test'
  }
])
</script>

<template>
  <div class="d-flex flex-column">
    <!-- main -->
    <main class="conteiner-fluid d-flex flex-column justify-content-center align-items-center mb-5">
      <h2 class="fw-light text-center text-lg-start mt-4 mb-0"><b>Showcase of screenshots</b></h2>
      <hr class="mt-2 mb-5" />
      <section class="row text-center text-lg-start">
        <div v-for="card in cards" :key="card.id" class="col-lg-3 col-md-4 col-6 mb-4">
          <figure class="figure">
            <router-link :to="{ path: card.href }">
              <img
                :src="card.src"
                class="figure-img img-fluid img-thumbnail rounded"
                :alt="card.alt"
              />
            </router-link>
            <figcaption class="figure-caption text-dark">
              <b>{{ card.describe }}</b>
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  </div>
</template>
<style></style>
