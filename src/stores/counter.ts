import { defineStore } from 'pinia';

export const useCounterStore = defineStore({
	id: 'counter',
	state: () => ({
		count: 0
	}),
	getters: {
		doubleCount: (state) => state.count * 2
	},
	actions: {
		increaseCount() {
			++this.count
		},
		decreaseCount() {
			if (this.count <= 0) return;
			--this.count
		}
	}
})