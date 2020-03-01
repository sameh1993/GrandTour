import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

import router from "./router";

import db from "./firebase/firebase.js";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    user: null
  },
  mutations: {
    authUser(state, userData) {
      state.idToken = userData.token
      state.userId = userData.userId
    },
    storeUser(state, user) {
      state.user = user
    },
    clearAuthData(state) {
      state.idToken = null
      state.userId = null
    }
  },
  actions: {
    setLogoutTimer({
      commit
    }, expirationTime) {
      setTimeout(() => {
        commit('clearAuthData')
      }, expirationTime * 1000)
    },
    signup({
      commit,
      dispatch
    }, authData) {
      axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBGlqvOdYNe6eupAFFtMzgpnZv8QTcVqOc', {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        })
        .then(res => {
          console.log(res)
          commit('authUser', {
            token: res.data.idToken,
            userId: res.data.localId
          })
          // const now = new Date()
          // const expirationDate = new Date(now.getTime() + res.data.expiresIn * 1000)
          // localStorage.setItem('token', res.data.idToken)
          // localStorage.setItem('userId', res.data.localId)
          // localStorage.setItem('expirationDate', expirationDate)
          dispatch('storeUser', authData)
          // dispatch('setLogoutTimer', res.data.expiresIn)
        })
        .catch(error => {
          console.log(error.response.data.error.message)
          let myError = error.response.data.error.message;
          if (myError === 'INVALID_PASSWORD' || myError === "EMAIL_NOT_FOUND") {
            alert("please, enter a valid Email or Password")
          }
        })
    },
    login(authData) {
      // axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBGlqvOdYNe6eupAFFtMzgpnZv8QTcVqOc', {
      //     email: authData.email,
      //     password: authData.password,
      //     returnSecureToken: true
      //   })
      //   .then(res => {
      //     console.log(res)
      //     let checkBox = authData.check;
      //     if (checkBox === true) {
      //       const now = new Date()
      //       const expirationDate = new Date(now.getTime() + res.data.expiresIn * 1000)
      //       localStorage.setItem('token', res.data.idToken)
      //       localStorage.setItem('userId', res.data.localId)
      //       localStorage.setItem('expirationDate', expirationDate)
      //     }
      //     // commit('authUser', {
      //     //   token: res.data.idToken,
      //     //   userId: res.data.localId
      //     // })
      //     // dispatch('storeUser', res.data.email)
      //     alert("Sign In is Done");
      //     // dispatch('setLogoutTimer', res.data.expiresIn)
      //   })
      //   .catch(error => {
      //     console.log(error.response)
      //     console.log(error.response.data.error.message)
      //     let myError = error.response.data.error.message;
      //     if (myError === 'INVALID_PASSWORD' || myError === "EMAIL_NOT_FOUND") {
      //       alert("please, enter a valid Email or Password")
      //     }
      //   })
        db.auth().signInWithEmailAndPassword(authData.email, authData.passsword)
        .catch(error => {
          console.log(error)
        })
      
    },
    tryAutoLogin({
      commit
    }) {
      const token = localStorage.getItem('token')
      if (!token) {
        return
      }
      const expirationDate = localStorage.getItem('expirationDate')
      const now = new Date()
      if (now >= expirationDate) {
        return
      }
      const userId = localStorage.getItem('userId')
      commit('authUser', {
        token: token,
        userId: userId
      })
    },
    logout({
      commit
    }) {
      commit('clearAuthData')
      localStorage.removeItem('expirationDate')
      localStorage.removeItem('token')
      localStorage.removeItem('userId')
      router.replace('/register')
    },
    storeUser({
      state
    }, userData) {
      if (!state.idToken) {
        return
      }
      axios.post('' + '?auth=' + state.idToken, userData)
        .then(res => console.log(res))
        .catch(error => console.log(error))
    },
    fetchUser({
      commit,
      state
    }) {
      if (!state.idToken) {
        return
      }
      axios.get('' + '?auth=' + state.idToken)
        .then(res => {
          console.log(res)
          const data = res.data
          const users = []
          for (let key in data) {
            const user = data[key]
            user.id = key
            users.push(user)
          }
          console.log(users)
          commit('storeUser', users[0])
        })
        .catch(error => {
          console.log(error)
        })
    },
    resetPassword(state, newPassword){
      return axios("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBGlqvOdYNe6eupAFFtMzgpnZv8QTcVqOc", 
        {
          idToken: state.idToken,
          password: newPassword,
          returnSecureToken	: true
        }
      ).then(res => {
        console.log(res);
        alert("the u[pdate password is Done")
      }).catch(error => {
        console.log(error.response)
      })
    }
  },
  getters: {
    user(state) {
      return state.user
    },
    isAuthenticated(state) {
      return state.idToken !== null
    },
    itTokken(state) {
      return state.idToken;
    }
  }
})