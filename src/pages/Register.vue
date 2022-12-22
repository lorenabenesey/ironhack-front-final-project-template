<template>
  <form class="w-full max-w-sm mx-auto p-6 bg-white rounded-lg shadow-md">
    <!--Error message-->
    <div v-if="errorMsg" class="mb-10 p-4 rounded-md bg-light-grey">
        <p class="text-red-500">{{ errorMsg }}</p>
    </div>
    <div class="mb-4">
      <label for="email" class="block font-bold text-gray-700 text-sm mb-2">
        Email
      </label>
      <input
        v-model="email"
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
        id="password"
        type="password"
        class="w-full py-2 px-3 leading-tight text-gray-700 border rounded focus:outline-none focus:shadow-outline"
      />
    </div>
    <div class="mb-4">
      <label
        for="password-confirm"
        class="block font-bold text-gray-700 text-sm mb-2"
      >
        Confirm Password
      </label>
      <input
        v-model="passwordConfirm"
        id="password-confirm"
        type="password"
        class="w-full py-2 px-3 leading-tight text-gray-700 border rounded focus:outline-none focus:shadow-outline"
      />
    </div>
    <div class="flex items-center justify-between">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Submit
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";
const email = ref(null);
const password = ref(null);
const confirmPassword = ref(null);
const errorMsg = ref(null);

// Register function
</script>

<style scoped></style>
