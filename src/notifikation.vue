<template lang="html">
  <div class="notifikation">
    <transition-group name="fade" tag="div">
      <div
        class="notification__item"
        v-for="item, idx in items"
        v-bind:key="idx"
        v-bind:style="item.style">
      <span
        class="notification__item__close"
        v-on:click.stop="dismiss(idx)">&#10006;</span>
      {{ item.message }}
    </div>
    </transition-group>
  </div>
</template>
<script>
  export default {
    name: 'Notifikation',
    methods: {
      dismiss(idx) {
        this.$notifikation.dismiss(idx);
      }
    }
  }
</script>
<style lang="less" scoped>
  .notification {
    &__item {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      z-index: 10000;
      border-radius: 4px;
      box-shadow: 1px 1px 10px rgba(0, 0, 0, .4);

      &__close {
        position: absolute;
        right: -7px;
        top: -7px;
        width: 15px;
        height: 15px;
        line-height: 15px;
        text-align: center;
        border-width: 2px;
        border-style: solid;
        border-radius: 50%;
        cursor: pointer;
        transition: all .3s ease-in;

        &:hover {
          right: -10px;
          top: -10px;
          width: 20px;
          height: 20px;
          line-height: 20px;
        }
      }

      &.fade-enter-active,
      &.fade-leave-active {
        transition: opacity .5s;
      }
      &.fade-enter,
      &.fade-leave-to {
        opacity: 0;
      }
    }
  }
</style>
