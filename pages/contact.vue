<script setup>
definePageMeta({
  layout: false,
});
</script>

<template>
  <div>
    <NuxtLayout name="custom">
    <div>ini page contact</div>
    <template #header>
      <div class="text-5xl font-bold text-red-500">
        ini header yang sudah diganti
      </div>
    </template>
  </NuxtLayout></div>
</template>
