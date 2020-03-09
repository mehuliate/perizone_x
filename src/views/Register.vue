<template>
  <b-container>
      <h1>Registrasi :</h1>
    <b-row>
      <b-col class="mt-5">
        <b-form @submit="onSubmit" @reset="goBack" v-if="show">

          <b-form-group id="input-group-1" label="Jenis Identitas :" label-for="input-1">
            <b-form-select
              id="input-1"
              v-model="form.jenisIdentitas"
              :options="jenisIdentitas"
              required
            ></b-form-select>
          </b-form-group>

          <b-form-group
            id="input-group-2"
            label="Nomor Identitas :"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model="form.noIdentitas"
              type="text"
              required
              placeholder="Masukan nomor identitas"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-3" label="Nama :" label-for="input-3">
            <b-form-input
              id="input-3"
              v-model="form.name"
              required
              placeholder="Masukan nama"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-4"
            label="Email :"
            label-for="input-4"
          >
            <b-form-input
              id="input-4"
              v-model="form.email"
              type="email"
              required
              placeholder="Masukkan email"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-5" label="Buat Username:" label-for="input-5">
            <b-form-input
              id="input-5"
              v-model="form.username"
              required
            ></b-form-input>
          </b-form-group> 
        
        <b-form-group id="input-group-6" label="Buat Password:" label-for="input-6">
            <b-form-input
              id="input-6"
              v-model="form.password"
              type="password"
              required
            ></b-form-input>
        </b-form-group>


          <b-button type="submit" variant="primary" class="mr-3">Submit</b-button>
          <b-button type="reset" variant="danger">Batal</b-button>
        </b-form>
      </b-col>

    </b-row>
  </b-container>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          jenisIdentitas: null,
          noIdentitas: '',
          username: '',
          password: ''
        },
        jenisIdentitas: [{ text: 'Select One', value: null }, 'NPWP', 'Passpor', 'KTP', 'Lainnya'],
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      goBack(){
          return this.$router.go(-1)
      }
    }
  }
</script>