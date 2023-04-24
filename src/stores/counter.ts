import { defineStore } from 'pinia';

interface IState {
	count: number
}

export const useCounterStore = defineStore({
	persist: true,
	id: 'counter',
	state: () => ({
		count: 0
	}),
	getters: {
		oddOrEven: (state) => {
			if (state.count % 2 === 0) return 'even';
			return 'odd'
		}
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