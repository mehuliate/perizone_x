<template>
  <div>
    <Navbar></Navbar>
    <b-container class="mt-2" fluid>
      <Breadcrumb></Breadcrumb>
      <TableExample></TableExample>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue"
import Breadcrumb from "@/components/Breadcrumb.vue"
import TableExample from "@/components/TableExample.vue"
export default {
  name: 'home',
  components: {
    Navbar,
    Breadcrumb,
    TableExample
  }
}
</script>
