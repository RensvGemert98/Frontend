<template>
  <div id="account-overview">
    <v-table>
      <thead>
        <tr>
          <th class="text-left">
            UserID
          </th>
          <th class="text-left">
            Username
          </th>
          <th class="text-left">

          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ authStore.account.id }}</td>
          <td>{{ authStore.account.userName }}</td>
          <td>
            <v-btn @click="deleteAccount()" style="color: rgb(168, 2, 2)">Delete</v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>
      
<script>


import { useAuthStore } from "../stores/AuthStore";

export default {

  setup() {
    const authStore = useAuthStore()
    let userId = localStorage.getItem('UserId')
    authStore.getAccountById(userId)

    return {
      authStore
    }
  },
  methods: {
    async deleteAccount() {
      console.log("Deleting..")
      let idToDelete = localStorage.getItem('UserId')
      await this.authStore.deleteAccount(idToDelete);
      await this.$router.push('/signin');
    }
  },

};
</script>