<template>
  <v-app>
    <v-toolbar app style="background-color: #0090E3">
      <v-toolbar-title>
        <router-link to="/" style="text-decoration: none; color: white; font-weight: 800;">
          {{ appTitle }}
        </router-link>
      </v-toolbar-title>

      <!-- Alignment right -->
      <v-spacer></v-spacer>

      <!-- If not logged in show signup and sign in -->
      <div v-if="!authStore.isLoggedIn">
        <v-toolbar-items class="hidden-xs-only">
          <v-btn flat v-for="item in menuItems" :key="item.title" :to="item.path" style="color: white;">
            {{ item.title }}
          </v-btn>
        </v-toolbar-items>
      </div>
      <!-- if logged in show links without auth-->
      <div v-else>
        <v-toolbar-items class="hidden-xs-only">
          <v-btn flat v-for="item in LoggedInmenuItems" :key="item.title" :to="item.path" style="color: white;">
            {{ item.title }}
          </v-btn>
        </v-toolbar-items>
      </div>

    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>

  </v-app>
</template>

<script>
import { useAuthStore } from '../src/stores/AuthStore';

export default {
  name: "App",
  data() {
    return {
      appTitle: 'BlueCool',
      menuItems: [
        { title: 'Sign In', path: '/signin' },
        { title: 'Sign Up', path: '/signup' }
      ],
      LoggedInmenuItems: [
        { title: 'My Account', path: '/account/:id' },
        { title: 'Products', path: '/product' },
        { title: 'Customer Details', path: '/customer/:id' },
        { title: 'Orders', path: '/order' },
        { title: 'Sign Out', path: '/signout' }
      ]
    }
  },

  setup() {
    const authStore = useAuthStore()
    return {
      authStore,
    }
  }
};
</script>
<style></style>
