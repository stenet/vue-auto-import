<script lang="ts" setup>
const route = useRoute();
</script>

<template>
  <div class="text-green-800">
    You are here: <span class="text-gray-200 bg-green-800 px-4 py-1">{{ route.path }}</span>
  </div>
</template>

<style lang="less">

</style>