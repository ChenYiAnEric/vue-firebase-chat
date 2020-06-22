<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" height="40">
    <div class="testInput">
      <table border="1">
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
        <tr v-for="(item, key) in message" :key="key">
          <td>{{key}}</td>
          <td>{{item.Author.Name}}</td>
          <td>{{item.Author.Email}}</td>
          <td>{{item.Author.PhotoUrl}}</td>
          <td>{{item.Content}}</td>
          <td>{{dateFormat(item.CreateTime.toDate())}}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="testInput">
      <input type="text" v-model="inputMessage">
      <input type="submit" value="送出" @click="addMessage()">
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { db } from '../db'
import firebase from 'firebase'

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
    message: db.collection('Message')
  },
  created () {
    // this.message = this.$root.$data.message
  },
  methods: {
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
      db.collection('Message').add({
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
    }
  }
}
</script>
<style>
  .testInput{
    display: flex;
    align-content: center;
    justify-content: center;
  }
</style>
