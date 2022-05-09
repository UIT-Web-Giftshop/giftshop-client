
export default [
  {
    path: '/home',
    name: 'Home',
    component: () =>
        import ( /* webpackChunkName: "about" */ '../views/HomeView.vue')
  },
  {
    path: '/product/:sku',
    name: "Product",
    component: () => import ('../views/ProductView.vue')
  },
  {
    path: '/test1/:test2/test3',
    name: 'Test',
    component: () => import ('../views/TestView.vue')
  },
  {
    path: '/ordered',
    name: 'Ordered',
    component: () => import ('../views/OrderedView.vue')
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: () => import ('../views/CheckoutView.vue')
  }
]