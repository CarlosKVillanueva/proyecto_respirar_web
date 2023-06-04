
<template>
  <header>
    <nav>
      <div v-if="store.userLogged">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/Map">Map</RouterLink>
        <button class="btn btn-danger" @click="store.logoutUser">Log out</button>
      </div>
      <div v-else>
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/register">Register</RouterLink>
      </div>
    </nav>
  </header>

  <RouterView/>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import useAuth from '@/stores/auth'

const store = useAuth()
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 20px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
