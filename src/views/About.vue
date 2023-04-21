<script setup lang="ts">
import { useCounterStore } from '../stores/counter';

const storeCounter = useCounterStore();
</script>
<template>
	<div class="about">
		<h1>About</h1>
		<button @click="storeCounter.increaseCount" class="counter-button">
			{{ storeCounter.count }}
		</button>
	</div>
</template>

<style>
.counter-button {
	font-size: 49px;
}
</style>
