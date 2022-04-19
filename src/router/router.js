
export default [
  {
    path: '/home',
    name: 'Home',
    component: () =>
        import ( /* webpackChunkName: "about" */ '../views/HomeView.vue')
  },
]