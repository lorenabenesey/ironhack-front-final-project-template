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
    },

    // Hacer el PUT (edit)
    async editTask(title, id) {
      const { data, error } = await supabase
        .from("tasks")
        .update({ title: title })
        .match({ id: id });
      this.fetchTasks();
      if (error) throw error;
    },

    // Hacer el delete
    async deleteTask(id) {
      const { data, error } = await supabase
        .from("tasks")
        .delete()
        .match({ id: id });
      this.fetchTasks();
      if (error) throw error;
    },

    // Hacer el PUT (cambiar entre completada y pendiente)

    async isComplete(id) {
      const { data, error } = await supabase
        .from("tasks")
        .update({ is_complete: true })
        .match({ id: id });
      this.fetchTasks();
      if (error) throw error;
    },
    
    async isNotComplete(id) {
      const { data, error } = await supabase
        .from("tasks")
        .update({ is_complete: false })
        .match({ id: id });
      this.fetchTasks();
      if (error) throw error;
    },
  },
});
