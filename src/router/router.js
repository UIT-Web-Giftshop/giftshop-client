
export default [
  {
    path: '/',
    redirect: "/trang-chu",
  },
  {
    path: '/trang-chu',
    name: 'Home',
    component: () =>
        import ( /* webpackChunkName: "about" */ '../views/HomeView.vue')
  },
  {
    path: '/tai-khoan/:url',
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
    path: '/products/sku/:sku',
    name: "Products",
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
  },
  {
    path: '/quen-mat-khau',
    name: 'ForgotPassword',
    meta: { layout: "no-navigation" },
    component: () => import ('../views/auth-page/ForgotPassword.vue')
  },
  {
    path: '/xac-nhan-email',
    name: 'MailConfirmation',
    meta: { layout: "no-navigation" },
    component: () => import ('../views/auth-page/MailConfirmation.vue')
  },
  {
    name: 'ErrorPage',
    path: '/:pathMatch(.*)*',
    meta: { layout: "no-navigation" },
    component: () => import ('../views/static-page/ErrorPage.vue')
  },
]