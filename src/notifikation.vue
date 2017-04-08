<template lang="html">
  <div class="notifikation">
    <transition-group name="fade" tag="div">
      <div
        class="notification__item"
        v-for="item, idx in items"
        v-bind:key="idx"
        v-bind:style="item.style"
        v-on:click.stop="dismiss(idx)"
      >{{ item.message }}</div>
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
      cursor: pointer;

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
