<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">To-Do List</h1>
    <ul class="task-list">
      <div v-for="task in taskStore.tasks">
        <li v-if="!task.is_complete" class="flex items-center mb-4">
          <input @click="isCompleted(task.id)" type="checkbox"
            class="form-checkbox h-6 w-6 text-indigo-600 transition duration-150 ease-in-out" />
          <span v-if="!task.is_complete" class="ml-3 flex-1 font-medium text-gray-900">{{ task.title }}</span>
          <button @click="changeTask(task.id)"
            class="text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition duration-150 ease-in-out">
            Edit
          </button>
          <button @click="deleteTask(task.id)"
            class="text-sm font-medium text-red-600 hover:text-red-500 focus:outline-none focus:underline transition duration-150 ease-in-out ml-2">
            Delete
          </button>
          <button @click="isCompleted(task.id)"
            class="text-sm font-medium text-green-600 hover:text-green-500 focus:outline-none focus:underline transition duration-150 ease-in-out ml-2">
            Mark as Completed
          </button>
        </li>
      </div>
    </ul>
    <form @submit.prevent="addTask" class="flex items-center mt-4">
      <input v-model="newTaskText" type="text"
        class="form-input w-full py-2 px-3 rounded-md text-gray-900 leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
        placeholder="Add a new task" />
      <button type="submit"
        class="ml-4 py-2 px-3 rounded-md text-sm font-medium leading-5 text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:border-gray-700 focus:shadow-outline-indigo active:bg-gray-800">
        Add Task
      </button>
    </form>

    <h1 class="text-2xl font-bold mb-4">Completed Tasks</h1>
    <ul class="task-list">
      <div v-for="task in taskStore.tasks">
        <li v-if="task.is_complete" class="flex items-center mb-4">
          <span class="ml-3 flex-1 font-medium text-gray-400 line-through">{{
            task.title
          }}</span>
          <button @click="deleteTask(task.id)"
            class="text-sm font-medium text-red-600 hover:text-red-500 focus:outline-none focus:underline transition duration-150 ease-in-out ml-2">
            Delete
          </button>
          <button @click="isNotCompleted(task.id)"
            class="text-sm font-medium text-green-600 hover:text-green-500 focus:outline-none focus:underline transition duration-150 ease-in-out ml-2">
            Mark as Uncompleted
          </button>
        </li>
      </div>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useTaskStore } from "../store/task";
import { useUserStore } from "../store/user";
import { onMounted } from "vue";

const userStore = useUserStore();

const task = ref(null);
const newTaskText = ref("");
const errorMsg = ref(null);
const taskStore = useTaskStore();
const tasks = ref(null);
const promptMessage = ref(null);

async function addTask() {
  try {
    await taskStore.addTask(newTaskText.value, userStore.user.id);
    newTaskText.value = null;
  } catch (e) {
    errorMsg.value = e.message;
    console.log(errorMsg.value);
  }
}

onMounted(async () => {
  try {
    await taskStore.fetchTasks();
  } catch (e) {
    console.log(e);
  }
});

async function deleteTask(id) {
  try {
    await taskStore.deleteTask(id);
  } catch (e) {
    errorMsg.value = e.message;
    console.log(errorMsg.value);
  }
}


async function changeTask(id) {
  try {
    promptMessage.value = await prompt("Edit your task: ");
    if (promptMessage.value !== "") {
      await taskStore.editTask(promptMessage.value, id);
    } else {
      errorMsg.value = "Task cannot be empty";
    }
  } catch (e) {
    errorMsg.value = e.message;
    console.log(errorMsg.value);
  }
}


async function isCompleted(id) {
  try {
    await taskStore.isComplete(id);
  } catch (e) {
    errorMsg.value = e.message;
    console.log(errorMsg.value);
  }
}

async function isNotCompleted(id) {
  try {
    await taskStore.isNotComplete(id);
  } catch (e) {
    errorMsg.value = e.message;
    console.log(errorMsg.value);
  }
}
</script>
