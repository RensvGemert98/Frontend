<template>
  <div id="customer-overview" v-if="!customerStore.CustomerIdExist"
    style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 80vh;">
    <form @submit.prevent="createCustomerAccount()">
      <v-card width="500" class="mx-auto mt-9">
        <v-card-title>Add Customer Details</v-card-title>
        <v-card-text>
          <v-text-field v-model="customerEmail" label="customerEmail" prepend-icon="mdi-account-circle" />
          <v-text-field v-model="customerName" label="customerName" prepend-icon="mdi-account-circle" />
          <v-text-field v-model="address" label="address" prepend-icon="mdi-account-circle" />
          <v-text-field v-model="zipcode" label="zipcode" prepend-icon="mdi-account-circle" />
          <v-text-field v-model="city" label="city" prepend-icon="mdi-account-circle" />
          <v-text-field v-model="phone" label="phone" prepend-icon="mdi-account-circle" />
        </v-card-text>

        <v-divider></v-divider>
        <v-card-actions>
          <v-btn type="submit" color="info">Create</v-btn>
        </v-card-actions>
      </v-card>
    </form>
  </div>
  <div v-else>
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
        <tr>
          <td>{{ customerStore.customer.customerName }}</td>
          <td>{{ customerStore.customer.customerEmail }}</td>
          <td>{{ customerStore.customer.address }}</td>
          <td>{{ customerStore.customer.zipcode }}</td>
          <td>{{ customerStore.customer.city }}</td>
          <td>{{ customerStore.customer.phone }}</td>
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
    let userId = localStorage.getItem('UserId')
    customerStore.getCustomerById(userId);

    return {
      customerStore
    }

  },
  data() {
    return {
      customerId: "",
      customerEmail: "",
      customerName: "",
      address: "",
      zipcode: "",
      city: "",
      phone: ""
    };
  },
  methods: {
    async createCustomerAccount() {
      await this.customerStore.createCustomerAccount(this.customerId, this.customerEmail, this.customerName, this.address, this.zipcode, this.city, this.phone);
      this.$router.push('/');
    }
  },
};
</script>