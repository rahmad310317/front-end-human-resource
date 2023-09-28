<template>
  <div>
    <!-- header -->
    <div class="min-h-screen w-screen bg-slate-900 text-gray-100">
      <div class="text-3xl font-bold">Barus Media</div>
      <div class="text-sm font-mono flex space-x-4">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink :to="{ name: 'about' }">About</NuxtLink>
      </div>
    </div>
    <!-- content -->
    <slot />
  </div>
</template>
