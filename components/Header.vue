<template>
   <!-- header -->
    <div>
      <div class="text-3xl font-bold">Barus Media</div>
      <div class="text-sm font-mono flex space-x-4">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink :to="{ name: 'about' }">About</NuxtLink>
        <NuxtLink :to="{ name: 'contact' }">Contact</NuxtLink>
      </div>
    </div>
</template>
