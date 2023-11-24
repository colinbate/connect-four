<script lang="ts">
  import Column from "./Column.svelte";
  import Congrats from "./Congrats.svelte";
  import type { Board, PlayerId } from "./types";
  import { COLS, PLAYERS, ROWS } from "./constants";
  import { checkWin } from "./winning";

  let { turn, onwin } = $props<{turn: PlayerId, onwin: (x: PlayerId) => void;}>();

  const empty = () => Array.from(Array(COLS), () => ([]));
  let board: Board = $state(empty());
  let winner: PlayerId | undefined = $state(undefined);

  function handleClick(index: number) {
    if (winner || board[index].length === ROWS) {
      return;
    }
    board[index] = [...board[index], turn];
    if (checkWin(board, index)) {
      winner = turn;
      onwin(winner);
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
  <Congrats {winner} onclick={playAgain} />
  {/if}
  {#each board as column, i}
    <Column {column} onclick={() => handleClick(i)} />
  {/each}
</div>