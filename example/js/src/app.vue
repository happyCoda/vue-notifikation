<template lang="html">
  <div class="container">
    <p class="greet">{{ greet }}</p>
    <button
      v-on:click="clickHandler"
      class="btn"
      type="button"
      name="button">Notify Me!</button>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        greet: 'vue-notifikation plugin'
      };
    },
    methods: {
      clickHandler() {
        this.$show({
          message: `Hello`
        });
      }
    }
  }
</script>

<style lang="less">
  * {
    margin: 0 auto;
  }
  body {
    font: normal 82.5%/1.5 Arial, Helvetica, sans-serif;
    color: rgb(255, 254, 186);
    background: rgb(55, 64, 92);
  }
</style>
<style lang="less" scoped>
  @colorDarkGrey: rgb(55, 64, 92);
  @colorYellowSand: rgb(255, 254, 186);
  @colorBluishGrey: rgb(68, 119, 140);
  @colorNavyBlue: rgb(67, 186, 186);
  @colorOrangeSans: rgb(245, 211, 100);

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    margin: 20px auto;
    padding: 10px;
    box-sizing: border-box;
    background: @colorBluishGrey;
    border-radius: 4px;
  }

  .greet {
    font-size: 2em;
    text-transform: capitalize;
  }

  .btn {
    color: @colorDarkGrey;
    background: @colorOrangeSans;
    border: none;
    padding: 10px;
    border-radius: 4px;
    cursor: pointer;
    outline: none;
  }
</style>
