<template>
  <div>
    <button @click="login">登入</button>
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
