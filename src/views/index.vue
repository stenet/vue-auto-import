<script setup lang="ts">
import IconFa6BrandsMicrosoft from "~icons/fa6-brands/microsoft";

const route = useRoute();

function toggleDark() {
  document.querySelector(":root")!.classList.toggle("dark");
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <TheHeader/>
    <LocationItem/>
    <div>
      Auth required: {{ route.meta?.authRequired }}
    </div>
    <div>
      <button @click="toggleDark()">Toggle dark-/light-mode</button>
    </div>
    <div class="index__icons flex flex-wrap justify-center gap-2 items-center p-4 transition bg-white dark:bg-gray-800 drop-shadow hover:drop-shadow-md">
      <IconFasArrowDown></IconFasArrowDown>
      <IconFasAddressBook></IconFasAddressBook>
      <IconFasArrowUp></IconFasArrowUp>

      <div class="text-9xl text-blue-700">
        <IconFabWindows></IconFabWindows>
      </div>

      <div class="text-9xl text-blue-700">
        <component :is="IconFa6BrandsMicrosoft"></component>
      </div>

      <div class="text-9xl text-blue-700">
        <component :is="IconFa6BrandsMicrosoft"></component>
      </div>

      <div class="text-9xl text-blue-700">
        <component :is="IconFa6BrandsMicrosoft"></component>
      </div>
    </div>
    <div>
      <TheWelcome name="Stefan"/>
    </div>
  </div>
</template>

<style>
.index__icons svg {
  @apply transition hover:scale-105 hover:text-emerald-700 cursor-pointer;
}
</style>

<route lang="json">
{
"meta": {
"authRequired": true
}
}
</route>