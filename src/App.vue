<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
	<!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" /> -->
	<div class="app">
		<nav>
			<RouterLink to="/"> Home </RouterLink> |
			<RouterLink to="/about"> About </RouterLink>
		</nav>

		<RouterView />
	</div>
</template>

<style>
.app {
	text-align: center;
}
</style>
