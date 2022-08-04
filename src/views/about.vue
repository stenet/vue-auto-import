<script setup lang="ts">
const name = ref("Stefan");
const fullName = computed(() => `${name.value} Heim`);
</script>

<template>
  <div>
    <div>
      About {{ fullName }}
    </div>
    <div>
      <TheWelcome :name="'Hans'" />
    </div>
  </div>
</template>

<style>
</style>
