<script lang="ts">
	import ModeSwitcher from './lib/ModeSwitcher.svelte';
	import Game from './lib/Game.svelte';
</script>
<ModeSwitcher />
<main class="p-1 mx-auto text-center max-w-xl flex flex-col items-center justify-center h-screen">
	<h1 class="uppercase text-5xl leading-normal font-thin text-svelte">Connect Four</h1>
	<Game />
</main>