<script lang="ts">
  import Score from "./Score.svelte";
  import type { PlayerId } from "../logic/types";

  export let scores: number[];
  export let turn: PlayerId;
</script>

<div class="flex w-full">
  {#each scores as score, i}
    <Score {score} player={i} current={turn === i} />
  {/each}
</div>
