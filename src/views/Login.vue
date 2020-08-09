<template>
  <div class="login">
      <h1>Login</h1>
      <label for="email" class="email">
        Email
        <input type="text" name="email" id="email" v-model="email">
      </label>
      <label for="password" class="password">
        Password
        <input type="text" name="password" id="password" v-model="password">
      </label>
      <button type="submit" @click="login">Submit</button>
      <router-link to="/register">Register</router-link>

      <div class="forgot-password">
        <button @click="togglePasswordReset">Forgot Password</button>
        <div v-if="showPasswordReset">
          <PasswordReset />
        </div>
      </div>
  </div>
</template>

<script>
import PasswordReset from '../components/forms/PasswordReset'

export default {
  name: 'Login',
  components: {
    PasswordReset
  },
  data: () => ({
    email: undefined,
    password: undefined,
    showPasswordReset: false
  }),
  methods: {
    login() {
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password
      })
    },
    togglePasswordReset() {
      this.showPasswordReset = !this.showPasswordReset
    }
  }
}
</script>

<style>
.login {
  display: flex;
  flex-direction: column;
}
</style>