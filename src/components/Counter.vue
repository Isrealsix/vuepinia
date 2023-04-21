<script setup lang="ts">
import { useCounterStore } from '../stores/counter';

	const storeCounter = useCounterStore()
</script>
<template>
	<div class="buttons">
		<button @click="storeCounter.increaseCount">+</button>
		<button @click="storeCounter.decreaseCount">-</button>
	</div>
</template>
