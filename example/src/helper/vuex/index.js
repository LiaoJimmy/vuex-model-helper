import Vuex from 'vuex';
import { mutationGenerator } from 'vuex-model-helper';

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

const initStore = (vue) => {
  vue.use(Vuex);
  return new Vuex.Store({
    mutations,
    state,
  });
};

export default {
  initStore,
};
