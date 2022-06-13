
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
    meta: { layout: "no-navigation" , requireAuth: true},
    component: () =>
      import( /* webpackChunkName: "about" */ '../views/ProfileView.vue')
  },
  {
    path: '/trang-chu/danh-muc-san-pham',

    name: 'list-product',
    component: () =>
        import ( /* webpackChunkName: "about" */ '../views/ListProduct')
  },
  {
    path: '/trang-chu/danh-muc-mua-sam',
    name: 'cart-page',
    meta: { requireAuth: true},
    component: () =>
        import ( /* webpackChunkName: "about" */ '../views/CartPage')
  },
  {
    path: '/trang-chu/danh-muc-yeu-thich',
    name: 'wishlist-page',
    meta: { requireAuth: true},
    component: () =>
      import( /* webpackChunkName: "about" */ '../views/WishListPage')
  },
  {
    path: '/trang-chu/tim-kiem',
    name: 'search-page',
    component: () =>
      import( /* webpackChunkName: "about" */ '../views/SearchPage')
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
    path: '/don-hang',
    name: 'Ordered',
    component: () => import ('../views/OrderedView.vue')
  },
  {
    path: '/dat-hang',
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
    path: '/401',
    name: 'UnAuthorizedPage',
    meta: { layout: "no-navigation" },
    component: () => import ('../views/static-page/UnAuthorizedPage.vue')
  },

  {
    name: 'ErrorPage',
    path: '/:pathMatch(.*)*',
    meta: { layout: "no-navigation" },
    component: () => import ('../views/static-page/ErrorPage.vue')
  },
]