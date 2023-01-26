<template>
  <div>
    <button
      class="bg-blue-500 text-white py-2 px-4 rounded-lg"
      @click="showModal = true"
    >
      Edit Task
    </button>
    <div
      v-if="showModal"
      class="fixed top-0 right-0 h-full w-1/2 bg-black bg-opacity-75 transition duration-300 ease-in-out"
    >
      <div class="bg-white p-7 rounded-lg">
        
        <form>
          <div class="border-4 px-12 py-4 rounded-lg w-full">
            <label class="block font-medium mb-2">Task Name</label>
            <input
              v-model="taskName"
              type="text"
              class="border p-2 rounded-lg w-full"
            />

            <div class="flex justify-end mt-4">
              <button
                @click="changeTask(task.id)"
                class="bg-gray-800 text-white py-2 px-4 rounded-lg mr-2"
              >
                Save
              </button>
              <button
                class="bg-gray-500 text-white py-2 px-4 rounded-lg"
                @click="showModal = false"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useTaskStore } from "../store/task";

const errorMsg = ref(null);
const editedTask = ref(null);
const showModal = ref(false);
const task = ref(null);

/* async function changeTask(id) {
  try {
    await taskStore.editTask(editedTask.value, props.id);
  } catch (e) {
    errorMsg.value = e.message;
    console.log(errorMsg.value);
  }
} */
</script>

<style scoped></style>
