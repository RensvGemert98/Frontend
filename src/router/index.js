import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CustomersOverview from '../components/CustomersOverview.vue';
import ProductsOverview from '../components/ProductsOverview.vue';
import OrdersOverview from '../components/OrdersOverview.vue';
import SignIn from '../components/SignIn.vue';
import Signout from '../components/Signout.vue';
import SignUp from '../components/SignUp.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/customers',
      name: 'customers',
      component: CustomersOverview
    },
    {
      path: '/product',
      name: 'products',
      component: ProductsOverview
    },
    {
      path: '/order',
      name: 'orders',
      component: OrdersOverview
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn
    },
    {
      path: '/signout',
      name: 'signout',
      component: Signout
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
  ]
})

export default router
