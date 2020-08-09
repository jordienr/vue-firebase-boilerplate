<template>
  <div class="password-reset">
      <h2>Reset your password</h2>
      <p v-if="info">{{info}}</p>
      <label for="email">
        Email
        <input type="text" name="email" id="email" v-model="email">
      </label>
      <button @click="resetPassword">Reset Password</button>
  </div>
</template>

<script>
import { auth } from '../../firebase'

export default {
    name: 'ResetPasswordForm',
    data: () => ({
        info: undefined,
        email: undefined
    }),
    methods: {
        async resetPassword() {
            this.error = undefined

            try {
                await auth.sendPasswordResetEmail(this.email) 
                this.info = 'Email Sent'
            } catch (err) {
                this.info = err.message
                }
            }
        }
}
</script>

<style>

</style>