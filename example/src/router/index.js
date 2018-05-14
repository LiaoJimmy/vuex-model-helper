import Vue from 'vue';
import Router from 'vue-router';
import Basic from '../components/Basic';
import Example from '../components/Example';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Basic',
      component: Basic,
    },
    {
      path: '/example',
      name: 'Example',
      component: Example,
    },
  ],
});
