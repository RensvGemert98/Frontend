import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CustomersOverview from '../components/CustomersOverview.vue';
import CustomerOverview from '../components/CustomerOverview.vue';
import ProductsOverview from '../components/ProductsOverview.vue';
import OrdersOverview from '../components/OrdersOverview.vue';
import SignIn from '../components/SignIn.vue';
import Signout from '../components/Signout.vue';
import SignUp from '../components/SignUp.vue';
import Unauthorized from '../components/Unauthorized.vue';
import AccountOverview from '../components/AccountOverview.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/account/:id',
      name: 'Account',
      component: AccountOverview
    },
    {
      path: '/customers',
      name: 'customers',
      component: CustomersOverview
    },
    {
      path: '/customer/:id',
      name: 'customer',
      component: CustomerOverview
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
    {
      path: '/unauthorized',
      name: 'unauthorized',
      component: Unauthorized
    },
  ]
})

export default router
