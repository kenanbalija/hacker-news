<template>
<div>
  <nav class="navbar" role="navigation" aria-label="main navigation">

    <div id="navbarBasicExample" class="navbar-menu container">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
        <div>Y</div>
        <span>Hacker News</span>
      </router-link>

      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

      <div class="navbar-end">
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link search-dropdown">
            <i class="fas fa-search"></i>
          </a>
          <div class="navbar-dropdown p-0">
            <input class="navbar-item" placeholder="Search" v-model="search" @keyup="updateSearch"/>
          </div>
        </div>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link login-dropdown">
            <i class="fas fa-user"></i>
          </a>

          <div class="navbar-dropdown">
            <router-link class="navbar-item" :to="link.route" v-for="link in profileLinks" :key="link.name">{{ link.name }}</router-link>
          </div>
        </div>
      </div>
    </div>

  </nav>

  <section class="sub-nav ">
    <div class="container">
      <button class="button" v-for="sub in subnavigation" :key="sub.name">{{ sub.name }}</button>
    </div>
  </section>
</div>
</template>

<script>
export default {
  name: 'NavbarComponent',
  props: {
  },
  data() {
    return {
      search: '',
      subnavigation: [
        {name: 'News',filter: 'news'},
        {name: 'Show',filter: 'show'},
        {name: 'Comments',filter: 'comments'},
        {name: 'Ask',filter: 'ask'},
        {name: 'Jobs',filter: 'jobs'},
      ],
      profileLinks: [
        {name: 'Submit', route: '/'},
        {name: 'Favorites', route: '/'},
        {name: 'Threads', route: '/'},
        {name: 'Settings', route: '/'},
        {name: 'Sign out', route: '/'},
      ]
    }
  },
  methods: {
    updateSearch() {
      this.$store.dispatch('setSearch', this.search);
    }
  }
}
</script>

<style scoped>
  .navbar {
    background-color: #EB6D37;
    color: #fff;
  }

  .navbar-brand .navbar-item span {
    color: #fff;
    padding-left: 10px;
    font-size: 20px
  }

  .navbar-brand .navbar-item div {
    color: #fff;
    font-size: 28px;
    border: 1px solid #fff;
    width: 46px;
    text-align: center;
  }
  .sub-nav {
    background-color: #F0F0EA;
    padding-top: 4px;
    height: 36px;
  }
  .sub-nav .container button:focus, .sub-nav .container button:active {
    color: #fff;
    background:#EB6D37;
  }
  button {
    margin-right: 10px;
    font-size: 12px;
    border-radius: 15px;
    color: #8c8c89;
    border: none;
  }
  button:focus {
    outline:0;
  }
  .login-dropdown::after, .search-dropdown::after {
    display: none;
  }
  input:focus{
    outline: none;
  }
  input {
    border: none;
    font-size: 16px;
  }
  .fas {
    color: #fff;
  }
  .navbar-item.has-dropdown.is-active .navbar-link, .navbar-item.has-dropdown:hover .navbar-link {
    background: initial;
  }
</style>
