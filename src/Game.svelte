<script lang="ts">
import { PLAYERS } from "./constants";

  import Grid from "./Grid.svelte";
  import Scoreboard from "./Scoreboard.svelte";
import type { WinEvent } from "./types";
  let scores = Array(PLAYERS).fill(0);
  function handleWin(ev: WinEvent) {
    scores[ev.detail.player] += 1;
  }
</script>
<Grid on:win={handleWin} />
<Scoreboard {scores} />