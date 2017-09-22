<template>
  <div class="login">
    <input type="text" placeholder="github personal access tokens" class="text" v-model="token">
    <input type="button" value="登录" class="button" @click="loginIn">
    <p>58b83bfa23e54e3dfa5223162de772f08f61b059</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      token: ''
    }
  },
  methods: {
    loginIn() {
      if (this.token) {
        this.$store.dispatch('loginIn', {
          token: this.token
        })
        let redirect = decodeURIComponent(this.$route.query.redirect || '/')
        this.$router.push({
          path: redirect
        })
      }
    }
  }
}
</script>

<style scoped>
.text {
  width: 300px;
  height: 30px;
  box-sizing: border-box;
  font-size: 18px;
  text-indent: 20px;
  color: darkorchid;
}

.button {
  width: 100px;
  height: 30px;
  background: darkmagenta;
  color: #fff;
}
</style>


