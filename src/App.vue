<template>
  <div id="app">
    <p v-if="userProfile">
      Logged in as {{userProfile.name}}
    </p>
    <button @click="logout">logout</button>
    <router-view/>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  },
  computed: {
    ...mapState(['userProfile']),
    showNav() {
      return Object.keys(this.userProfile).length > 1
    }
  }
}
</script>
<style lang="scss">
#app {
}
</style>
