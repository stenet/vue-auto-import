<script lang="ts" setup>
const route = useRoute();
</script>

<template>
  <div>
    <div>
      This is {{ route.name }}. Go Say Hello
    </div>
    <div>
      <SayHello/>
    </div>
  </div>
</template>

<style lang="less">
</style>