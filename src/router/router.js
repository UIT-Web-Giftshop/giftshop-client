
export default [
  {
    path: '/home',
    name: 'Home',
    component: () =>
        import ( /* webpackChunkName: "about" */ '../views/HomeView.vue')
  },
  {
    path: '/home/list-product',
    name: 'Home',
    component: () =>
        import ( /* webpackChunkName: "about" */ '../views/ListProduct')
  },
]