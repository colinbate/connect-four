<script lang="ts">
  import { PLAYERS } from "../logic/constants";
  import Grid from "./Grid.svelte";
  import Scoreboard from "./Scoreboard.svelte";
  import type { PlayerId, WinEvent } from "../logic/types";

  let starter: PlayerId = Math.floor(Math.random() * PLAYERS);
  let turn: PlayerId = starter;
  let scores = Array(PLAYERS).fill(0);

  function handleWin(ev: WinEvent) {
    scores[ev.detail.player] += 1;
    starter = (starter + 1) % PLAYERS;
    turn = starter;
  }
</script>

<Grid on:win={handleWin} bind:turn />
<Scoreboard {scores} {turn} />
