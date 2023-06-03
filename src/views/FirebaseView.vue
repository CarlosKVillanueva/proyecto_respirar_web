<template>
  <div class="container">
    <form>
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
      <button type="submit" class="btn btn-primary mt-2" @click.prevent="authUser">Log in</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

let email = ref( '' )
let password = ref( '' )

const authUser = () => {
  console.log('login')
  const auth = getAuth()
  signInWithEmailAndPassword( auth, email.value, password.value )
      .then( () => {
        alert( "Exito" )
      } )
      .catch( ( error ) => {
        alert( "Error: " + error.message )
      } )
}


</script>

<style lang="scss" scoped>

</style>