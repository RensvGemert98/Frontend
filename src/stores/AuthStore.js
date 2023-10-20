import { defineStore } from 'pinia'

export const useAuthStore = defineStore('authStore', {
    state: () => ({
        isAdmin: false,
        isLoggedIn: false,
        loading: false,
        JwtToken: []
    }),
    actions: {
        async signIn(){
            this.isLoading = true
            const res = await fetch('http://localhost:8001/api/Account')
            const token = await res.json()
            this.JwtToken = token
            this.isLoggedIn = true
            this.isLoading = false
        }
    }

})