<template>
  <div class="home" style="text-align: center">
    <img alt="Vue logo" height="40" src="../assets/logo.png">
    <v-card class="col-6 mx-auto">
      <v-card-text v-if="isLogin">
        <div class="testInput">
          <v-simple-table>
            <template v-slot:default>
              <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>PhotoUrl</th>
                <th>Content</th>
                <th>time</th>
              </tr>
              </thead>
              <tbody>
              <tr :key="key" v-for="(item, key) in message">
                <td>{{key}}</td>
                <td>{{item.Author.Name}}</td>
                <td>{{item.Author.Email}}</td>
                <td>{{item.Author.PhotoUrl}}</td>
                <td>{{item.Content}}</td>
                <td>{{dateFormat(item.CreateTime.toDate())}}</td>
              </tr>
              </tbody>
            </template>
          </v-simple-table>
        </div>
        <div class="testInput">
          <v-col lg="6" md="6" sm="6" xs="12">
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
      </v-card-text>
      <v-card-text>
        <v-btn v-if="!isLogin" @click="login">請先登入</v-btn>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
// @ is an alias to /src
import { db } from '../db'
import firebase from 'firebase'

const fStore = db.firestore()

export default {
  name: 'Home',
  components: {},
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
    isLogin () {
      return this.$store.state.isLogin
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
    addMessage () {
      if (this.inputMessage === '') return

      // Add message to firestore
      fStore.collection('Message').add({
        Author: {
          Uid: 'xxx',
          Name: 'Eric',
          PhotoUrl: 'https://test.test',
          Email: 'xxx@test.test'
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
</style>
