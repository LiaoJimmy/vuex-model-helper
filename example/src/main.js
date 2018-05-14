// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import { mutationGenerator } from 'vuex-model-helper';

import App from './App';
import router from './router';

Vue.config.productionTip = false;
Vue.use(Vuex);

const state = {
  userName: '',
  gender: '',
  note: '',
  language: [],
  userClass: '',
};
const mutations = {
  ...mutationGenerator([
    'userName',
    'gender',
    'note',
    'language',
    'userClass',
  ]),
};
const store = new Vuex.Store({
  mutations,
  state,
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store,
});
