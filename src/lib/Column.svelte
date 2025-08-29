<script lang="ts">
	import type { MouseEventHandler } from 'svelte/elements';
	import { ROWS } from './constants';
	import Token from './Token.svelte';
	import type { Column } from './types';
	type Props = { column: Column; onclick: MouseEventHandler<HTMLButtonElement> };
	let { column, onclick }: Props = $props();
	let fullColumn = $derived(Array.from({ ...column, length: ROWS }));
	let isFull = $derived(column.length === ROWS);
</script>

<button
	{onclick}
	class={[
		'flex flex-grow flex-col-reverse border-r border-black dark:border-white',
		isFull ? `cursor-not-allowed` : `cursor-pointer`
	]}
>
	{#each fullColumn as token, i}
		<Token {token} pos={i} />
	{/each}
</button>
