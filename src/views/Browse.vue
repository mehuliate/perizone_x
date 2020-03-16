<template>
  <div>
    <b-container class="mt-2" fluid>
      <b-card 
        border-variant="primary"
        header="Browse Pengajuan"
        header-bg-variant="primary"
        header-text-variant="white"
        >
        <b-card-body>
          <b-button to="/pengajuan/new" class="mb-3" variant="outline-dark" align='right'>Pengajuan Baru</b-button>
          <b-table responsive bordered striped hover outlined :items="items" small></b-table>
          <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="my-table"
            align="right"
          ></b-pagination>

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
          { no: 7, perizinan: 'Perizinan 1', status: 'Awal' },
          { no: 6, perizinan: 'Perizinan 2', status: 'Awal' },
          { no: 5, perizinan: 'Perizinan 4', status: 'Awal' },
          { no: 5, perizinan: 'Perizinan 4', status: 'Awal' },
          { no: 5, perizinan: 'Perizinan 4', status: 'Awal' },
          { no: 5, perizinan: 'Perizinan 4', status: 'Awal' },
          { no: 4, perizinan: 'Perizinan 6', status: 'Awal' },
          { no: 3, perizinan: 'Perizinan 7', status: 'Awal' },
          { no: 2, perizinan: 'Perizinan 9', status: 'Awal' },
          { no: 1, perizinan: 'Perizinan 11', status: 'Awal' }
        ]
      }
    }
}
</script>
