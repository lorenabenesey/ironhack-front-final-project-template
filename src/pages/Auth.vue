<template>
  <form @submit.prevent="logIn" class="w-full max-w-sm mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
    <!--Error message-->
    <div v-if="errorMsg" class="mb-10 p-4 rounded-md bg-light-grey">
      <p class="text-red-500">{{ errorMsg }}</p>
    </div>

    <!--Login-->
    <div class="mb-4">
      <label for="email" class="block font-bold text-gray-700 text-sm mb-2">
        Email
      </label>
      <input
        v-model="email"
        required
        id="email"
        type="email"
        class="w-full py-2 px-3 leading-tight text-gray-700 border rounded focus:outline-none focus:shadow-outline"
      />
    </div>
    <div class="mb-4">
      <label for="password" class="block font-bold text-gray-700 text-sm mb-2">
        Password
      </label>
      <input
        v-model="password"
        required
        id="password"
        type="password"
        class="w-full py-2 px-3 leading-tight text-gray-700 border rounded focus:outline-none focus:shadow-outline"
      />
    </div>

    <div class="flex items-center justify-between">
      <button 
        class="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4
        rounded focus:outline-none focus:shadow-outline" type="submit" > Login
      </button>
      <router-link class="text-sm mt-6 text-center" :to="{ name: 'Register' }"
        >Don't have an account? <span class="text-at-gray-700">Register</span>
      </router-link>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "../store/user";
import router from "../router";

const email = ref(null);
const password = ref(null);
const errorMsg = ref(null);
const userStore = useUserStore();

// Login function

async function logIn() {
    try {
        await userStore.signIn(email.value, password.value);
        router.push({ path: "/" });

    } catch(e) {
        errorMsg.value = e.message;
    }
}
</script>

<style scoped></style>
