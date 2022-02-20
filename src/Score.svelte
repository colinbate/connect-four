<script lang="ts">
  import { COLORS } from "./constants";
  import type { PlayerId } from "./types";
  export let score: number;
  export let player: PlayerId;
  export let current: boolean;
  $: color = COLORS[player];
</script>
<div class="flex-grow p-4 text-2xl flex items-center justify-center" style:background-color={color}>
  <div class:border-8={current} class="relative rounded-full border-double bg-gray-50 dark:bg-gray-800 dark:border-gray-50 border-gray-800 w-20 h-20 flex items-center justify-center">{score}</div>
</div>