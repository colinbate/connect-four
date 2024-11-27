<script lang="ts">
	import { COLORS, ROWS } from './constants';
	import type { PlayerId } from './types';
	import { drop } from './drop';
	type Props = { token?: PlayerId; pos: number };
	let { token, pos }: Props = $props();
	let color = $derived(COLORS[token ?? 0]);
	let distance = $derived((ROWS - pos) * -100);
</script>

{#if token != null}
	<div
		in:drop={{ duration: 300, delay: 200, y: distance }}
		class="relative h-0 w-full rounded-full bg-gradient-to-br from-[rgba(255,255,255,0.2)] pt-[100%]"
		style:background-color={color}
	>
		<div
			class="absolute inset-0 scale-[0.7] rounded-full bg-gradient-to-br from-[rgba(0,0,0,0.3)]"
		></div>
	</div>
{:else}
	<div class="h-0 w-full pt-[100%]"></div>
{/if}
