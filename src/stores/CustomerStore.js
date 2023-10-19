import { defineStore } from 'pinia'

export const useCustomerStore = defineStore('customerStore', {
    state: () => ({
        customers: [],
        customer: {},
        loading: false
    }),
    getters: {
    },
    actions: {
        async getCustomers(){
            this.isLoading = true
            const res = await fetch('http://localhost:8001/api/Customer')
            const data = await res.json()
            this.customers = data
            this.isLoading = false
        }
    }
})