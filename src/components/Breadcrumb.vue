<template>
  <b-breadcrumb :items="breadCrumbData"></b-breadcrumb>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {
            text: 'Admin',
            href: '#'
          },
          {
            text: 'Manage',
            href: '#'
          },
          {
            text: 'Library',
            active: true
          }
        ]
      }
    },

    computed: {
      breadCrumbData() {
        const r = this.$route

        console.log(r.matched.filter(e => e.meta.breadcrumb))

        const rr = r.matched.filter(e => e.meta.breadcrumb).map(e => ({
          text: e.meta.breadcrumb,
          to: e.path ? e.path : '/',
          active: false
        }))

        rr[rr.length-1].active = true
        
        return rr

        /* return r.matched.filter(e => e.name).map(e => ({
          text: e.name,
          active: e.name == r.name,
          to: {
            name: e.name
          }
        })) */
      }
    },

    watch: {
      '$route': function (val) {
        // console.log(val.name)
        this.$store.commit('setActive', val.name)
        // console.log('active:')
        // console.log(this.$store.state.active)
      }
    }
  }
</script>