<script setup>
import fetcherJson from '@/assets/js/jsonFetcher'
import { reactive } from 'vue'
const cards = reactive([])
fetcherJson('/showcase.json', cards)
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
