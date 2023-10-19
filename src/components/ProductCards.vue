<template>
    <div class="products">
    <div style="padding-top: 50px;">
        <v-container class="my-5">
            <!-- <v-autocomplete label="Search product" :items="products" variant="underlined"></v-autocomplete> -->
            <v-row row wrap>
                <v-col v-for="product in productStore.products" :key="product.productId" cols="12" sm="6" md="4" lg="3">
                    <ProductCard :product="product" />
                </v-col>
            </v-row>
        </v-container>
    </div>
</div>
</template>

<script>
import { useProductStore } from '../stores/ProductStore';
import ProductCard from './ProductCard.vue';


export default {
    components: { ProductCard },
    setup() {
        const productStore = useProductStore()

        productStore.getProducts();

        return {
            productStore
        }

    }
}

</script>