<script lang="ts">
  import { ROWS } from "./constants";
  import Token from "./Token.svelte";
  import type { Column } from "./types";
  export let column: Column;
  $: fullColumn = Array.from({...column, length: ROWS});
  $: isFull = column.length === ROWS;
</script>
<div on:click class:cursor-not-allowed={isFull} class="cursor-pointer flex-grow flex flex-col-reverse border-r border-black dark:border-white">
  {#each fullColumn as token, i}
    <Token {token} pos={i} />
  {/each}
</div>