<script setup>
import fetcherJson from '@/assets/js/jsonFetcher'
import { reactive } from 'vue'

const cards = reactive([])
fetcherJson('/out_in_the_world.json', cards)
</script>

<template>
  <div class="d-flex flex-column">
    <!-- main -->
    <main class="conteiner-fluid d-flex flex-column justify-content-center align-items-center mb-5">
      <header>
        <h2 class="fw-light text-center text-lg-start mt-4 mb-0"><b>Out in the world</b></h2>
        <hr class="mt-2 mb-5" />
      </header>
      <!-- sezione 1 -->
      <article class="container-fluid">
        <div class="container">
          <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-4">
            <div v-for="card in cards" :key="card.id" class="col">
              <div class="card h-100">
                <img :src="card.src" class="card-img-top" :alt="card.title.toLowerCase()" />
                <div class="card-body">
                  <h5 class="card-title">
                    {{ card.title }}
                  </h5>
                  <h6 class="card-subtitle mb-2 text-muted">{{ card.date }}</h6>
                  <div class="card-text">
                    {{ card.description }}
                    <div v-if="card.hrefs.length != 0">
                      <br />
                      <h6>Link utili</h6>
                      <ul v-for="href in card.hrefs" :key="href">
                        <li>
                          <a :href="href" target="_blank">{{ href }}</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  </div>
</template>

<style></style>
