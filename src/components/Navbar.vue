<template>
    <div>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="#">Perizone</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#"><router-link to="/">Home</router-link></b-nav-item>
        <b-nav-item href="#"><router-link to="/pengajuan">Pengajuan</router-link></b-nav-item>
        <b-nav-item href="#"><router-link to="/login">login</router-link></b-nav-item>
        <b-nav-item href="#"><router-link to="/about">About</router-link></b-nav-item>
        <b-nav-item href="#"><router-link to="/register">Register</router-link></b-nav-item>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</div>
</template>

<style>
nav a {
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
}
</style>