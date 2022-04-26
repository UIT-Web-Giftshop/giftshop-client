
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
  },
  {
    path: '/home/cart-page',
    name: 'cart-page',
    component: () =>
        import ( /* webpackChunkName: "about" */ '../views/CartPage')
  },
  {
    path: '/home/wishlist-page',
    name: 'wishlist-page',
    component: () =>
      import( /* webpackChunkName: "about" */ '../views/WishListPage')
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
  }
]