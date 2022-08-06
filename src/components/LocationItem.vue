<script lang="ts" setup>
const route = useRoute();
</script>

<template>
  <div class="text-emerald-800 dark:text-emerald-200">
    You are here: <span class="text-gray-200 dark:text-gray-800 bg-emerald-800 dark:bg-emerald-200 px-4 py-1 rounded">{{ route.path }}</span>
  </div>
</template>

<style lang="less">

</style>