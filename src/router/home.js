export default [
  {
    path: '/',
    component: resolve => require(['@/module/Index'], resolve),
    children: [
      {
        path: '/',
        redirect: 'home'
      },
      {
        path: 'home',
        component: resolve => require(['@/module/Home'], resolve),
        children: [
          {
            path: '/',
            redirect: 'chao'
          },
          {
            path: 'chao',
            component: resolve => require(['@/module/FoodType/Chao'], resolve)
          },
          {
            path: 'dun',
            name: 'dun',
            component: resolve => require(['@/module/FoodType/Dun'], resolve)
          },{
            path: 'tang',
            name: 'tang',
            component: resolve => require(['@/module/FoodType/Tang'], resolve)
          }
        ]
      }
    ]
  }
]
