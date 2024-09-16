<script lang="ts">
  import { fly } from "svelte/transition";
  import { ROWS } from "../logic/constants";
  import Token from "./Token.svelte";
  import type { PlayerId } from "../logic/types";

  export let winner: PlayerId;
</script>

<div class="absolute inset-0 z-10 flex items-center justify-center">
  <div
    transition:fly={{ y: -50 }}
    class="absolute flex flex-col items-center justify-center w-1/2 gap-4 p-8 bg-gray-300 shadow rounded-xl dark:bg-gray-700"
  >
    <div class="flex items-center justify-center w-full gap-4">
      <div class="w-1/4"><Token token={winner} pos={ROWS} /></div>
      <span class="text-3xl">You win!</span>
    </div>
    <button
      on:click
      type="button"
      class="rounded py-3 px-6 bg-svelte hover:bg-gradient-to-t from-[rgba(0,0,0,0.3)]"
      >Play Again</button
    >
  </div>
</div>
