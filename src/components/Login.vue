<template>
  <v-app class="bg-dark">
    <v-container class="fill-height" fluid>
      <v-card width="550"  class="mx-auto mt-5 elevation-24">
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title>LOGIN FORM</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field label="Username" prepend-icon="mdi-account-circle" />
            <v-text-field
              :type="showPassword ? 'text' : 'password'"
              label="Password"
              prepend-icon="mdi-lock"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword = !showPassword"
            />
          </v-form>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="success">LOGIN</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      showPassword: false
    };
  }
};
</script>

