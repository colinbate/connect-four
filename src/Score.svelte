<script lang="ts">
import { COLORS } from "./constants";
import type { PlayerId } from "./types";
  export let score: number;
  export let player: PlayerId;
  $: color = COLORS[player];
</script>
<div class="flex-grow p-6 text-xl" style:background-color={color}>
  {score}
</div>