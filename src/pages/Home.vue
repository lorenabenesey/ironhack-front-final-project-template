<template>
    <div>
<h1>Welcome {{ user.email }}, this is your To-Do List </h1>
    </div>
</template>

<script setup>
  import { storeToRefs } from 'pinia';
  import { useUserStore } from '../store/user';
 
  const userStore = useUserStore();
  const { user } = storeToRefs(userStore);

</script>

<style scoped>

</style>