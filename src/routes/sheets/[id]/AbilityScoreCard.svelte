<script lang="ts">
	import { Abilities, AbilityLabels, type Ability, type Sheet } from '$lib/Types';
	import { formatModifier } from '$lib/Util';
	import { WebSocketConnection } from '$lib/WebSocket';
	import { getContext } from 'svelte';

	export let sheet: Sheet;

	const ws = getContext<WebSocketConnection>('ws');
	function handleRoll(ability: Ability) {
		console.log(`Rolling ability check ${ability}`);
		ws.send('roll', { type: 'ability', value: ability });
	}
</script>

<div class="card flex flex-col border-slate-400 bg-slate-200">
	<h2>Ability Scores</h2>
	{#each Abilities as ability}
		<div class="m-1 flex items-center">
			<button on:click={() => handleRoll(ability)} class="size-16 bg-slate-300">
				<span class="block text-2xl">
					{formatModifier(sheet.abilityModifiers[ability])}
				</span>
				<span class="text-s block">
					({sheet.abilityScores[ability]})
				</span>
			</button>
			<span class="block px-2 text-xl">{AbilityLabels[ability]}</span>
		</div>
	{/each}
</div>
