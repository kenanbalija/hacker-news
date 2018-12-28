<template>
  <div class="hello">
    <h1>Latest News of Today</h1>
    <ul class="news-items" v-if="news.length">
      <li v-for="n in news" :key="n" class="item">
        <single-article :article="n"/>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import SingleArticle from '@/components/SingleArticle.vue'

export default {
  name: 'NewsComponent',
  components: {
    SingleArticle
  },
  data() {
    return {
      news: [],
    }
  },
  mounted() {
    this.fetchAllNews();
  },
  methods: {
    fetchAllNews() {
      axios.get('https://hacker-news.firebaseio.com/v0/topstories.json').then((response) => {
        this.news = response.data;
      }, (error) => {
        console.log(error)
      })
    },
  },
}
</script>

<style scoped>
h1 {
  color: #5f5f5d;
  text-align: center;
  font-size: 24px;
  margin-top: 20px;
  margin-bottom: 20px;
}
.news-items {
  border: 1px solid #d8d8d8;
  border-radius: 4px;
  background-color: #fff;
}
</style>
