<template>
  <v-app>
    <div class="justify-center">
      <v-toolbar app dark color="blue darken-1" class="hidden-sm-and-down">
        <v-toolbar-title style="position: absolute">Eric Home</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn
            v-for="(item, index) in nav"
            :key="index"
            :to="item.url"
            :title="item.title"
            color="blue darken-1"
            depressed
          >{{item.text}}</v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-btn icon v-if="!isLogin" to="/login">
          <v-icon>mdi-login</v-icon>
        </v-btn>
        <v-btn icon v-if="isLogin" @click="logout">
          <v-icon>mdi-logout</v-icon>
        </v-btn>
      </v-toolbar>
      <v-toolbar app dark color="blue darken-1" class="hidden-md-and-up">
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        <v-toolbar-title>Eric Home</v-toolbar-title>
      </v-toolbar>
    </div>
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
          <v-list-item
            v-for="(item, index) in nav"
            :key="index"
            :to="item.url"
            flat
          >
            <v-list-item-icon>
              <v-icon>{{item.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{item.text}}</v-list-item-title>
          </v-list-item>

          <v-list-item v-if="!isLogin" to="/login">
            <v-list-item-icon>
              <v-icon>mdi-login</v-icon>
            </v-list-item-icon>
            <v-list-item-title>登入</v-list-item-title>
          </v-list-item>

          <v-list-item v-if="isLogin" @click="logout">
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-title>登出</v-list-item-title>
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
    },
    isMobile () {
      var breakpoint = this.$vuetify.breakpoint.name
      if (breakpoint === 'xs' || breakpoint === 'sm') {
        return true
      } else {
        return false
      }
    }
  },
  data () {
    return {
      drawer: false,
      nav: [
        {
          icon: 'mdi-home',
          text: '首頁',
          title: 'home',
          url: '/'
        },
        {
          icon: 'mdi-account',
          text: '關於',
          title: 'about',
          url: '/about'
        },
        {
          icon: 'mdi-chat',
          text: '聊天室',
          title: 'chat',
          url: '/chat'
        }
      ]
    }
  },
  watch: {
    isMobile: {
      handler (val) {
        if (!val) {
          this.drawer = val
        }
      }
    }
  },
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
