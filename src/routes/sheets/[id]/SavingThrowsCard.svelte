<script lang="ts">
	import type { AttributeListData } from '$lib/components/AttributeList';
	import AttributeList from '$lib/components/AttributeList.svelte';
	import { Abilities, AbilityLabels, type Sheet } from '$lib/Types';

	export let sheet: Sheet;

	const data: AttributeListData = {
		title: 'Ability Scores',
		attributeType: 'saving',
		items: Abilities.map((ability) => ({
			proficiency: sheet.savingProficiencies.includes(ability),
			modifier: sheet.savingModifiers[ability],
			attributeValue: ability,
			label: AbilityLabels[ability]
		}))
	};
</script>

<AttributeList {data} />
