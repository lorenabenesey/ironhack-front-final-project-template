<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">To-Do List</h1>
    <ul class="list-reset">
      <li v-for = "task in taskStore.tasks" class="flex items-center mb-4">
        <input type="checkbox" class="form-checkbox h-6 w-6 text-indigo-600 transition duration-150 ease-in-out" />
        <span class="ml-3 flex-1 font-medium text-gray-900">{{task.title}}</span>
        <button
          class="text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition duration-150 ease-in-out">
          Edit
        </button>
        <button
          class="text-sm font-medium text-red-600 hover:text-red-500 focus:outline-none focus:underline transition duration-150 ease-in-out">
          Delete
        </button>
      </li>
    </ul>
    <form @submit.prevent="addTask" class="flex items-center mt-4">
      <input v-model="newTaskText" type="text"
        class="form-input w-full py-2 px-3 rounded-md text-gray-900 leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
        placeholder="Add a new task" />
      <button type="submit"
        class="ml-4 py-2 px-3 rounded-md text-sm font-medium leading-5 text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-800">
        Add Task
      </button>
    </form>
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

async function addTask() {
  try {
    await taskStore.addTask(newTaskText.value, userStore.user.id);
  } catch (e) {
    errorMsg.value = e.message;
    console.log(errorMsg.value);
  }

};

async function getTasks() {
  try {
    await taskStore.fetchTasks();
    newTaskText.value = task.title;
  } catch (e) {
    errorMsg.value = e.message;
    console.log(errorMsg.value);

  }
}; 

onMounted(async () => {
  try {
    await taskStore.fetchTasks();
    console.log(taskStore.tasks);
  } catch (e) {
    console.log(e);
  }
});


/* const tasks = ref([
      { text: 'Take out the trash', completed: false },
      { text: 'Do the dishes', completed: false },
      { text: 'Buy groceries', completed: false },
    ]);
    const newTaskText = ref('');

    function addTask() {
      tasks.value.push({
        text: newTaskText.value,
        completed: false,
      });
      newTaskText.value = '';
    }

    function deleteTask(index) {
      tasks.value.splice(index, 1);
    }

    function editTask(index) {
      const task = prompt('Edit task:', tasks.value[index].text);
      if (task) {
        tasks.value[index].text = task;
      }
    };

  function toggleCompleted(index) {
      tasks.value[index].completed = !tasks.value[index]
    } */
</script>
