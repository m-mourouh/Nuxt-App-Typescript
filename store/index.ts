interface Task {
  content: String;
  done: Boolean;
}
export const state = () => ({
	tasks: [] as Task[]
})

export const mutations = {
	ADD_TASK(state: { tasks: any[]; }, task: any) {
		state.tasks = [{ content: task, done: false }, ...state.tasks];
	},
	REMOVE_TASK(state: { tasks: any[]; }, task: any) {
		state.tasks.splice(state.tasks.indexOf(task), 1);
	},
	TOGGLE_TASK(state: any, task: { done: boolean; }) {
		task.done = !task.done;
	}
}
