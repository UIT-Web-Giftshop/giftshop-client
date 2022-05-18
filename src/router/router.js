
export default [
  {
    path: '/trang-chu',
    name: 'Home',
    component: () =>
        import ( /* webpackChunkName: "about" */ '../views/HomeView.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    meta: { layout: "no-navigation" },
    component: () =>
      import( /* webpackChunkName: "about" */ '../views/ProfileView.vue')
  },
  {
    path: '/home/list-product',
    name: 'list-product',
    component: () =>
        import ( /* webpackChunkName: "about" */ '../views/ListProduct')
  }
]