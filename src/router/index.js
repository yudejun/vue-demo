import Vue from 'vue'
import Router from 'vue-router'

import home from './home'
import error from './error'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    ...home,
    // 404,500 错误页面
    ...error
  ]
})
