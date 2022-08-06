<script setup lang="ts">
const name = ref("Stefan");
const fullName = computed(() => `${name.value} Heim`);
const route = useRoute();
</script>

<template>
  <div class="flex flex-col gap-4">
    <TheHeader/>
    <LocationItem/>
    <div>
      About {{ fullName }}
    </div>
    <div>
      Auth required: {{ route.meta?.authRequired }}
    </div>
    <div>
      Allow anonymous: {{ route.meta?.allowAnonymous }}
    </div>
    <div>
      <TheWelcome :name="'Hans'" />
    </div>
  </div>
</template>

<style>
</style>

<route lang="yaml">
meta:
  authRequired: true
  allowAnonymous: true
</route>