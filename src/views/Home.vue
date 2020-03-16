<template>
  <div>
    <Navbar></Navbar>
    <b-container fluid>

      <Breadcrumb class="mt-3 mb-3"></Breadcrumb>
      <router-view></router-view>

    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue"
import Breadcrumb from "@/components/Breadcrumb.vue"
export default {
  name: 'home',
  components: {
    Navbar,
    Breadcrumb
  }
}
</script>
