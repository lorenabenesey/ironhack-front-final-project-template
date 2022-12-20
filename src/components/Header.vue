
   <template>
  <header class="bg-gray-600 text-white p-4 lg:p-6 flex justify-between items-center lg:items-start">
    <div class="flex items-center">
      <router-link to="/" class="font-bold text-2xl lg:text-4xl">To-Do App</router-link>
      <nav class="ml-6 lg:ml-12">
        <router-link to="/" class="inline-block px-4 py-2 text-sm font-semibold rounded-full leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Home</router-link>
        <router-link to="/about" class="inline-block px-4 py-2 text-sm font-semibold rounded-full leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Acerca de</router-link>
        <router-link to="/contact" class="inline-block px-4 py-2 text-sm font-semibold rounded-full leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Contacto</router-link>
      </nav>
    </div>
    <div>
      <button class="px-4 py-2 text-sm font-semibold rounded-full leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Log in</button>
      <button class="px-4 py-2 text-sm font-semibold rounded-full leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Log out</button>
    </div>
  </header>
</template>

  
 
  

<script setup>

</script>

<style scoped>

</style>