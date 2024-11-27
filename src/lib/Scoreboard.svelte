<script lang="ts">
	import Score from './Score.svelte';
	import type { PlayerId } from './types';
	type Props = { scores: number[]; turn: PlayerId };
	let { scores, turn }: Props = $props();
</script>

<div class="flex w-full">
	{#each scores as score, i}
		<Score {score} player={i} current={turn === i} />
	{/each}
</div>
