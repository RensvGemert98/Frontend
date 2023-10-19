<template>
    <div id="customers-overview">
      <v-table>
        <thead>
          <tr>
            <th class="text-left">
              Order ID
            </th>
            <th class="text-left">
              Customer ID
            </th>
            <th class="text-left">
              Ordered On
            </th>
            <th class="text-left">
              Order Details
            </th>
            <th class="text-left">
  
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in orderStore.orders" :key="order.orderId">
            <td>{{ order.orderId }}</td>
            <td>{{ order.customerId }}</td>
            <td>{{ order.orderedOn }}</td>
            <td><ul>
                <li> >> Quantity: {{ order.orderDetails[0].quantity  }} </li>
                <li> >> Product ID: {{ order.orderDetails[0].productId }}</li>
                <li> >> Unit Price: {{ order.orderDetails[0].unitPrice }}</li>
            </ul>
                </td>
            <td></td>
            <td>
              <!-- <v-btn @click="customerStore.getCustomerById(customer.customerId)" style="color: green">View</v-btn> -->
            </td>
          </tr>
        </tbody>
      </v-table>
    </div>
  </template>
    
  <script>
  
  import { useOrderStore } from "../stores/OrderStore"
  
  export default {
  
    setup() {
          const orderStore = useOrderStore()
  
          orderStore.getOrders();
  
          return {
            orderStore
          }
  
      }
  };
  </script>

<style>

ul {
    list-style-type: none;
}

</style>