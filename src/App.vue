<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app_links">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/pages/page-0050">Page 0050</RouterLink>
    <RouterLink to="/pages/page-0987">Page 0987</RouterLink>
  </div>
  <div>
    <RouterView />
  </div>
</template>

<style scoped>
.app_links {
  display: flex;
  gap: 1rem;
}
</style>
