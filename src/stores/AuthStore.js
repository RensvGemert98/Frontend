import { defineStore } from 'pinia'

export const useAuthStore = defineStore('authStore', {
    state: () => ({
        isAdmin: false,
        isLoggedIn: false,
        loading: false,
        JwtToken: [],
        accounts: [],
    }),
    actions: {
        async getAccounts() {
            this.isLoading = true
            const res = await fetch('http://localhost:8001/api/Account')
            const data = await res.json()
            this.accounts = data
            this.isLoading = false
        },
        async signIn(UserName, password) {
            this.isLoading = true;

            const res = await fetch('http://localhost:8001/api/Account/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ UserName, password }),
            });

            if (res.ok) {
                const token = await res.json();
                this.JwtToken = token;
                this.isLoggedIn = true;
            } else {
                // Handle login errors here
                console.error('Login failed');
            }
            this.isLoading = false;
        }

    },

})