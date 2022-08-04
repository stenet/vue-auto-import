<script lang="ts" setup>
const props = defineProps<{
  name: string;
}>();
</script>

<template>
  <div>
    Welcome world {{ props.name }}!
  </div>
</template>

<style lang="less">

</style>