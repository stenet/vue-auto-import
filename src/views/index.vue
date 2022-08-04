<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <div>
    <div>
      Home {{ route.path }}
    </div>
    <div>
      Auth required: {{ route.meta?.authRequired }}
    </div>
    <div>
      <TheHeader/>
    </div>
    <div>
      <TheWelcome name="Stefan" />
    </div>
  </div>
</template>

<route lang="json">
{
  "meta": {
    "authRequired": true
  }
}
</route>