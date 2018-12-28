<template>
  <div id="app">
    <nav-bar />
    <router-view class="container"/>
  </div>
</template>

<script>
import NavBar from '@/components/NavbarComponent.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>

</style>
