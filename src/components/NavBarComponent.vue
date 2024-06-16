<script setup></script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light mt-0">
    <div class="container">
      <div class="d-flex align-items-center">
        <a class="navbar-brand" href="/">
          <img
            src="/img/mapod_new_render_scontornato.png"
            alt=""
            width="50"
            height="50"
            class="d-inline-block align-text-top"
          />
        </a>
        <a
          class="navbar-brand"
          style="font-weight: 700; color: #4f41d1; padding-bottom: 10px"
          href="/"
          >MAPOD4D</a
        >
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse d-lg-flex justify-content-lg-end" id="navbarNav">
        <ul class="navbar-nav gap-lg-3" style="font-size: 1.2rem; font-weight: bold">
          <li class="nav-item">
            <RouterLink class="nav-link active text-primary" to="/">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link text-primary" to="/project">Project</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link text-primary" to="/outintheword"
              >Out in the Word</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link text-primary" to="/showcase">Showcase</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link text-primary" to="/multiverse">Multiverse</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link text-primary" to="/governance">Governance</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style></style>
