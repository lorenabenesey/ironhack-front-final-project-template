// /store/task.js

import { defineStore } from "pinia";
import { supabase } from "../supabase";

export const useTaskStore = defineStore("tasks", {
  state: () => ({
    tasks: null,
  }),
  actions: {
    async fetchTasks() {
      const { data: tasks } = await supabase
        .from("tasks")
        .select("*")
        .order("id", { ascending: false });
      this.tasks = tasks;
    },
    // Hacer POST

    async addTask(title, user) {
      const { data, error } = await supabase
        .from("tasks")
        .insert({ title: title, is_complete: false, user_id: user })
        .select();
      this.fetchTasks();
      if (error) throw error;
      console.log(data);
    },

    // Hacer el PUT (edit)
    async editTask(title, user) {
      const { data, error } = await supabase
        .from("tasks")
        .update({ title: title, user_id: user })
        .match({ title: newtitle });
      if (error) throw error;
      console.log(data);
    },

    // Hacer el delete
    // Hacer el PUT (cambiar entre completada y pendiente)
  },
});
