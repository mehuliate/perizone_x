<template>
<b-container>
    <b-row>
        <b-col md="4" id="page-login">
          <b-card bg-variant="dark" header="Login" text-variant="white">
            <template v-slot:header>
              <h5 class="mb-0"><BIconUnlockFill /> Login</h5>
            </template>
              <b-card-text>
                  <b-form @submit.prevent="onSubmit" @reset="onReset" v-if="show">
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
                        :disabled="busy"
                        ></b-form-input>
                    </b-form-group>
                    <b-form-group
                        id="input-group-1"
                        label="Password:"
                        label-for="input-1"
                    >
                        <b-form-input
                        id="input-1"
                        v-model="form.password"
                        type="password"
                        required
                        placeholder="Enter password"
                        :disabled="busy"
                        ></b-form-input>
                    </b-form-group>
                    <b-alert variant="danger" show v-if="error">{{error}}</b-alert>
                    <b-button type="submit" block variant="primary" :disabled="busy">
                      <template v-if="busy">
                        <b-spinner small variant="white">
                        </b-spinner>
                        Attaching...
                      </template>
                      <template v-else>
                        Login
                      </template>
                    </b-button>
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

const axios = require('axios')

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
        error: null,
        show: true,
        busy: false
      }
    },
    methods: {
      onSubmit() {
            const fd = new FormData()
            fd.set('username', this.form.username)
            fd.set('password', this.form.password)


            axios({
                method: 'post',
                url: this.$store.state.ssoLogin,
                data: fd,
                config: {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            }).then( (e) => {
              this.$store.commit('setUserInfo', e.data)
              this.$router.push({
                path: '/'
              })
            }).catch((e) => {
              console.log(e)
              this.error = e.response.data.error
            })
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
    },
    created () {
      // flag busy
      this.busy = true
      // attach first
      const attachUrl = this.$store.state.ssoAttach

      axios.get(attachUrl, {
        crossDomain: true
      })
        .then(e => {
          console.log('done attach...')
          console.log(e)
          this.busy = false
        })
        .catch(e => {
          console.log('error attaching...')
          console.log(e)
          this.busy = false
        })
    },
    computed: {
      attachImageUrl: function () {
        const attachUrl = this.$store.state.attachUrl
        console.log('attach url: ', attachUrl)
        return attachUrl
      }
    }
  }
</script>

<style>
#page-login {
  margin: 120px auto;
}
</style>