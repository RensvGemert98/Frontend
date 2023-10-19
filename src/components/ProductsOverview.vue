<template>
    <div id="products-overview">
      <v-table>
        <thead>
          <tr>
            <th class="text-left">
              Title
            </th>
            <th class="text-left">
              Details
            </th>
            <th class="text-left">
              Image
            </th>
            <th class="text-left">
              Price
            </th>
            <th class="text-left">
              Stock
            </th>
            <th class="text-left">
  
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in productStore.products" :key="product.productId">
            <td>{{ product.title }}</td>
            <td>{{ product.details }}</td>
            <td>{{ product.image }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.stock }}</td>
            <td>
              <!-- <v-btn @click="customerStore.getCustomerById(customer.customerId)" style="color: green">View</v-btn> -->
            </td>
          </tr>
        </tbody>
      </v-table>
    </div>
  </template>
    
  <script>
  
import { useProductStore } from "../stores/ProductStore";
  
  export default {
  
    setup() {
          const productStore = useProductStore()
  
          productStore.getProducts()
  
          return {
            productStore
          }
  
      }
  };
  </script>