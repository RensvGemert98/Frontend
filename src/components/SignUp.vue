<template>
    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs12 class="text-xs-center" mt-5>
          <h1>Sign Up</h1>
        </v-flex>
        <v-flex xs12 sm6 offset-sm3 mt-3>
          <form>
            <v-layout column>
              <v-flex>
                <v-text-field class="lol"
                  name="Username"
                  label="Username"
                  id="Username"
                  type="Username"
                  required></v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field
                  name="Password"
                  label="Password"
                  id="Password"
                  type="Password"
                  required
                  ></v-text-field>
              </v-flex>
              <v-flex class="text-xs-center" mt-5>
                <v-btn color="primary" type="submit">Sign Up</v-btn>
              </v-flex>
            </v-layout>
          </form>
        </v-flex>
      </v-layout>
    </v-container>
  </template>
  
  <script>
  export default {};
  </script>

  <style scoped>
.v-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.v-layout {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.v-text-field .v-field {
  margin:20px;
}

</style>
  