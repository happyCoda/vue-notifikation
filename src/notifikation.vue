<template lang="html">
  <transition
    name="ololo"
    >
    <div
      class="report"
      v-if="true"
      v-bind:style="style"
    >{{ message }}</div>
  </transition>
</template>
<script>
  export default {
    name: 'Notifikation',
    props: ['message', 'top']
  }
</script>
<style lang="less" scoped>
  .report {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    border-radius: 4px;

    &.ololo-enter-active {
      transition: all .3s ease;
    }

    &.ololo-enter {
      transform: translateX(10px);
      opacity: 0;
    }

    // &.ololo-leave-active {
    //   top: 100px;
    // }
  }
</style>
