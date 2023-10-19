<template>
    <div class="product">
        <v-card flat class="text-xs-center ma-3" style="background-color: rgb(221, 221, 221);">
            <v-responsive class="pt-4">
                <span>
                    <img :src="product.image" style="height: 250px;">
                </span>
            </v-responsive>
            <v-card-text>
                <div class="subheading">{{ product.title }}</div>
                <div class="grey--text">{{ product.details }}</div>
            </v-card-text>
            <v-card-text>
                <div class="grey--text" style="font-size: large;"><b>{{ product.price }},-</b></div>
            </v-card-text>
            <v-card-actions class="justify-end">
                <v-btn :class="{ active: product.inCart }" class="shopping-cart-btn" flat
                    @click="productStore.toggleInCart(product.id)">
                    <v-icon v-if="!product.inCart" icon="mdi-basket"></v-icon>
                    <v-icon v-else="product.inCart" icon="mdi-check"></v-icon>
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
import { useProductStore } from '../stores/ProductStore';

export default {
    props: ["product"],
    setup() {
        const productStore = useProductStore()

        return {
            productStore
        }
    }
}
</script>

<style scoped>
.shopping-cart-btn {
    background-color: grey;
    color: white;
}
</style>