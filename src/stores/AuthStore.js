import { defineStore } from 'pinia'

export const useAuthStore = defineStore('authStore', {
    state: () => ({
        isLoggedIn: false,
        loading: false,
        JWT: "",
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
        async signOut() {
            this.isLoggedIn = false,
                this.accounts = [],
                localStorage.removeItem('tokenJWT');

        },
        async signUp(UserName, Password, Role) {
            const res = await fetch('http://localhost:8001/api/Account', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({UserName, Password, Role}),
            });

            if (res.ok) {
                console.log("Succesfully registered")
            } else {
                console.error('lol noob');
            }

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
                this.JWT = token.jwtToken;
                localStorage.setItem('tokenJWT', token.jwtToken);
                this.isLoggedIn = true;
                console.log("Logged in: " + token.userName)
            } else {
                // Handle login errors here
                console.error('Login failed');
            }
            this.isLoading = false;
        },
    },

})