<script setup>
import { reactive } from 'vue';
import Hero from '../components/HeroComponent.vue'
import fetcherJson from '@/assets/js/jsonFetcher';

const sections = reactive([]);
fetcherJson('governance.json', sections)

</script>

<template>
  <div class="d-flex flex-column">
    <main class="conteiner-fluid d-flex flex-column justify-content-center align-items-center mb-5">
      <!-- sezione 1 -->
      <Hero />

      <!-- sezione 2 -->
      <section v-for="section in sections" :key="section.id" class="container-fluid">
        <article class="container mt-5 mb-3" style="max-width: 1200px">
          <div class="container">
            <div>
              <h3 class="h3 mb-3"><strong>{{ section.title }}</strong></h3>
              <p class="lead">
                {{ section.paragraph }}
              </p>
            </div>
          </div>
        </article>
      </section>
    </main>
  </div>
</template>
<style></style>
