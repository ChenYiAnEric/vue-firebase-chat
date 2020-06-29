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
            <v-card v-if="!isAuth" class="elevation-12">
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
                    v-model="account"
                    :rules="emailRules"
                    type="email"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    color="blue darken-1"
                    v-model="password"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" dark @click="login">Login</v-btn>
                <v-btn color="blue darken-1" dark @click="singUp">Sing Up</v-btn>
              </v-card-actions>
            </v-card>
            <v-card v-else>
              <v-toolbar
                color="blue darken-1"
                dark
                flat
              >
                <v-toolbar-title>user</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>Hellow {{user.email}}</v-card-text>
              <v-card-actions>
                <v-btn color="blue darken-1" dark @click="logout">LogOut</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>
<script>
// import firebase from 'firebase/app'
import { db } from '../db'

const fAuth = db.auth()

export default {
  data () {
    return {
      user: {},
      isAuth: false,
      account: '',
      password: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ]
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
    singUp () {
      this.$router.push('/singup')
    },
    login () {
      // const authProvider = new firebase.auth.GoogleAuthProvider()
      // fAuth.signInWithPopup(authProvider)
      //   .then(result => {
      //     this.user = result.user
      //     this.isAuth = true
      //   })
      //   .catch(err => console.error(err))
      const vm = this
      fAuth.signInWithEmailAndPassword(vm.account, vm.password)
        .then(function (user) {
          vm.user = user
          vm.isAuth = true
        })
        .catch(function (error) {
          const errorCode = error.code
          const errorMessage = error.message
          alert(errorCode, errorMessage)
        })
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
