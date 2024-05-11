<script lang="ts">
	import { Abilities, AbilityLabels, type Sheet } from '$lib/Types';
	import { formatModifier } from '$lib/Util';

	export let sheet: Sheet;
</script>

<div class="card flex flex-col bg-slate-200 border-slate-400">
	<h2>Ability Scores</h2>
	<table>
		<tr>
			<th>Ability</th>
			<th>Score</th>
			<th>Modifier</th>
		</tr>
		{#each Abilities as ability}
			<tr>
				<td>
					{AbilityLabels[ability]}
				</td>
				<td>
					{sheet.abilityScores[ability]}
				</td>
				<td>
					{formatModifier(sheet.abilityModifiers[ability])}
				</td>
			</tr>
		{/each}
	</table>
</div>

<style>
	td {
		@apply text-center;
	}
</style>
