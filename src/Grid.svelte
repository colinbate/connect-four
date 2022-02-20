<script lang="ts">
  import Column from "./Column.svelte";
  import {createEventDispatcher} from 'svelte';
  import type { Board, PlayerId } from "./types";
  import { COLS, PLAYERS, ROWS } from "./constants";
  import { checkWin } from "./winning";

  export let turn: PlayerId;
  
  const dispatch = createEventDispatcher();

  const empty = () => Array.from(Array(COLS), () => ([]));
  let board: Board = empty();

  function handleClick(index: number) {
    if (board[index].length === ROWS) {
      return;
    }
    board[index] = [...board[index], turn];
    if (checkWin(board, index)) {
      dispatch('win', { player: turn });
      board = empty();
    } else {
      turn = (turn + 1) % PLAYERS;
    }
  }
</script>
<div class="w-full flex border-black dark:border-white border-l">
  {#each board as column, i}
    <Column {column} on:click={() => handleClick(i)} />
  {/each}
</div>