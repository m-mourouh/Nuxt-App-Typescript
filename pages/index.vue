<template>
    <main>
    <h1 class="mb-5">Nuxt-Typescript | Todo List</h1>
    <div class="create-new">
      <input
        type="text"
        v-model="newTask"
        placeholder="Add a new task"
        @keypress.enter="addTask"
        class="form-control"
      />
      <button @click="addTask" class="btn btn-dark ms-3">Add</button>
    </div>

    <div class="tasks">
      <Task v-for="(task, i) in $store.state.tasks" :key="i" :task="task" />
    </div>
  </main>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "IndexPage",
  data() {
    return {
      newTask: "",
    };
  },
  methods: {
    addTask():void{
      if (this.newTask.trim()) {
        this.$store.commit("ADD_TASK", this.newTask);
        this.newTask = "";
      }
    },
  },
});
</script>
