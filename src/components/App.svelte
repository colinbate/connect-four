<script lang="ts">
  import ModeSwitcher from "./ModeSwitcher.svelte";
  import Tailwindcss from "./Tailwindcss.svelte";
  import Game from "./Game.svelte";
</script>

<Tailwindcss />
<ModeSwitcher />

<main
  class="flex flex-col items-center justify-center h-screen max-w-xl p-1 mx-auto text-center"
>
  <h1 class="text-5xl font-thin leading-normal uppercase text-svelte">
    Connect Four
  </h1>
  <Game />
</main>
