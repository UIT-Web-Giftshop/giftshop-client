import Vue from 'vue'
import routes from './router'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})


/**
 * redirect to login page when authenticated fail
*/
router.beforeEach((to, from, next) => {
  const authenticated = store.getters['auth/isAuthendicated'];

  //check user authendicated, return Login page if it not available
  if(!authenticated && to.meta.requireAuth ){
    next('/401');
    return;
  }

  next()
})

 
export default router
