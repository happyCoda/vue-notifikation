<template lang="html">
  <div class="notifikation">
    <transition-group name="fade" tag="div">
      <div
        class="notification__item"
        v-for="item, key in items"
        v-bind:key="key"
        v-bind:style="item.style"
      >{{ item.message }}</div>
    </transition-group>
  </div>
</template>
<script>
  export default {
    name: 'Notifikation',
    props: ['items']
  }
</script>
<style lang="less" scoped>
  .notification {
    &__item {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      border-radius: 4px;
      box-shadow: 1px 1px 10px rgba(0, 0, 0, .4);

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
