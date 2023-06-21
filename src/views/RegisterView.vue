<template>
  <form>
    <div class="container">
      <div class="col-6 mx-auto">
        <h4 class="text-center text-white mt-lg-5">Registro</h4>
        <div class="form-group">
          <label class="text-white" for="inputEmail">Email</label>
          <input type="email"
                 class="form-control"
                 id="inputEmail"
                 aria-describedby="emailHelp"
                 placeholder="Ingrese su Email"
                 v-model="email">
        </div>
        <div class="form-group">
          <label class="text-white" for="inputPassword">Password</label>
          <input id="inputPassword"
                 v-model="password"
                 class="form-control"
                 placeholder="Ingrese su Email"
                 type="password">
        </div>
        <div class="d-grid gap-2 col-12 mx-auto mt-3">
          <button type="submit"
                  class="btn btn-primary"
                  @click.prevent="registerUser">Ingresar con Mail y Password
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import useAuth from '@/stores/authStore'

const email = ref( '' )
const password = ref( '' )
const store = useAuth()

const registerUser = () => {
  store.registerUserWithMail( email, password )
}

</script>

<style lang="scss" scoped>

</style>