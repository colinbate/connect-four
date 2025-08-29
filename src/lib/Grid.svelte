<script lang="ts">
	import Column from './Column.svelte';
	import Congrats from './Congrats.svelte';
	import type { Board, PlayerId } from './types';
	import { COLS, PLAYERS, ROWS } from './constants';
	import { checkDraw, checkWin } from './winning';

	type Props = {
		turn: PlayerId;
		onwin: (x: PlayerId) => void;
		onnext: (x: PlayerId) => void;
	};
	let { turn, onwin, onnext }: Props = $props();

	const empty = () => Array.from(Array(COLS), () => []);
	let board: Board = $state(empty());
	let winner: PlayerId | null = $state(null);
	let gamestate: 'playing' | 'won' | 'draw' = $state('playing');

	function handleClick(index: number) {
		if (winner || board[index].length === ROWS) {
			return;
		}
		board[index] = [...board[index], turn];
		if (checkWin(board, index)) {
			winner = turn;
			onwin(winner);
			gamestate = 'won';
		} else if (checkDraw(board)) {
			gamestate = 'draw';
			onnext((turn + 1) % PLAYERS);
		} else {
			onnext((turn + 1) % PLAYERS);
		}
	}

	function playAgain() {
		winner = null;
		board = empty();
		gamestate = 'playing';
	}
</script>

<div class="relative flex w-full border-l border-black dark:border-white">
	{#if gamestate === 'won' || gamestate === 'draw'}
		<Congrats {winner} onclick={playAgain} />
	{/if}
	{#each board as column, i}
		<Column {column} onclick={() => handleClick(i)} />
	{/each}
</div>
