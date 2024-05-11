<script lang="ts">
	import { Abilities, AbilityLabels, type Sheet } from '$lib/Types';
	import { formatModifier } from '$lib/Util';

	export let sheet: Sheet;
</script>

<div class="card flex flex-col border-slate-400 bg-slate-200">
	<h2>Ability Scores</h2>
	<table>
		<tr>
			<th>Ability</th>
			<th>Score</th>
			<th>Modifier</th>
		</tr>
		{#each Abilities as ability}
			<tr>
				<td class="text-center">
					{AbilityLabels[ability]}
				</td>
				<td class="text-center">
					{sheet.abilityScores[ability]}
				</td>
				<td class="text-center">
					{formatModifier(sheet.abilityModifiers[ability])}
				</td>
			</tr>
		{/each}
	</table>
</div>
