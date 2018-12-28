<template>
  <section class="columns" v-if="filterSearch">
    <div class="column is-one-fifths">
      <div class="columns">
        <div class="column">
          <span class="score">{{ articleData.score }}</span><br/>
          <span class="score-text">Points</span>
        </div>
        <div class="column">
          <span class="score">{{ articleData.score }}</span><br/>
          <span class="score-text">Points</span>
        </div>
      </div>
    </div>
    <div class="column is-three-fifths">
      <section>
        <p class="title-text">{{ articleData.title }}</p>
        <small><i class="far fa-clock"></i> {{ calculateTime(articleData.time) }} minutes ago</small>
        <small><i class="fas fa-user"></i> {{ articleData.by }}</small>
        <small><i class="fas fa-link"></i><a :href="articleData.url">Url</a></small>
      </section>
    </div>
    <div class="column is-one-fifths center">
      <div class="read-more">
        <button>Read More</button>
      </div>
    </div>
  </section>
</template>

<script>

import axios from 'axios'
import { mapState } from 'vuex';

export default {
  name: 'SingleArticle',
  data() {
    return {
      articleData: {},
      searchString: '',
    }
  },
  props: {
    //todo: rename to id or smth
    article: ''
  },
  mounted() {
    this.fetchArticle(this.article);
  },
  methods: {
    fetchArticle(id) {
      axios.get('https://hacker-news.firebaseio.com/v0/item/'+ id + '.json').then((response) => {
        this.articleData = response.data;
      }, (error) => {
        console.log(error)
      })
    },
    calculateTime(secs) {
      let t = new Date(1970, 0, 1); // Epoch
      t.setSeconds(secs);
      // TODO: add correct time
      return t.getMinutes();
    },
    showArticle() {
      let search = JSON.parse(JSON.stringify(this.$store.state));
      return this.articleData.title.toUpperCase().includes(search.search.toUpperCase());
    }
  },
  computed: {
    filterSearch() {
      if (this.articleData.title)
        return this.showArticle();
      return false;
    }
  }
}
</script>
<style scoped>
  section.columns {
    margin: 0 auto;
    border-bottom: 1px solid #d8d8d8;
  }
  small {
    margin-right: 10px;
    color: #8c8c89;
  }
  .center {
    text-align: center;
  }
  .column section {
    border-left: 2px solid #d8d8d8;
    padding-left: 10px;
  }
  .score {
    color: #DD7345;
  }
  .score-text {
    color: #8c8c89;
    text-transform: uppercase;
    font-size: 14px;
  }
  .fas {
    font-size: 12px;
    margin-right: 2px;
  }
  a { color: inherit; }
  .title-text {
    font-weight: 700;
    font-size: 20px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  } 
  .read-more {
    display: grid;
    height: 100%;
  }
  .read-more button {
    margin: auto;
  }
</style>

