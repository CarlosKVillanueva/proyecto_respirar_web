<template>
  <h1>Create an Account</h1>
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
    <button type="submit" class="btn btn-primary mt-2" @click.prevent="registerUser">Register with Email</button>
    <button type="submit" class="btn btn-primary mt-2 ms-1" @clik.prevent="signInWithGoogle">Log in with Google</button>
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
      .then( (data) => {
        router.push('/home')
      })
      .catch((error) => {
        console.log( error.code, error.message )
        alert(error.message)
      })
}

const signInWithGoogle = () => {

}
</script>

<style lang="scss" scoped>

</style>