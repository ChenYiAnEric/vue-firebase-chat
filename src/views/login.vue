<template>
  <div>
    <v-main>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            md="4"
            sm="8"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="blue darken-1"
                dark
                flat
              >
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Login"
                    name="login"
                    prepend-icon="mdi-account"
                    color="blue darken-1"
                    type="text"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    color="blue darken-1"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" dark>Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>
<script>
import firebase from 'firebase/app'
import { db } from '../db'

const fAuth = db.auth()

export default {
  data () {
    return {
      user: {},
      isAuth: false
    }
  },
  created () {
    fAuth.onAuthStateChanged(user => {
      if (user) {
        this.user = user
        this.isAuth = true
      } else {
        this.user = {}
        this.isAuth = false
      }
    })
  },
  methods: {
    login () {
      const authProvider = new firebase.auth.GoogleAuthProvider()
      fAuth.signInWithPopup(authProvider)
        .then(result => {
          this.user = result.user
          this.isAuth = true
        })
        .catch(err => console.error(err))
    },
    logout () {
      fAuth.signOut()
        .then(() => {
          this.user = {}
          this.isAuth = false
        })
        .catch(err => console.log(err))
    }
  }
}
</script>
