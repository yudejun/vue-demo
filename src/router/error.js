export default [
  {
    path: '*',
    component: resolve => require(['@/module/Error/404'], resolve)
  }
]
