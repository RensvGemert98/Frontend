<template>
    <form @submit.prevent="login()">
    <v-card width="500" class="mx-auto mt-9">
      
      <v-card-title>Sign In</v-card-title>
      <v-card-text>
        <v-text-field v-model="UserName" label="Username" prepend-icon="mdi-account-circle" />
        <v-text-field v-model="Password" label="Password" :type="showPassword ? 'text' : 'password'"
          prepend-icon="mdi-lock" :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword" />
      </v-card-text>

      <v-divider></v-divider>
      <v-card-actions>
        <v-btn type="submit" color="info">Login</v-btn>
      </v-card-actions>
    </v-card>

    <v-btn @click="authStore.getAccounts()">CLICK FOR ACCOUNTS</v-btn>
  </form>
</template>
  
<script>
import { useAuthStore } from '../stores/AuthStore';

export default {
  setup() {
    const authStore = useAuthStore();
    return { authStore };
  },
  data() {
    return {
      showPassword: false,
      UserName: "",
      Password: ""
    };
  },
  methods: {
    async login() {
      await this.authStore.signIn(this.UserName, this.Password);
    }
  },
}
</script>