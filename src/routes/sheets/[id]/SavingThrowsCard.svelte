<script lang="ts">
	import { Abilities, AbilityLabels, type Sheet } from '$lib/Types';
	import { formatModifier } from '$lib/Util';

	export let sheet: Sheet;
</script>

<div class="card flex flex-col border-slate-400 bg-slate-200">
	<h2>Saving Throws</h2>
	<table>
		<tr>
			<th>Proficiency</th>
			<th>Modifier</th>
			<th>Ability</th>
		</tr>
		{#each Abilities as ability}
			<tr>
				<td class="text-center"
					><input type="radio" disabled checked={sheet.savingProficiencies.includes(ability)} /></td
				>
				<td class="text-center">{formatModifier(sheet.savingModifiers[ability])}</td>
				<td class="text-center">{AbilityLabels[ability]}</td>
			</tr>
		{/each}
	</table>
</div>
