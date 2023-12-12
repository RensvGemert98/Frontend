import { defineStore } from 'pinia'

export const useProductStore = defineStore('productStore', {
    state: () => ({
        products: [],
        product: {},
        loading: false
    }),
    getters: {
    },
    actions: {
        async getProducts(){
            this.isLoading = true
            const res = await fetch('http://4.175.217.2:8001/api/Product')
            const data = await res.json()
            this.products = data
            this.isLoading = false
        }
    }
})