<template>
  <header
    class="bg-gray-800 text-white p-4 lg:p-6 flex justify-between items-center lg:items-start"
  >
    <div class="flex items-center">
      <router-link to="/auth" class="font-bold text-2xl lg:text-4xl"
        >To do App</router-link
      >
      <nav class="ml-6 lg:ml-12"></nav>
    </div>
    <div>
      <router-link
        to="/auth"
        tag="button"
        class="px-4 py-2 text-sm font-semibold rounded-full leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
        >Login</router-link
      >
      <button
        @click="signOut"
        class="px-4 py-2 text-sm font-semibold rounded-full leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
      >
        Logout
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "../store/user";

const errorMsg = ref(null);
const userStore = useUserStore();

async function signOut() {
  try {
    await useUserStore.signOut();
  } catch (e) {
    errorMsg.value = e.message;
  }
  console.log('pepe');
}
</script>
<style></style>
