<script lang="ts">
  import { COLORS } from "../logic/constants";
  import type { PlayerId } from "../logic/types";

  export let score: number;
  export let player: PlayerId;
  export let current: boolean;

  $: color = COLORS[player];
</script>

<div
  class="flex items-center justify-center flex-grow p-4 text-2xl"
  style:background-color={color}
>
  <div
    class:border-8={current}
    class="relative flex items-center justify-center w-20 h-20 border-gray-800 border-double rounded-full bg-gray-50 dark:bg-gray-800 dark:border-gray-50"
  >
    {score}
  </div>
</div>
