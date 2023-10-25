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
        async getCustomers() {
            this.isLoading = true
            const token = localStorage.getItem('tokenJWT')
            try {
                const res = await fetch('http://localhost:8001/api/Customer', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                })

                const data = await res.json()
                this.customers = data
            }

            catch {
                console.log("Unauthorized")
            }

            this.isLoading = false
        }
    }
})