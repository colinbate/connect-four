<script lang="ts">
	import ModeSwitcher from './lib/ModeSwitcher.svelte';
	import Game from './lib/Game.svelte';
</script>

<ModeSwitcher />
<main class="mx-auto flex h-screen max-w-xl flex-col items-center justify-center p-1 text-center">
	<h1 class="text-5xl font-thin uppercase leading-normal text-svelte">Connect Four</h1>
	<Game />
</main>
