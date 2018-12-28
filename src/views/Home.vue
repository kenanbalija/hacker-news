<template>
  <div class="home">
    <news-component />
  </div>
</template>

<script>
// @ is an alias to /src
import NewsComponent from '@/components/NewsComponent.vue'

export default {
  name: 'home',
  components: {
    NewsComponent
  }
}
</script>
