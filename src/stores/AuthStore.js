import { defineStore } from 'pinia'

export const useAuthStore = defineStore('authStore', {
    state: () => ({
        isAdmin: false,
        isLoggedIn: true,
        loading: false
    })
})