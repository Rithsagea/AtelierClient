<script lang="ts">
	import { Abilities, AbilityLabels, type Ability, type Sheet } from '$lib/Types';
	import { formatModifier } from '$lib/Util';

	export let sheet: Sheet;

	function handleRoll(ability: Ability) {
		console.log(`Rolling saving throw ${ability}`);
	}
</script>

<div class="card flex flex-col border-slate-400 bg-slate-200">
	<h2>Saving Throws</h2>
	{#each Abilities as ability}
		<div class="flex">
			<button on:click={() => handleRoll(ability)} class="flex h-8 w-14 bg-slate-300">
				<input
					class="m-1"
					type="radio"
					disabled
					checked={sheet.savingProficiencies.includes(ability)}
				/>
				<span class="block w-full text-center">
					{formatModifier(sheet.savingModifiers[ability])}
				</span>
			</button>
			<span class="px-2">
				{AbilityLabels[ability]}
			</span>
		</div>
	{/each}
</div>
