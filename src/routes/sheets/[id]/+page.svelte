<script lang="ts">
	import type { PageData } from './$types';
	import AbilityScoreCard from './AbilityScoreCard.svelte';
	import Chat from './Chat.svelte';
	import SavingThrowsCard from './SavingThrowsCard.svelte';

	export let data: PageData;

	const { sheet } = data;
</script>

<div class="flex h-full">
	<div class="container">
		<h1>Sheet Data</h1>
		<AbilityScoreCard {sheet} />
		<SavingThrowsCard {sheet} />
	</div>

	<Chat />
</div>
