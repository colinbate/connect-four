<script lang="ts">
  import Score from "./Score.svelte";
  import type { PlayerId } from "./types";

  export let scores: number[];
  export let turn: PlayerId;
</script>
<div class="w-full flex">
  {#each scores as score, i}
    <Score {score} player={i} current={turn === i} />
  {/each}
</div>