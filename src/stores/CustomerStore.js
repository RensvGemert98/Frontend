import { defineStore } from 'pinia'
import router from '../router/index.js'

export const useCustomerStore = defineStore('customerStore', {
    state: () => ({
        customers: [],
        customer: {},
        CustomerIdExist: false,
        CurrentId: 0
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
        },

        async getCustomerById(id) {
            const res = await fetch('http://localhost:8001/api/Customer/' + id, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('tokenJWT'),
                },
            })

            if(res.ok) {
                const data = await res.json()
                this.customer = data
                this.CustomerIdExist = true
                this.CurrentId = id
            }
            else {
                this.CustomerIdExist = false
                return console.log("Customer ID does not exist");
            }
        },

        async createCustomerAccount(customerEmail, customerName, address, zipcode, city, phone) {
            const res = await fetch('http://localhost:8001/api/Customer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('tokenJWT'),
                },
                body: JSON.stringify({ customerEmail, customerName, address, zipcode, city, phone }),
            });

            if (res.ok) {
                console.log("Succesfully registered")
            }
        },
    }
})