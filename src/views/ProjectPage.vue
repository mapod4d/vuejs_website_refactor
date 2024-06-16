<script setup>
import Hero from '../components/HeroComponent.vue'

import { reactive } from 'vue'
import fetcherJson from '@/assets/js/jsonFetcher'

const softwares = reactive([])
fetcherJson('/softwares.json', softwares)

const groupRoles = reactive([])
fetcherJson('/group_roles.json', groupRoles)

const persons = reactive([])
fetcherJson('/persons.json', persons)
</script>

<template>
  <div class="d-flex flex-column">
    <!-- main -->
    <main class="conteiner-fluid d-flex flex-column justify-content-center align-items-center mb-5">
      <!-- sezione 1 -->
      <Hero />
      <!-- sezione 2 -->
      <section v-for="groupRole in groupRoles" :key="groupRole.id" class="container-fluid">
        <article class="container my-3" style="max-width: 1200px">
          <div class="container">
            <div>
              <h3 :id="groupRole.roles.toLowerCase()" class="h3 mt-5 mb-3">
                <strong>{{ groupRole.roles }}</strong>
              </h3>
              <div
                v-for="person in persons"
                :key="person.id"
                class="d-flex fl align-items-center gap-5"
              >
                <p v-if="person.groupRole.some((item) => item == groupRole.roles)" class="lead">
                  {{ `${person.firstname} ${person.lastname}` }}
                  <span v-if="person.alias">{{ `(${person.alias})` }}</span>
                  {{ `- ${person.role}` }}
                </p>
              </div>
            </div>
          </div>
        </article>
      </section>
      <!-- sezione 3 -->
      <section class="container-fluid">
        <article class="container my-3" style="max-width: 1200px">
          <div class="container">
            <div>
              <h3 id="sponsor" class="h3 mt-5 mb-3">
                <strong>Sponsor</strong>
              </h3>
              <div class="d-flex fl align-items-center gap-5">
                <p class="lead">ArcheOs Tec di Alessandra Mazzucchi</p>
              </div>
              <div class="d-flex fl align-items-center gap-5">
                <p class="lead">Progettosl - LEICON di Serenella Saccon</p>
              </div>
            </div>
          </div>
        </article>
      </section>

      <!-- sezione 4 -->
      <section class="container-fluid">
        <article class="container my-3" style="max-width: 1200px">
          <div class="container">
            <h3 class="h3 mb-5">
              <strong>Softwares, programming languages and tools used to build MAPOD4D</strong>
            </h3>
            <div
              v-for="software in softwares"
              :key="software.id"
              class="d-flex fl align-items-center gap-5"
            >
              <img
                :src="software.src"
                :alt="software.title.toLowerCase() + ' logo'"
                width="50"
                height="50"
              />
              <p class="lead">
                {{ software.title }} <a :href="software.href" target="_blank">website</a>
              </p>
            </div>
          </div>
        </article>
      </section>
    </main>
  </div>
</template>

<style></style>
