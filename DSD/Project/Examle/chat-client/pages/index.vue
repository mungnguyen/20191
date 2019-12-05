<template>
  <v-card class="mx-auto" outlined>
    <v-form v-model="valid">
      <v-text-field v-model="user.email" label="Email"></v-text-field>

      <v-text-field v-model="user.password" label="Password"></v-text-field>

      <center>
        <v-btn type="primary" rounded>Đăng nhập</v-btn>
      </center>
    </v-form>
  </v-card>
</template>

<script>
import Logo from "~/components/Logo.vue";
import VuetifyLogo from "~/components/VuetifyLogo.vue";

export default {
  components: {
    Logo,
    VuetifyLogo
  },

  data() {
    return {
      valid: true,
      user: {
        email: "",
        password: ""
      }
    };
  }
};
</script>
