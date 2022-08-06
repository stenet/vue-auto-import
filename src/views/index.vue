<script setup lang="ts">
import IconFa6BrandsMicrosoft from "~icons/fa6-brands/microsoft";

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
      <IconFasArrowDown></IconFasArrowDown>
      <IconFasAddressBook></IconFasAddressBook>
      <IconFasArrowUp></IconFasArrowUp>
      
      <div class="big blue">
        <IconFabWindows></IconFabWindows>
      </div>
      
      <div class="big blue">
        <component :is="IconFa6BrandsMicrosoft"></component>
      </div>
    </div>
    <div>
      <TheHeader/>
    </div>
    <div>
      <TheWelcome name="Stefan" />
    </div>
  </div>
</template>

<style>
.big {
  font-size: 3rem;
}
.blue {
  color: steelblue;
}
</style>

<route lang="json">
{
  "meta": {
    "authRequired": true
  }
}
</route>