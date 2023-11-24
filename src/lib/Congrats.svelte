<script lang="ts">
  import type { MouseEventHandler } from "svelte/elements";
  import { ROWS } from "./constants";
  import Token from "./Token.svelte";
  import type { PlayerId } from "./types";
  import { fly } from 'svelte/transition';

  let { winner, onclick } = $props<{winner: PlayerId; onclick?: MouseEventHandler<HTMLButtonElement>}>();
  
</script>
<div class="absolute inset-0 flex items-center justify-center z-10">
  <div transition:fly={{y: -50}} class="absolute w-1/2 rounded-xl p-8 dark:bg-gray-700 shadow bg-gray-300 flex flex-col gap-4 items-center justify-center">
    <div class="flex items-center justify-center w-full gap-4">
      <div class="w-1/4"><Token token={winner} pos={ROWS} /></div>
      <span class="text-3xl">You win!</span>
    </div>
    <button {onclick} type="button" class="rounded py-3 px-6 bg-svelte hover:bg-gradient-to-t from-[rgba(0,0,0,0.3)]">Play Again</button>
  </div>
</div>