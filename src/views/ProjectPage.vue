<script setup>
import { reactive } from 'vue'
import Hero from '../components/HeroComponent.vue'

const softwares = reactive([
  { id: 1, src: '/img/logo_godot.png', title: 'GODOT Engine', href: 'https://www.godotengine.org' },
  { id: 1, src: '/img/blender_icon_32x32.png', title: 'Blender', href: 'https://www.blender.org' },
  { id: 1, src: '/img/null.png', title: 'MESHROOM', href: 'https://alicevision.org/#meshroom' },
  { id: 1, src: '/img/null.png', title: 'Hugin', href: 'http://hugin.sourceforge.net/' },
  { id: 1, src: '/img/null.png', title: 'FreeCAD', href: 'https://www.freecadweb.org/' },
  { id: 1, src: '/img/null.png', title: 'QGIS', href: 'https://www.qgis.org/' },
  { id: 1, src: '/img/null.png', title: 'GNU/Linux', href: 'https://kernel.org/' },
  { id: 1, src: '/img/null.png', title: 'Docker', href: 'https://www.docker.com/' },
  { id: 1, src: '/img/null.png', title: 'Git', href: 'https://git-scm.com/' },
  { id: 1, src: '/img/null.png', title: 'Gitea', href: 'https://gitea.io/' },
  { id: 1, src: '/img/null.png', title: 'Apache', href: 'https://www.apache.org/' },
  { id: 1, src: '/img/null.png', title: 'Django', href: 'https://www.djangoproject.com/' },
  { id: 1, src: '/img/null.png', title: 'Django REST', href: 'https://www.django-rest-framework.org/' },
  { id: 1, src: '/img/null.png', title: 'Vue.js', href: 'https://vuejs.org/' },
  { id: 1, src: '/img/null.png', title: 'Bootstrap', href: 'https://getbootstrap.com/' },
  { id: 1, src: '/img/null.png', title: 'Python', href: 'https://www.python.org/' },
  { id: 1, src: '/img/null.png', title: 'GCC', href: 'https://gcc.gnu.org/' },
  { id: 1, src: '/img/null.png', title: 'PHP', href: 'https://www.php.net/' },
  { id: 1, src: '/img/null.png', title: 'Kanboard', href: 'https://kanboard.org/' },
  { id: 1, src: '/img/null.png', title: '7-zip', href: 'https://7-zip.org/' }
])
</script>

<template>
  <div class="d-flex flex-column">
    <!-- main -->
    <main class="conteiner-fluid d-flex flex-column justify-content-center align-items-center mb-5">
      <!-- sezione 1 -->
      <Hero />

      <!-- sezione author -->
      <section class="container-fluid">
        <article class="container my-3" style="max-width: 1200px">
          <div class="container">
            <div>
              <h3 id="author" class="h3 mt-5 mb-3"><strong>Author</strong></h3>
              <div class="d-flex fl align-items-center gap-5">
                <p class="lead">Roberto Taglioretti (totrebor) - Projects developer</p>
              </div>
            </div>
          </div>
        </article>
      </section>

      <!-- sezione founders -->
      <section class="container-fluid">
        <article class="container my-3" style="max-width: 1200px">
          <div class="container">
            <div>
              <h3 id="founders" class="h3 mb-3"><strong>Project Founders</strong></h3>
              <div class="d-flex fl align-items-center gap-5">
                <p class="lead">Roberto Taglioretti (totrebor) - Projects developer</p>
              </div>
              <div class="d-flex fl align-items-center gap-5">
                <p class="lead">Alessandra Mazzucchi - Anthropologist</p>
              </div>
              <div class="d-flex fl align-items-center gap-5">
                <p class="lead">Serenella Saccon - Legal expert</p>
              </div>
            </div>
          </div>
        </article>
      </section>

      <!-- sezione developers -->
      <section class="container-fluid">
        <article class="container my-3" style="max-width: 1200px">
          <div class="container">
            <div>
              <h3 id="developers" class="h3 mb-3"><strong>Developers</strong></h3>
              <div class="d-flex fl align-items-center gap-5">
                <p class="lead">Filippo Di Marco (hershellayton95) - Naturalist (dev manager)</p>
              </div>
              <div class="d-flex fl align-items-center gap-5">
                <p class="lead">Davide Carraro (DavoDovox) - Student (dev junior)</p>
              </div>
              <div class="d-flex fl align-items-center gap-5">
                <p class="lead">Viktory Taglioretti (Viky) - Student (dev junior)</p>
              </div>
            </div>
          </div>
        </article>
      </section>

      <!-- sezione 2 -->
      <section class="container-fluid">
        <article class="container my-3" style="max-width: 1200px">
          <div class="container">
            <div>
              <h3 id="team" class="h3 mb-3"><strong>Team</strong></h3>
              <div class="d-flex fl align-items-center gap-5">
                <p class="lead">Antonella Cristiani - Archeologist and artist</p>
              </div>
              <div class="d-flex fl align-items-center gap-5">
                <p class="lead">Edoardo Olmo Puricelli - Archeologist and artist</p>
              </div>
              <div class="d-flex fl align-items-center gap-5">
                <p class="lead">Ernesto Ferri - Drone pilot and technician</p>
              </div>
              <div class="d-flex fl align-items-center gap-5">
                <p class="lead">Giovanni Taglioretti (Giannino) - Volunteer</p>
              </div>
              <div class="d-flex fl align-items-center gap-5">
                <p class="lead">Marco Schintu - X-ray technician and veterinarian</p>
              </div>
              <div class="d-flex fl align-items-center gap-5">
                <p class="lead">Paolo Alemani - Technician</p>
              </div>
              <div class="d-flex fl align-items-center gap-5">
                <p class="lead">Sofia Mondo - Student</p>
              </div>
              <div class="d-flex fl align-items-center gap-5">
                <p class="lead">Valentina Galli - Archeologist</p>
              </div>
            </div>
          </div>
        </article>
      </section>

      <!-- sezione Sponsors -->
      <section class="container-fluid">
        <article class="container my-3" style="max-width: 1200px">
          <div class="container">
            <div>
              <h3 id="sponsors" class="h3 mb-3"><strong>Sponsors</strong></h3>
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
            <div v-for="software in softwares" :key="software.id" class="d-flex fl align-items-center gap-5">
              <img :src="software.src" :alt="software.title + ' logo'" width="50" height="50" />
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
