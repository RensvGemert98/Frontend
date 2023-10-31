import { defineStore } from 'pinia'

export const useAuthStore = defineStore('authStore', {
    state: () => ({
        isLoggedIn: false,
        loading: false,
        JWT: "",
        accounts: [],
        UserRole: "",
    }),
    actions: {
        async getAccounts() {
            this.isLoading = true
            const res = await fetch('https://localhost:8001/api/Account')
            const data = await res.json()
            this.accounts = data
            this.isLoading = false
        },
        async signOut() {
            this.isLoggedIn = false,
                this.accounts = [],
                localStorage.removeItem('tokenJWT');
            this.UserRole = ""
            localStorage.removeItem('role');
        },
        async signUp(UserName, Password, Role) {
            const res = await fetch('https://localhost:8001/api/Account', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ UserName, Password, Role }),
            });

            if (res.ok) {
                console.log("Succesfully registered")
            }

        },
        async signIn(UserName, password) {
            this.isLoading = true;
            const res = await fetch('https://localhost:8001/api/Account/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ UserName, password }),
            });

            if (res.ok) {
                const response = await res.json();
                this.JWT = response.jwtToken;
                localStorage.setItem('tokenJWT', response.jwtToken);
                this.isLoggedIn = true;
                console.log(response);
                this.decodeJWT(this.JWT)
            } else {
                // Handle login errors here
                console.error('Login failed');
            }
            this.isLoading = false;
        },
        decodeJWT(token) {
            let jwtData = token.split('.')[1]
            let decodedJwtJsonData = window.atob(jwtData)
            let decodedJwtData = JSON.parse(decodedJwtJsonData)
            let Role = decodedJwtData.Role
            console.log('decodedJwtJsonData: ' + decodedJwtJsonData);
            this.UserRole = Role
            localStorage.setItem('role', this.UserRole)
        }
    },

})