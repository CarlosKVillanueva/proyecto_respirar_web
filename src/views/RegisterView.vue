<template>
  <form>
    <div class="container">
      <div class="col-6 mx-auto">
        <h3 class="text-center">Registro de Cuenta</h3>
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
                  @click.prevent="registerUser">Ingresar con Mail y Password
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'

const email = ref( '' )
const password = ref( '' )
const router = useRouter()

const registerUser = () => {
  createUserWithEmailAndPassword( getAuth(), email.value, password.value )
      .then( ( data ) => {
        router.push( '/home' )
      } )
      .catch( ( error ) => {
        console.log( error.code, error.message )
        alert( error.message )
      } )
}

const signInWithGoogle = () => {

}
</script>

<style lang="scss" scoped>

</style>