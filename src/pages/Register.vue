<template>
    <form @submit.prevent="register" class="w-full max-w-sm mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
        <!--Error message-->
        <div v-if="errorMsg" class="mb-10 p-4 rounded-md bg-light-grey">
            <p class="text-red-500">{{ errorMsg }}</p>
        </div>

        <!--Warn message-->
        <div v-if="warnMsg" class="mb-10 p-4 rounded-md bg-light-grey">
            <p class="text-green-500">{{ warnMsg }}</p>
        </div>

        <!--Register-->
        <div class="mb-4">
            <label for="email" class="block font-bold text-gray-700 text-sm mb-2">
                Email
            </label>
            <input v-model="email" required id="email" type="email"
                class="w-full py-2 px-3 leading-tight text-gray-700 border rounded focus:outline-none focus:shadow-outline" />
        </div>
        <div class="mb-4">
            <label for="password" class="block font-bold text-gray-700 text-sm mb-2">
                Password
            </label>
            <input v-model="password" required id="password" type="password"
                class="w-full py-2 px-3 leading-tight text-gray-700 border rounded focus:outline-none focus:shadow-outline" />
        </div>
        <div class="mb-4">
            <label for="password-confirm" class="block font-bold text-gray-700 text-sm mb-2">
                Confirm Password
            </label>
            <input v-model="confirmPassword" required id="password-confirm" type="password"
                class="w-full py-2 px-3 leading-tight text-gray-700 border rounded focus:outline-none focus:shadow-outline" />
        </div>
        <div class="flex items-center justify-between">
            <button
                class="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit">
                Register
            </button>
        </div>
    </form>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "../store/user";

const email = ref(null);
const password = ref(null);
const confirmPassword = ref(null);
const errorMsg = ref(null);
const warnMsg = ref(null);
const userStore = useUserStore();

// Register function
async function register() {
    try {
        await userStore.signUp(email.value, password.value);
        warnMsg.value = "Check your email and verify your account";
    } catch(e) {
        errorMsg.value = e.message;
    }
}



</script>

<style scoped>

</style>
