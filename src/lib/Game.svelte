<script lang="ts">
  import { PLAYERS } from "./constants";
  import Grid from "./Grid.svelte";
  import Scoreboard from "./Scoreboard.svelte";
  import type { PlayerId } from "./types";

  let turn: PlayerId = $state(Math.floor(Math.random() * PLAYERS));
  let scores: number[] = $state(Array(PLAYERS).fill(0));

  function handleWin(player: PlayerId) {
    scores[player] += 1;
    turn = (turn + 1) % PLAYERS;
  }
</script>
<Grid onwin={handleWin} bind:turn />
<Scoreboard {scores} {turn} />