<template>
    <header class="bg-gray-900 text-white p-4 shadow-md">
    <div class="container mx-auto flex justify-between items-center">
      <router-link to="/" class="font-bold text-xl">Mi sitio</router-link>
      <nav>
        <router-link
          to="/acerca"
          class="inline-block px-4 py-2 text-sm font-semibold rounded-full"
        >
          Acerca de
        </router-link>
        <router-link
          to="/contacto"
          class="inline-block px-4 py-2 text-sm font-semibold rounded-full"
        >
          Contacto
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>

</script>

<style scoped>

</style>