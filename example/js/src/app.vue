<template lang="html">
  <div class="container">
    <p class="greet">{{ greet }}</p>
    <div class="btns">
      <button
        v-for="btn in btns"
        v-on:click="clickHandler(btn.txt)"
        v-bind:class="{btn: true, [btn.className]: true}"
        type="button"
        name="button">{{ btn.txt }}</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        greet: 'vue notifikation plugin',
        count: 0,
        btns: [
          {
            txt: 'Error',
            className: 'red'
          },
          {
            txt: 'Success',
            className: 'green'
          },
          {
            txt: 'Info',
            className: 'grey'
          }
        ]
      };
    },
    methods: {
      clickHandler(level) {

        this.$notifikation[`${level.substr(0, 1).toLowerCase() + level.substr(1)}`]({
          message: `Hello#${this.count++}`,
          selector: '#notifikation',
          style: {
            color: 'rgb(255, 254, 186)'
          },
          duration: 50000
        });
      }
    }
  }
</script>

<style lang="less">
  * {
    margin: 0;
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
  @colorOrangeSand: rgb(245, 211, 100);
  @colorRed: rgb(214, 38, 36);
  @colorGreen: rgb(134, 193, 73);
  @colorGrey: rgb(148, 144, 152);
  @colorWhite: rgb(255, 255, 255);

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    min-width: 600px;
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

  .btns {
    display: flex;
    justify-content: space-between;
    width: 40%;
  }

  .btn {
    width: 30%;
    color: @colorDarkGrey;
    background: @colorOrangeSand;
    border: none;
    padding: 10px;
    border-radius: 4px;
    cursor: pointer;
    outline: none;

    &.red,
    &.green,
    &.grey {
      color: @colorYellowSand;
      font-weight: bold;
    }

    &.red {
      background: @colorRed;
    }

    &.green {
      background: @colorGreen;
    }

    &.grey {
      background: @colorGrey
    }
  }
</style>
