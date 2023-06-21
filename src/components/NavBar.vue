<template>
  <div>
    <nav class="navbar navbar-expand-xxl bg-dark bg-body-tertiary fixed-top px-5" data-bs-theme="dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Respirar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul v-if="store.userLogged" class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                <RouterLink to="/">Inicio</RouterLink>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <RouterLink to="/about">Sobre Nosotros</RouterLink>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <RouterLink to="/map">Mapa Estaciones</RouterLink>
              </a>
            </li>
          </ul>
          <ul v-else class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                <RouterLink to="/login">Acceso</RouterLink>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                <RouterLink to="/register">Registro</RouterLink>
              </a>
            </li>
          </ul>
          <form v-if="store.userLogged" class="d-flex" role="search">
            <button class="btn btn-danger" @click="store.logoutUser" >Cerrar Sesion</button>
          </form>
        </div>
      </div>
    </nav>
  </div>
  <RouterView/>
</template>

<script setup>
import useAuth from '@/stores/authStore'
import { RouterLink, RouterView } from 'vue-router'

const store = useAuth()
</script>

<style scoped lang="scss">
a {
  text-decoration: none;
  color: whitesmoke;
}
</style>