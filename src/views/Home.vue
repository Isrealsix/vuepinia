<script setup lang="ts">
import { useCounterStore } from '../stores/counter';

const storeCounter = useCounterStore();
</script>

<template>
	<div class="home">
		<div class="count">{{ storeCounter.count }}</div>
		<div class="buttons">
			<button @click="storeCounter.increaseCount">+</button>
			<button @click="storeCounter.decreaseCount">-</button>
		</div>
		<hr />
		<div>This counter is: {{ storeCounter.oddOrEven }}</div>
	</div>
	<hr />
	<div>
		<h3>Edit counter:</h3>
		<input type="number" v-model="storeCounter.count">
	</div>
</template>

<style>
.count {
	font-size: 60px;
	margin: 20px;
}

.buttons button {
	font-size: 40px;
	margin: 10px;
}
</style>
