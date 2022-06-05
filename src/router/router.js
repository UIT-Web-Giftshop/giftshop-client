
export default [
  {
    path: '/home',
    name: 'Home',
    component: () =>
        import ( /* webpackChunkName: "about" */ '../views/HomeView.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    meta: { layout: "no-navigation" },
    component: () =>
        import ( /* webpackChunkName: "about" */ '../views/ProfileView.vue')
  },
]