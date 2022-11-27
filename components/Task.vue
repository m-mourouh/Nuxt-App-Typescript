<template>
	<div :class="`bg-light task ${task.done ? 'is-complete' : ''}`">
		<div class="content">{{ task.content }}</div>
		<div class="buttons">
			<button @click="toggleDone" class="btn btn-success">{{ task.done ? 'Undo' : 'Done' }}</button>
			<button @click="removeTask" class="btn btn-danger">Delete</button>
		</div>
	</div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
interface Task {
  content: String;
  done: Boolean;
}
export default Vue.extend({
	props: {
        task: {
            type: Object,
            required: true
        } as PropOptions<Task>
  },
	methods: {
		toggleDone(): void {
			this.$store.commit('TOGGLE_TASK', this.task);
		},
		removeTask(): void {
			this.$store.commit('REMOVE_TASK', this.task);
		}
	}
})
</script>

<style>

</style>
