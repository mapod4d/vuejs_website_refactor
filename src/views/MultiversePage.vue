<script setup></script>

<template>
  <div class="d-flex flex-column">
    <!-- main -->
    <main class="conteiner-fluid d-flex flex-column justify-content-center align-items-center">
      <!-- sezione 1 -->
      <section class="container-fluid" style="background-color: var(--blue-mapod4d)">
        <article class="container text-light my-5" style="max-width: 1200px">
          <div class="container">
            <div class="row d-flex flex-column justify-content-center align-items-center">
              <h3 class="h3 mb-3 text-center"><strong>Guidelines.</strong></h3>
              <p class="lead text-center">
                Guidelines for those who want to build a "Metaverse MAPOD4D".
              </p>
              <!-- buttons -->
              <div class="mt-2 d-flex flex-wrap gap-3 justify-content-center">
                <a
                  class="btn btn-light btn-lg"
                  href="https://github.com/mapod4d/docs/blob/master/mapod4d_guidelines_lineeguida.pdf?raw=true"
                  target="_blank"
                >
                  Download guidelines
                </a>
              </div>
            </div>
          </div>
        </article>
      </section>

      <!-- sezione 2 -->
      <section class="container-fluid">
        <article class="container text-dark my-5" style="max-width: 1200px">
          <div class="container">
            <div class="row mb-3">
              <p class="h3 text-start"><strong>MAPOD4D core version 1.</strong></p>
              <p class="lead">
                Version 1 is only available for desktop with Operation System GNU/Linux and
                Microsoft Windows.
              </p>
              <!-- buttons -->
              <div class="mb-3 d-flex flex-wrap gap-3">
                <a
                  type="button"
                  class="btn text-light btn-lg"
                  style="background-color: var(--blue-mapod4d)"
                  href="https://github.com/mapod4d/mapod4d_c2/blob/3a3f5f93d47212861501fd71fae6a2e4c23ce65a/license"
                  target=""
                >
                  License*
                </a>
                <button
                  type="button"
                  class="btn text-light btn-lg dropdown-toggle"
                  style="background-color: var(--blue-mapod4d)"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Manual
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a
                      class="dropdown-item"
                      href="https://github.com/mapod4d/docs/blob/master/en/c1/en_user_manual.pdf?raw=true"
                      target="_blank"
                      >English version</a
                    >
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="https://github.com/mapod4d/docs/blob/master/it/c1/it_user_manual.pdf?raw=true"
                      target="_blank"
                      >Italian version</a
                    >
                  </li>
                </ul>
                <button
                  type="button"
                  class="btn text-light btn-lg dropdown-toggle"
                  style="background-color: var(--blue-mapod4d)"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Technical document
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                  <li>
                    <a
                      class="dropdown-item"
                      href="https://github.com/mapod4d/docs/blob/master/it/c1/it_documento_tecnico_mapod4d.pdf?raw=true"
                      target="_blank"
                      >Italian version</a
                    >
                  </li>
                </ul>
              </div>
              <p>*The License is valid for MAPOD4D core 1 and core 2</p>
            </div>
            <div class="row mb-3">
              <p class="h3 mb-2 text-start"><strong>Multiverse</strong></p>
              <table class="table table-bordered w-100">
                <thead class="h5">
                  <tr>
                    <th>Metaverse</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody class="h6">
                  <tr>
                    <th style="color: #3226a3">Lovere - LOBGMAR15</th>
                    <th style="color: dimgrey">Lovere via Martinoli (BG), scheletro tomba 14</th>
                  </tr>
                  <tr>
                    <th style="color: #3226a3">Castelseprio - CSSG</th>
                    <th style="color: dimgrey">
                      Sepolture nell'area F tra l'abside minore (quello a sud) e il campanile della
                      Basilica di San Giovanni nel Parco Archeologico di Castelseprio (VA)
                    </th>
                  </tr>
                  <tr>
                    <th style="color: #3226a3">Osteoisto</th>
                    <th style="color: dimgrey">
                      L'invisibile in museo 4D - un metaverso per la divulgazione e la ricerca
                      istologica in collaborazione con il
                      <a href="https://www.liceogallarate.edu.it" target="_blank"
                        >Liceo Dei Tigli</a
                      >
                      di Gallarate e il
                      <a href="https://www.liceoferrarisvarese.edu.it" target="_blank"
                        >Liceo Galileo Ferraris</a
                      >
                      di Varese e
                      <a href="https://www.argonavis.it" target="_blank">Argonavis S.r.l.</a>
                      di Varese - Finanziato dal Bando Project Work III edizione della Camera di
                      Commercio di Varese
                    </th>
                  </tr>
                  <tr>
                    <th style="color: #3226a3">Osteoatla</th>
                    <th style="color: dimgrey">Atlante osteologico</th>
                  </tr>
                  <tr>
                    <th style="color: #3226a3">Monastaro di Astino</th>
                    <th style="color: dimgrey">Esterni e interni del Monastero di Astino (BG)</th>
                  </tr>
                  <tr>
                    <th style="color: #3226a3">Castelseprio - Casa Piccoli</th>
                    <th style="color: dimgrey">
                      Scavo archeologico dell'area di Casa Piccoli nel Parco Archeologico di
                      Castelseprio (VA)
                    </th>
                  </tr>
                  <tr>
                    <th style="color: #3226a3">GAM</th>
                    <th style="color: dimgrey">
                      Espansione digitale della collezione archeologica del GAM - Golasecca
                      Archeologia Multimediale (VA)
                    </th>
                  </tr>
                  <tr>
                    <th style="color: #3226a3">Treviglio</th>
                    <th style="color: dimgrey">Scavo Archeologico si Treviglio (BG)</th>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="row mb-3">
              <p class="h3 mb-2 text-start"><strong>Download Metaverse</strong></p>
              <table class="table table-bordered w-100 mb-1">
                <thead class="h5">
                  <tr>
                    <th>OS*</th>
                    <th>Metaverse</th>
                    <th>File Type</th>
                  </tr>
                </thead>
                <tbody class="h6">
                  <tr>
                    <th>
                      <img
                        src="https://raw.githubusercontent.com/EgoistDeveloper/operating-system-logos/master/src/24x24/WIN.png"
                        alt="Windows Logo"
                      />
                    </th>
                    <th>
                      <img
                        src="/img/null.png"
                        alt="lobgmar15"
                        style="width: 20px; height: 20px"
                      />&nbsp;<a
                        href="https://filedn.eu/lsD1YJOdPbyhboA6GjGwlep/mapod4d/c1/lobgmar15/win64_c1_lobgmar15_1_0_0_3_a_7z.exe"
                      >
                        Lovere - LOBGMAR15</a
                      >
                    </th>
                    <th>.exe 7z self-extracting archive</th>
                  </tr>
                  <tr>
                    <th>
                      <img
                        src="https://raw.githubusercontent.com/EgoistDeveloper/operating-system-logos/master/src/24x24/WIN.png"
                        alt="Windows Logo"
                      />
                    </th>
                    <th>
                      <img
                        src="/img/null.png"
                        alt="cssg"
                        style="width: 20px; height: 20px"
                      />&nbsp;<a
                        href="https://filedn.eu/lsD1YJOdPbyhboA6GjGwlep/mapod4d/c1/cssg/win64_c1_cssg_0_0_0_3_a_7z.exe"
                      >
                        Castelseprio - CSSG</a
                      >
                    </th>
                    <th>.exe 7z self-extracting archive</th>
                  </tr>
                  <tr>
                    <th>
                      <img
                        src="https://raw.githubusercontent.com/EgoistDeveloper/operating-system-logos/master/src/24x24/WIN.png"
                        alt="Windows Logo"
                      />
                    </th>
                    <th>
                      <img
                        src="/img/null.png"
                        alt="Osteoisto"
                        style="width: 20px; height: 20px"
                      />&nbsp;<a
                        href="https://filedn.eu/lsD1YJOdPbyhboA6GjGwlep/mapod4d/c1/osteoisto/win64_c1_osteoisto_0_0_0_1_a_7z.exe"
                      >
                        Osteoisto</a
                      >
                    </th>
                    <th>.exe 7z self-extracting archive</th>
                  </tr>
                  <tr>
                    <th>
                      <img
                        src="https://raw.githubusercontent.com/EgoistDeveloper/operating-system-logos/master/src/24x24/WIN.png"
                        alt="Windows Logo"
                      />
                    </th>
                    <th>
                      <img
                        src="/img/null.png"
                        alt="Osteoatla"
                        style="width: 20px; height: 20px"
                      />&nbsp;<a
                        href="https://filedn.eu/lsD1YJOdPbyhboA6GjGwlep/mapod4d/c1/osteoatla/wind64_c1_osteoatla_0_0_0_1_a_7z.exe"
                      >
                        Osteoatla</a
                      >
                    </th>
                    <th>.exe 7z self-extracting archive</th>
                  </tr>
                  <tr>
                    <th>
                      <img
                        src="https://raw.githubusercontent.com/EgoistDeveloper/operating-system-logos/master/src/24x24/WIN.png"
                        alt="Windows Logo"
                      />
                    </th>
                    <th>
                      <img
                        src="/img/null.png"
                        alt="Logo MAPOD4D Monastero di Astino"
                        style="width: 20px; height: 20px"
                      />&nbsp;<a
                        href="https://filedn.eu/lsD1YJOdPbyhboA6GjGwlep/mapod4d/c1/bgastn/win64_c1_bgastn_0_0_0_6_a_7z.exe"
                      >
                        Monastero di Astino</a
                      >
                    </th>
                    <th>.exe 7z self-extracting archive</th>
                  </tr>
                  <tr>
                    <th>
                      <img
                        src="https://raw.githubusercontent.com/EgoistDeveloper/operating-system-logos/master/src/24x24/WIN.png"
                        alt="Windows Logo"
                      />
                    </th>
                    <th>
                      <img
                        src="/img/null.png"
                        alt="Logo MAPOD4D Castelseprio"
                        style="width: 20px; height: 20px"
                      />&nbsp;<a
                        href="https://filedn.eu/lsD1YJOdPbyhboA6GjGwlep/mapod4d/c1/cscp2022/win64_c1_cscp2022_1_0_0_7_rc3_7z.exe"
                      >
                        Castelseprio - Casa Piccoli</a
                      >
                    </th>
                    <th>.exe 7z self-extracting archive</th>
                  </tr>
                  <tr>
                    <th>
                      <img
                        src="https://raw.githubusercontent.com/EgoistDeveloper/operating-system-logos/master/src/24x24/WIN.png"
                        alt="Windows Logo"
                      />
                    </th>
                    <th>
                      <img
                        src="/img/loghi_mapod/logo_gam.png"
                        alt="Logo MAPOD4D GAM"
                        style="width: 20px; height: 20px"
                      />&nbsp;<a
                        href="https://filedn.eu/lsD1YJOdPbyhboA6GjGwlep/mapod4d/c1/gam/mswin64_gam_0_0_0_6_b_7z.exe"
                      >
                        GAM</a
                      >
                    </th>
                    <th>.exe 7z self-extracting archive</th>
                  </tr>
                  <tr>
                    <th>
                      <img
                        src="https://raw.githubusercontent.com/EgoistDeveloper/operating-system-logos/master/src/24x24/WIN.png"
                        alt="Windows Logo"
                      />
                    </th>
                    <th>
                      <img
                        src="/img/loghi_mapod/logo_treviglio_av113iv01t23.png"
                        alt="Logo MAPOD4D Treviglio"
                        style="width: 20px; height: 20px"
                      />&nbsp;<a
                        href="https://filedn.eu/lsD1YJOdPbyhboA6GjGwlep/mapod4d/c1/treviglio_av13iv01t23/win64_mapod_treviglioav13iv01-1-0-0-1-b.zip"
                      >
                        Treviglio</a
                      >
                    </th>
                    <th>.zip archive</th>
                  </tr>
                  <tr>
                    <th>
                      <img
                        src="https://raw.githubusercontent.com/EgoistDeveloper/operating-system-logos/master/src/24x24/MAC.png"
                        alt=""
                      />
                    </th>
                    <th>
                      <img
                        src="/img/loghi_mapod/logo_treviglio_av113iv01t23.png"
                        alt="Logo MAPOD4D Treviglio"
                        style="width: 20px; height: 20px"
                      />&nbsp;<a
                        href="https://filedn.eu/lsD1YJOdPbyhboA6GjGwlep/mapod4d/c1/treviglio_av13iv01t23/mac_mapod_treviglioav13iv01-1-0-0-1-b.zip"
                      >
                        Treviglio</a
                      >
                    </th>
                    <th>.zip archive</th>
                  </tr>
                  <tr>
                    <th>
                      <img
                        src="https://raw.githubusercontent.com/EgoistDeveloper/operating-system-logos/master/src/24x24/LIN.png"
                        alt="Linux Logo"
                      />
                    </th>
                    <th>
                      <img
                        src="/img/loghi_mapod/logo_treviglio_av113iv01t23.png"
                        alt="Logo MAPOD4D Treviglio"
                        style="width: 20px; height: 20px"
                      />&nbsp;<a
                        href="https://filedn.eu/lsD1YJOdPbyhboA6GjGwlep/mapod4d/c1/treviglio_av13iv01t23/linux_mapod_treviglioav13iv01-1-0-0-1-b.x86_64.bz2"
                      >
                        Treviglio</a
                      >
                    </th>
                    <th>.bz2 archive</th>
                  </tr>
                </tbody>
              </table>
              <p class="mb-1">
                *All logos are from the MIT licensed project
                <a href="https://github.com/EgoistDeveloper/operating-system-logos" target="_blank"
                  >Operating System Logos</a
                >.
              </p>
              <p class="lead mb-1">
                Core source code on
                <a class="text-dark" href="https://github.com/mapod4d/c1" target="_blank">GitHub</a>
              </p>
            </div>
            <div class="row mb-3"></div>

            <div class="row mt-5">
              <p class="h3 text-start"><strong>MAPOD4D core version 2</strong></p>
              <p class="lead">Work in progress. Stay tuned!</p>
            </div>
          </div>
        </article>
      </section>
    </main>
  </div>
</template>

<style></style>
