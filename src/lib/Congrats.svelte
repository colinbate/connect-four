<script lang="ts">
	import type { MouseEventHandler } from 'svelte/elements';
	import { ROWS } from './constants';
	import Token from './Token.svelte';
	import type { PlayerId } from './types';
	import { fly } from 'svelte/transition';

	let { winner, onclick } = $props<{
		winner: PlayerId;
		onclick?: MouseEventHandler<HTMLButtonElement>;
	}>();
</script>

<div class="absolute inset-0 z-10 flex items-center justify-center">
	<div
		transition:fly={{ y: -50 }}
		class="absolute flex w-1/2 flex-col items-center justify-center gap-4 rounded-xl bg-gray-300 p-8 shadow dark:bg-gray-700"
	>
		<div class="flex w-full items-center justify-center gap-4">
			<div class="w-1/4"><Token token={winner} pos={ROWS} /></div>
			<span class="text-3xl">You win!</span>
		</div>
		<button
			{onclick}
			type="button"
			class="rounded bg-svelte from-[rgba(0,0,0,0.3)] px-6 py-3 hover:bg-gradient-to-t"
			>Play Again</button
		>
	</div>
</div>
