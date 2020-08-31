<template>
  <v-container>
  <div class="chat-room pa-4">
    <v-col v-if="isLogin">
      <v-card max-height="70vh" style="overflow: auto">
        <v-card-text>
          <v-flex  v-for="(item, key) in MessageSort"
                   :key="key" :class="isMy(item.Author.Email, false)">
            <p v-if="!isMy(item.Author.Email, true)" class="ma-0 ml-2">{{name(item.Author.Email)}}</p>
            <v-alert
              class="rounded-pill ma-0 d-inline-block"
              dense
              color="grey darken-1"
              dark
            >
              {{item.Content}}
            </v-alert>
          </v-flex>
        </v-card-text>
      </v-card>
      <div class="testInput">
        <v-col lg="6" md="6" sm="12" xs="12">
          <v-text-field
            @click:append-outer="addMessage"
            @click:clear="clearMessage"
            append-outer-icon="mdi-send"
            label="請輸入文字"
            single-line
            solo
            v-model="inputMessage"
          ></v-text-field>
        </v-col>
      </div>
    </v-col>
    <v-col class="text-center">
      <v-btn v-if="!isLogin" @click="login" class="chat-login-btn">請先登入</v-btn>
    </v-col>
  </div>
  </v-container>
</template>
<script>
import { db } from '../db'
import firebase from 'firebase'

const fStore = db.firestore()
export default {
  name: 'chat',
  data () {
    return {
      message: [],
      inputMessage: ''
    }
  },
  firestore: {
    message: fStore.collection('Message')
  },
  computed: {
    user () {
      return this.$store.state.user
    },
    isLogin () {
      return this.$store.state.isLogin
    },
    MessageSort () {
      const message = this.message
      const sort = message.sort(function (a, b) {
        return new Date(b.CreateTime.toDate()) - new Date(a.CreateTime.toDate())
      }).reverse()
      return sort
    }
  },
  methods: {
    login () {
      this.$router.push('/login')
    },
    dateFormat (time) {
      var date = new Date(time)
      var year = date.getFullYear()
      var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
      var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
      var hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
      var minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
      var seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
      // 拼接
      return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds
    },
    isMy (_email, _type) {
      if (_type) {
        if (_email === this.user.email) {
          return true
        } else {
          return false
        }
      } else {
        if (_email === this.user.email) {
          return 'text-right'
        } else {
          return 'text-left'
        }
      }
    },
    name (_email) {
      return _email.split('@')[0]
    },
    addMessage () {
      if (this.inputMessage === '') return
      const name = this.user.email.split('@')[0]
      // Add message to firestore
      fStore.collection('Message').add({
        Author: {
          Uid: 'xxx',
          Name: name,
          PhotoUrl: 'https://test.test',
          Email: this.user.email
        },
        Content: this.inputMessage,
        CreateTime: firebase.firestore.Timestamp.fromDate(new Date())
      })
        .then(() => {
          this.inputMessage = ''
        })
        .catch((error) => {
          console.log('錯誤:' + error)
        })
    },
    clearMessage () {
      this.inputMessage = ''
    }
  }
}
</script>
<style>
  .testInput {
    display: flex;
    align-content: center;
    justify-content: center;
  }
  .chat-login-btn {
    width: 200px;
    height: 200px;
    border-radius: 50em;
    font-size: 28px;
    background: linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898;
    background-blend-mode: multiply,multiply;
    color: #fff;
  }
</style>
