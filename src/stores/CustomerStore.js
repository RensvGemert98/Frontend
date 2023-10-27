import { defineStore } from 'pinia'
import router from '../router/index.js'

export const useCustomerStore = defineStore('customerStore', {
    state: () => ({
        customers: [],
        customer: {},
    }),
    getters: {
    },
    actions: {
        async getCustomers() {

            if (localStorage.getItem('role') != 'Admin') {
                router.push('/unauthorized')
                return null
            }

            const res = await fetch('http://localhost:8001/api/Customer', {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('tokenJWT'),
                },
            })

            const data = await res.json()
            this.customers = data
        }
    }
})