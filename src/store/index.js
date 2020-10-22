import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '@/router/index.js'
Vue.use(Vuex)



export default new Vuex.Store({
  state: {
    authorization: '',
    jwt: localStorage.getItem('token'),
    username: localStorage.getItem('username'),
    username2: '',
    endpoints: {
      obtainJWT: 'api-food_delivery/api/token/',
      refreshJWT: 'api-food_delivery/api/token/refresh/',
      // baseURL: 'http://127.0.0.1:8000/',
      baseURL: 'https://try-coding.herokuapp.com/'
    },
    loggedIn: '',
    registered: '',
    profile: '',


  },
  mutations: {
    updateToken(state, newToken) {
      localStorage.setItem('token', newToken);
      state.jwt = newToken;
    },
    removeToken(state) {
      localStorage.removeItem('token');
      state.jwt = null;
    },
    updateUsername(state, username) {
      localStorage.setItem('username', username);
      state.jwt = username;
    },
    loginSuccess(state, username) {
      state.loggedIn = true;
      state.username = username;
      state.jwt = localStorage.getItem('token');
    },
    loginFailure(state) {
      state.loggedIn = false;
      state.username = null;
    },
    registerSuccess(state) {
      state.registered = true;
      state.jwt = localStorage.getItem('token');
    },
    registerFailure(state) {
      state.registered = false;
    },
    nullShit() {
    },
    authHeader(state) {
      let token = localStorage.getItem('token');
      let username = localStorage.getItem('username');
      if (username && token) {
        state.authorization = 'Bearer ' + token
      } else {
        state.authorization = '';
      }
    },
    addProfile(state, profile_data) {
      state.profile = profile_data
    },

  },
  getters: {
    isLoggedIn: state => !!state.jwt,
    userName: state => state.username2,
    userjwt: state => state.jwt,
    userName1: state => state.username,
    loggedIn: state => state.loggedIn,
    user_profile: state => state.profile,



  },
  actions: {
    obtainToken({ commit }, user) {
      const username = user.username
      console.log("user: ", user);
      axios.post(this.state.endpoints.baseURL + this.state.endpoints.obtainJWT, user)
        .then((res) => {
          commit('updateToken', res.data.access);
          commit('updateUsername', username);
          const token = res.data.token;
          axios.defaults.headers.common['Authorization'] = token
          this.state.username2 = username
          commit('loginSuccess', username)
          router.push('/');
          console.log("token: ", token);
          Vue.$toast.open("Login successful", {
            timeout: 2000
          });
        })
        .catch(err => {
          commit('loginFailure')

          if (err.response.data.username) {
            Vue.$toast.error(err.response.data.username[0], {
              timeout: 2000
            });
          } else if (err.response.data.email) {
            Vue.$toast.error(err.response.data.email[0], {
              timeout: 2000
            });
          } else if (err.response.data.password) {
            Vue.$toast.error(err.response.data.password[0], {
              timeout: 2000
            });
          } else if (err.response.data.detail) {
            Vue.$toast.error(err.response.data.detail, {
              timeout: 2000
            });
          } else {
            Vue.$toast.error(err.response.data, {
              timeout: 2000
            });
          }


        })
    },
    newRegister({ commit }, registerdata) {
      const { username, first_name, email, password, password_confirm } = registerdata;
      axios.post(this.state.endpoints.baseURL + 'api-food_delivery/auth/accounts/register/', {
        username,
        first_name,
        email,
        password,
        password_confirm
      })
        .then(res => {
          console.log("can register");
          this.dispatch('obtainToken', { username, password });
          this.state.username2 = username;
          console.log(res);
          commit('registerSuccess');
          // router.push('/');
          Vue.$toast.open("Registration successful", {
            timeout: 2000
          });
        })
        .catch(err => {
          this.commit('registerFailure')
          console.log("err: ", err);

          if (err.response.data.username) {
            Vue.$toast.error(err.response.data.username[0], {
              timeout: 2000
            });
          } else if (err.response.data.email) {
            Vue.$toast.error(err.response.data.email[0], {
              timeout: 2000
            });
          } else if (err.response.data.password) {
            Vue.$toast.error(err.response.data.password[0], {
              timeout: 2000
            });
          } else if (err.response.data.password_confirm) {
            Vue.$toast.error(err.response.data.password_confirm[0], {
              timeout: 2000
            });
          } else {
            Vue.$toast.error(err.response.data, {
              timeout: 2000
            });
          }
        })
    },


    async sendOrderEmail({ commit }, orderDetails) {
      commit('nullShit');
      // get the owner using user id
      let order_id = orderDetails.orderNo
      console.log("order_id: ", order_id);
      const res_email = await axios.get(this.state.endpoints.baseURL + 'api-shopping_cart3/api_shopping_userEmail/?cart_id=' + order_id)
      console.log("res_email: ", res_email);
    },


    async fetchProfile({ commit }, user_id) {
      // get the owner using user id
      const res_profile = await axios.get(
        this.state.endpoints.baseURL + 'api-accounts_profile/accounts_profile_detail/?search=' + user_id)
      let res_profile_id = res_profile.data[0].id

      const url = this.state.endpoints.baseURL + 'api-accounts_profile/accounts_profile_detail/' + res_profile_id + '/'
      const resupdateProfile = await axios.get(url)
      console.log("resupdateProfile.data: ", resupdateProfile.data);
      commit('addProfile', resupdateProfile.data)

    },


    async updateProfile({ commit }, UpdateProfileData) {
      commit('nullShit');
      const res_profile = await axios.get(
        this.state.endpoints.baseURL + 'api-accounts_profile/accounts_profile_detail/?search=' + UpdateProfileData.user_id)
      let res_profile_id = res_profile.data[0].id
      const url = this.state.endpoints.baseURL + 'api-accounts_profile/accounts_profile_detail/' + res_profile_id + '/'
      axios
        .patch(url, {
          phone: UpdateProfileData.mobile,
          address: UpdateProfileData.location,
          about: UpdateProfileData.about,
        })
        .then(resupdateProfile => {
          Vue.$toast.open("Profile updated", {
            timeout: 2000
          });
          var user_id = UpdateProfileData.user_id
          this.dispatch('fetchProfile', user_id )
        })
    },

    async updateBank({ commit }, UpdateBankData) {
      commit('nullShit');
      const res_profile = await axios.get(
        this.state.endpoints.baseURL + 'api-accounts_profile/accounts_profile_detail/?search=' + UpdateBankData.user_id)
      let res_profile_id = res_profile.data[0].id
      const url = this.state.endpoints.baseURL + 'api-accounts_profile/accounts_profile_detail/' + res_profile_id + '/'
      axios
        .patch(url, {
          account_holder_name: UpdateBankData.account_holder_name,
          account_number: UpdateBankData.account_number,
          bank_name: UpdateBankData.name_of_bank,
        })
        .then(resupdateBank => {
          Vue.$toast.open("Bank Details updated" + resupdateBank, {
            timeout: 2000
          });
          console.log("resupdateBank: ", resupdateBank);
          var user_id = UpdateBankData.user_id
          this.dispatch('fetchProfile', user_id)
        })
    }


  },
  modules: {
  }
})
