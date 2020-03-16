<template>
    <div>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="#">{{appName}}</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/" @click="handleClick('home')" :active="isActive('home')">Home</b-nav-item>
        <b-nav-item to="/browse" @click="handleClick('browse')" :active="isActive('browse')">Browse</b-nav-item>
        <b-nav-item to="/login" >login</b-nav-item>
        <b-nav-item to="/about" v-if="cekRole('Administrator')">About</b-nav-item>
        <b-nav-item to="/register">Register</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            {{$store.state.userInfo.name}}
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item @click="$store.dispatch('logout')">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  data (){
    return {
    }
  },
  computed: {
    ...mapGetters(['active','cekRole']),
    appName(){
      return process.env.VUE_APP_NAME
    }
  },
  methods: {
    ...mapMutations(['setActive']),

    handleClick(component) {
      console.log(this.active)
      this.setActive(component)
    },

    isActive(component) {
      return this.active == component
    }
  },
  watch: {
    '$route': function(val) {
      console.log(val)
    }
  }
}
</script>

<style>
/* nav a {
  color: brown;
}
nav a:hover {
  text-decoration: none;
  font-weight: 700;
  color: orange;
}

nav a.router-link-active {
    color: orange;
    font-weight: 700;
    text-decoration: none;
}

a.navbar-brand {
  color: red;
  font-size: 25px;
  margin-right: 30px;
} */
</style>