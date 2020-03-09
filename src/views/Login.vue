<template>
<b-container>
    <b-row>
        <b-col md="4" id="page-login">
          <b-card bg-variant="dark" header="Login" text-variant="white">
            <template v-slot:header>
              <h5 class="mb-0"><BIconUnlockFill /> Login</h5>
            </template>
              <b-card-text>
                  <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                    <b-form-group
                        id="input-group-1"
                        label="Username:"
                        label-for="input-1"
                    >
                        <b-form-input
                        id="input-1"
                        v-model="form.username"
                        type="text"
                        required
                        placeholder="Enter username"
                        ></b-form-input>
                    </b-form-group>
                    <b-form-group
                        id="input-group-1"
                        label="Password:"
                        label-for="input-1"
                    >
                        <b-form-input
                        id="input-1"
                        v-model="form.email"
                        type="password"
                        required
                        placeholder="Enter password"
                        ></b-form-input>
                    </b-form-group>
                    <b-button block variant="primary">Submit</b-button>
                </b-form>
              </b-card-text>
                <p class="text-center"><a href="#"><router-link to="/register">Register</router-link></a></p>
            </b-card>
        </b-col>
    </b-row>
</b-container>
</template>

<script>
import {BIconUnlockFill } from 'bootstrap-vue'
  export default {
    components: {
      BIconUnlockFill
    },
    data() {
      return {
        form: {
          username: '',
          password: ''
        },
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.username = ''
        this.form.password = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

<style>
#page-login {
  margin: 120px auto;
}
</style>