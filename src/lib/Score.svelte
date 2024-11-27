<script lang="ts">
	import { COLORS } from './constants';
	import type { PlayerId } from './types';
	type Props = { score: number; player: PlayerId; current: boolean };
	let { score, player, current }: Props = $props();
	let color = $derived(COLORS[player]);
</script>

<div class="flex flex-grow items-center justify-center p-4 text-2xl" style:background-color={color}>
	<div
		class:border-8={current}
		class="relative flex h-20 w-20 items-center justify-center rounded-full border-double border-gray-800 bg-gray-50 dark:border-gray-50 dark:bg-gray-800"
	>
		{score}
	</div>
</div>
