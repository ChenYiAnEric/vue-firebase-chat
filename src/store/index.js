import Vue from "vue";
import Vuex from "vuex";
// import { db } from "../db.js";

Vue.use(Vuex);

// const auth = db.auth();

export default new Vuex.Store({
  state: {
    user: null,
    token: "",
    isLogin: false,
    isMobile: false
  },
  mutations: {
    SET_AUTH(state, options) {
      state.user = options.user;
      state.token = options.token;
      state.isLogin = options.isLogin;
    },
    SET_MOBILE(state, option) {
      state.isMobile = option;
    }
  },
  actions: {
    setMobile(context, option) {
      context.commit("SET_MOBILE", option);
    },
    setAuth(context, options) {
      context.commit("SET_AUTH", {
        token: options.token,
        isLogin: options.isLogin
      });
    },
    // signInWithEmail({ commit }, payload) {
    //   return auth
    //     .signInWithEmailAndPassword(payload.email, payload.password)
    //     .then(user => {
    //       if (user) {
    //         commit("SET_AUTH", {
    //           user: user,
    //           token: "",
    //           isLogin: true
    //         });
    //       }
    //     });
    // },
    // signOut({ commit }) {
    //   return auth.signOut().then(() => {
    //     commit("SET_AUTH", {
    //       user: null,
    //       token: "",
    //       isLogin: false
    //     });
    //   });
    // },
    // signInAuto({ commit }) {
    //   return new Promise(resolve => {
    //     auth.onAuthStateChanged(user => {
    //       if (user) {
    //         commit("SET_AUTH", {
    //           user: user,
    //           token: "",
    //           isLogin: true
    //         });
    //       }
    //       resolve(user);
    //     });
    //   });
    // }
  },
  modules: {}
});
