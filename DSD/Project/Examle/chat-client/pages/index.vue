<template>
  <v-card class="mx-auto" outlined>
    <v-form v-model="valid">
      <v-text-field v-model="user.email" label="Email"></v-text-field>

      <v-text-field v-model="user.password" label="Password"></v-text-field>
    </v-form>

    <center>
      <v-btn type="primary" rounded @click="handleLogin">Đăng nhập</v-btn>
    </center>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      valid: true,
      user: {
        email: "",
        password: ""
      }
    };
  },

  methods: {
    ...mapActions("login", ["login"]),
    async handleLogin() {
      const { isSuccess, user } = await this.login(this.user);
      if (isSuccess) {
        if (process.browser) {
          localStorage.setItem("userId", user.id);
          localStorage.setItem("name", user.name);
        }
        this.$router.push("/chat");
      }
    }
  }
};
</script>
