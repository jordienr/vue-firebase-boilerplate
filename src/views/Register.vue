<template>
  <div class="register">
      <h1>Register</h1>
      <label for="name" class="name">
        Name
        <input type="text" name="name" id="name" v-model="name">
      </label>
      <label for="email" class="email">
        Email
        <input type="text" name="email" id="email" v-model="email">
      </label>
      <label for="password" class="password">
        Password
        <input type="text" name="password" id="password" v-model="password">
      </label>
      <label for="repeatPassword" class="repeat-password">
        Repeat Password
        <input type="text" name="repeatPassword" id="repeatPassword" v-model="repeatPassword">
      </label>
      <button type="submit" @click="register">Submit</button>
      <router-link to="/login">Login</router-link>

  </div>
</template>

<script>
export default {
  name: 'Register',
  data: () => ({
    name: undefined,
    email: undefined,
    password: undefined,
    repeatPassword: undefined,
    error: undefined
  }),
  methods: {
    register() {
      if (this.password === this.repeatPassword) {
        this.$store.dispatch('register', {
          email: this.email,
          password: this.password,
          name: this.name
        })
      } else {
        this.error = "Passwords are not the same!"
      }
    }
  }
}
</script>

<style>
.register {
  display: flex;
  flex-direction: column;
}
</style>