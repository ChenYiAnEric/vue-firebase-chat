<template>
  <v-app>
    <v-app-bar
      app
      color="blue darken-1"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>Hello</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer
      absolute
      temporary
      v-model="drawer"
    >
      <v-list
        dense
        nav
      >
        <v-list-item-group
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item to="/about">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>

          <v-list-item v-if="!isLogin" to="/login">
            <v-list-item-icon>
              <v-icon>mdi-login</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item>

          <v-list-item v-if="isLogin" @click="logout">
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {},
  created () {
    this.$store.dispatch('signInAuto')
  },
  computed: {
    isLogin () {
      return this.$store.state.isLogin
    }
  },
  data: () => ({
    drawer: false
  }),
  methods: {
    logout () {
      this.$store.dispatch('signOut')
        .then(() => {
          this.$router.push('/login')
        })
    }
  }
}
</script>
