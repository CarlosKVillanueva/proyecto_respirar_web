<template>
  <h1>Map</h1>

  <div>
    <span>{{ "User: " + store.user }}</span>
    <br>
    <span>{{ "User: " + store.token }}</span>
  </div>
</template>

<script setup>
import useAuth from '@/stores/auth'

const store = useAuth()
</script>

<style lang="scss" scoped>

</style>