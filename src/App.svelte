<script lang="ts">
	import ModeSwitcher from './ModeSwitcher.svelte';
	import Tailwindcss from './Tailwindcss.svelte';
	import Game from './Game.svelte';
</script>
<Tailwindcss />
<ModeSwitcher />
<main class="p-1 mx-auto text-center max-w-xl flex flex-col items-center justify-center h-screen">
	<h1 class="uppercase text-5xl leading-normal font-thin text-svelte">Connect Four</h1>
	<Game />
</main>