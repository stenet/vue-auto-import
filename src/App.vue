<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app__nav flex gap-4 p-4">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/pages/page-0050">Page 0050</RouterLink>
    <RouterLink to="/pages/page-0987">Page 0987</RouterLink>
  </div>
  <div class="p-4">
    <RouterView />
  </div>
</template>

<style>
.app__nav a {
  @apply text-blue-900 hover:text-blue-600;
} 
</style>
