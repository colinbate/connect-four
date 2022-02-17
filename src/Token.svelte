<script lang="ts">
import { COLORS, ROWS } from "./constants";

import type { PlayerId } from "./types";
import { drop } from './drop';
  export let token: PlayerId | undefined;
  export let pos: number;
  $: color = COLORS[token];
  $: distance = (ROWS - pos) * -100;
</script>
{#if token != null}
<div in:drop={{duration: 300, delay: 200, y: distance}} class="w-full h-0 pt-[100%] rounded-full relative bg-gradient-to-br from-[rgba(255,255,255,0.2)]" style:background-color={color}>
<div class="absolute inset-0 scale-[0.7] bg-gradient-to-br from-[rgba(0,0,0,0.3)] rounded-full"></div>
</div>
{:else}
<div class="w-full h-0 pt-[100%]">
</div>
{/if}