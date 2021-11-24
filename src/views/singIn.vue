<template>
  <div>
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" md="4" sm="8">
            <v-card class="elevation-12">
              <v-toolbar color="blue darken-1" dark flat>
                <v-toolbar-title>Registered</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="E-mail"
                    name="account"
                    prepend-icon="mdi-account"
                    color="blue darken-1"
                    type="email"
                    :rules="emailRules"
                    v-model="account"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    color="blue darken-1"
                    type="password"
                    v-model="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions @click="singUp()">
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" dark>Sing Up</v-btn>
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
// import { db } from "../db";

// const fAuth = db.auth();

export default {
  data() {
    return {
      account: "",
      password: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ]
    };
  },
  methods: {
    singUp() {
      const vm = this;
      if (vm.account === "") {
        alert("請輸入帳號");
        return false;
      } else {
        if (vm.password === "") {
          alert("請輸入密碼");
          return false;
        } else {
          // fAuth
          //   .createUserWithEmailAndPassword(vm.account, vm.password)
          //   .then(function() {
          //     vm.$router.push("/");
          //   })
          //   .catch(function(error) {
          //     const errorCode = error.code;
          //     const errorMessage = error.message;
          //     alert(errorCode, errorMessage);
          //   });
        }
      }
    }
  }
};
</script>
