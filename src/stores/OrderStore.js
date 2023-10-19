import { defineStore } from 'pinia'

export const useOrderStore = defineStore('orderStore', {
    state: () => ({
        orders: [],
        order: {},
        loading: false
    }),
    getters: {
    },
    actions: {
        async getOrders(){
            this.isLoading = true
            const res = await fetch('http://localhost:8001/api/Order')
            const data = await res.json()
            this.orders = data
            this.isLoading = false
        }
    }
})