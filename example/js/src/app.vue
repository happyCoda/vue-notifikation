<template lang="html">
  <div class="container">
    {{ greet }}
  </div>
</template>

<script>
  export default {
    name: 'App',
    created() {
      this.$show({message: 'Hello!'});
    },
    data() {
      return {
        greet: 'vue-notifikation plugin'
      };
    }
  }
</script>

<style lang="less">
  body {
    background: rgb(215, 218, 216);
  }
</style>
