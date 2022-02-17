<script lang="ts">
  import Score from "./Score.svelte";
  export let scores: number[];

</script>
<div class="w-full flex">
  {#each scores as score, i}
    <Score {score} player={i} />
  {/each}
</div>