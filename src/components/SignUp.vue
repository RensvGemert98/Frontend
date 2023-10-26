<template>
    <form @submit.prevent="signUp()">
        <v-card width="500" class="mx-auto mt-9">

            <v-card-title>Sign Up</v-card-title>
            <v-card-text>
                <v-text-field v-model="UserName" label="Username" prepend-icon="mdi-account-circle" />
                <v-text-field v-model="Password" label="Password" :type="showPassword ? 'text' : 'password'"
                    prepend-icon="mdi-lock" :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="showPassword = !showPassword" />
            </v-card-text>

            <v-divider></v-divider>
            <v-card-actions>
                <v-btn type="submit" color="info">SignUp</v-btn>
            </v-card-actions>
        </v-card>
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
            Password: "",
            Role: "User"
        };
    },
    methods: {
        async signUp() {
            await this.authStore.signUp(this.UserName, this.Password, this.Role);
        }
    },
}
</script>