<template>
  <div class="container">
    <h4 class="text-center mt-3">Ingreso</h4>
    <form class="col-6 mx-auto">
      <div class="form-group">
        <label for="inputEmail">Email</label>
        <input type="email"
               class="form-control"
               id="inputEmail"
               aria-describedby="emailHelp"
               placeholder="Ingrese su Email"
               v-model="email">
      </div>
      <div class="form-group">
        <label for="inputPassword">Password</label>
        <input id="inputPassword"
               v-model="password"
               class="form-control"
               placeholder="Ingrese su Email"
               type="password">
      </div>
      <div class="d-grid gap-2 col-12 mx-auto mt-3">
        <button type="submit"
                class="btn btn-primary"
                @click.prevent="authFirebaseUser">Ingresar con Mail y Password
        </button>
        <div class="d-flex col-12 gap-2 justify-content-center">
          <button class="btn btn-dark"
                  @click.prevent="authGoogle">
            <v-icon name="fc-google"/>
            <span class="ps-2">Google</span>
          </button>
          <button class="btn btn-dark"
                  @click.prevent="authFacebook">
            <v-icon name="co-facebook"/>
            <span class="ps-2">Facebook</span>
          </button>
          <button class="btn btn-dark"
                  @click.prevent="authGithub">
            <v-icon name="bi-github"/>
            <span class="ps-2">GitHub</span>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import useAuth from '@/stores/auth'

const store = useAuth()
let email = ref( '' )
let password = ref( '' )

const authFirebaseUser = () => {
  store.loginUserWithMail( email, password )
}

const authGoogle = () => {
  store.loginUserWithGoogle( email, password )
}

const authFacebook = () => {
  store.loginUserWithFacebook( email, password )
}

const authGithub = () => {
    store.loginUserWithGithub(email, password)
}
</script>

<style lang="scss" scoped>

</style>