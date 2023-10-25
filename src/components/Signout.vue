<template>
    <v-card width="100" class="mx-auto mt-9">
        <v-btn @click="logout()">Sign out</v-btn>
    </v-card>
</template>
  
<script>
import { useAuthStore } from '../stores/AuthStore';

export default {
    setup() {
        const authStore = useAuthStore();
        return { authStore };
    },
    methods: {
        async logout() {
            await this.authStore.signOut();
        }
    },
}
</script>