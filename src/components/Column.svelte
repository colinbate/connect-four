<script lang="ts">
  import { ROWS } from "../logic/constants";
  import Token from "./Token.svelte";
  import type { Column } from "../logic/types";

  export let column: Column;

  $: fullColumn = Array.from({ ...column, length: ROWS });
  $: isFull = column.length === ROWS;
</script>

<div
  on:click
  class:cursor-not-allowed={isFull}
  class="flex flex-col-reverse flex-grow border-r border-black cursor-pointer dark:border-white"
>
  {#each fullColumn as token, i}
    <Token {token} pos={i} />
  {/each}
</div>
