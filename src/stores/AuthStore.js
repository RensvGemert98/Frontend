import { defineStore } from 'pinia'

export const useAuthStore = defineStore('authStore', {
    state: () => ({
        isLoggedIn: false,
        loading: false,
        JWT: "",
        accounts: [],
        account: {},
        UserRole: "",
        UserId: null,
        IsDeleted: false
    }),
    actions: {
        async getAccounts() {
            this.isLoading = true
            const res = await fetch('https://localhost:8001/api/Account')
            const data = await res.json()
            this.accounts = data
            this.isLoading = false
        },

        async getAccountById(id) {
            const res = await fetch('https://localhost:8001/api/Account/' + id)
            if (res.ok) {
                const data = await res.json()
                this.account = data
            }
        },

        async deleteAccount(id) {
            const res = await fetch('https://localhost:8001/api/Account/' + id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            if (res.ok) {
                this.isDeleted = true
                this.isLoggedIn = false,
                this.accounts = [],
                localStorage.removeItem('tokenJWT');
                this.UserRole = ""
                localStorage.removeItem('role');
                this.UserId = 0
                localStorage.removeItem('UserId');
                this.JWT = ""
            }
        },

        async signOut() {
            this.isLoggedIn = false,
            this.accounts = [],
            localStorage.removeItem('tokenJWT');
            this.UserRole = ""
            localStorage.removeItem('role');
            this.UserId = 0
            localStorage.removeItem('UserId');
            this.JWT = "",
            IsDeleted = false
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
                this.UserId = response.userId;
                localStorage.setItem('tokenJWT', response.jwtToken);
                localStorage.setItem('UserId', response.userId);
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