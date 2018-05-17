import Vue from 'vue'
import Router from 'vue-router'

import Header from '@components/header'
import Footer from '@components/footer'
import Home from '@components/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/head',
      name: 'head ',
      component: Header
    },
    {
      path: '/footer',
      name: 'footer',
      component: Footer
    }
  ]
})
