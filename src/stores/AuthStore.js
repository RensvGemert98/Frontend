import { defineStore } from 'pinia'

export const useAuthStore = defineStore('authStore', {
    state: () => ({
        isAdmin: false,
        isLoggedIn: false,
        loading: false,
        JwtToken: []
    }),
    actions: {
        async signIn(UserName, Password) {
            this.isLoading = true;

            const loginData = {
                UserName,
                Password,
            };

            try {
                const res = await fetch('http://localhost:8001/api/Account/signin', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(loginData),
                });

                if (res.ok) {
                    const token = await res.json();
                    this.JwtToken = token;
                    this.isLoggedIn = true;
                } else {
                    // Handle login errors here
                    console.error('Login failed');
                }
            } catch (error) {
                console.error('Error:', error);
            } finally {
                this.isLoading = false;
            }
        },
    },

})