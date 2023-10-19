<template>
    <div id="customers-overview">
      <v-table>
        <thead>
          <tr>
            <th class="text-left">
              CustomerName
            </th>
            <th class="text-left">
              CustomerEmail
            </th>
            <th class="text-left">
              Address
            </th>
            <th class="text-left">
              ZipCode
            </th>
            <th class="text-left">
              City
            </th>
            <th class="text-left">
              Phone
            </th>
            <th class="text-left">
  
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="customer in customerStore.customers" :key="customer.customerId">
            <td>{{ customer.customerName }}</td>
            <td>{{ customer.customerEmail }}</td>
            <td>{{ customer.address }}</td>
            <td>{{ customer.zipcode }}</td>
            <td>{{ customer.city }}</td>
            <td>{{ customer.phone }}</td>
            <td>
              <!-- <v-btn @click="customerStore.getCustomerById(customer.customerId)" style="color: green">View</v-btn> -->
            </td>
          </tr>
        </tbody>
      </v-table>
    </div>
  </template>
    
  <script>
  
  import { useCustomerStore } from "../stores/CustomerStore";
  
  export default {
  
    setup() {
          const customerStore = useCustomerStore()
  
          customerStore.getCustomers();
  
          return {
              customerStore
          }
  
      }
  };
  </script>