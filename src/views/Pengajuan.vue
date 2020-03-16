<template>
  <div>
    <b-container class="mt-2" fluid>
      <b-card 
        border-variant="dark"
        header="Browse"
        header-bg-variant="dark"
        header-text-variant="white"
        >
        <b-card-body>
          <b-button to="/pengajuan/new" class="m-3">pelayanan 1</b-button>
          <b-table striped hover :items="items"></b-table>

        </b-card-body>

      </b-card>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  data() {
      return {
        items: [
          { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { age: 38, first_name: 'Jami', last_name: 'Carney' }
        ]
      }
    }
}
</script>
