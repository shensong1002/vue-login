<template>
  <div class="repository">
    我是repository详情页
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  mounted() {
    this._getRepository()
  },
  methods: {
    _getRepository() {
      let params = {
        sort: 'updated'
      }
      this.axios.get('/user/repos', params).then(response => {
        // this.list = response.data
        console.log(response);
      })
    }
  }
}
</script>

<style scoped>

</style>