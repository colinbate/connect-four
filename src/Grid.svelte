<script lang="ts">
  import Column from "./Column.svelte";
  import Congrats from "./Congrats.svelte";
  import {createEventDispatcher} from 'svelte';
  import type { Board, PlayerId } from "./types";
  import { COLS, PLAYERS, ROWS } from "./constants";
  import { checkWin } from "./winning";

  export let turn: PlayerId;

  const dispatch = createEventDispatcher();

  const empty = () => Array.from(Array(COLS), () => ([]));
  let board: Board = empty();
  let winner: PlayerId | undefined;

  function handleClick(index: number) {
    if (winner || board[index].length === ROWS) {
      return;
    }
    board[index] = [...board[index], turn];
    if (checkWin(board, index)) {
      winner = turn;
      dispatch('win', { player: winner });
    } else {
      turn = (turn + 1) % PLAYERS;
    }
  }

  function playAgain() {
    winner = undefined;
    board = empty();
  }
</script>
<div class="w-full flex border-black dark:border-white border-l relative">
  {#if winner != null}
  <Congrats {winner} on:click={playAgain} />
  {/if}
  {#each board as column, i}
    <Column {column} on:click={() => handleClick(i)} />
  {/each}
</div>