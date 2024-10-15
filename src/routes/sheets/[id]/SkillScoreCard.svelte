<script lang="ts">
	import type { AttributeListData } from '$lib/components/AttributeList';
	import AttributeList from '$lib/components/AttributeList.svelte';
	import { Skills, type Sheet, SkillLabels } from '$lib/Types';

	export let sheet: Sheet;

	const data: AttributeListData = {
		title: 'Skill Scores',
		attributeType: 'skill',
		items: Skills.map((skill) => ({
			proficiency: sheet.skillProficiencies.includes(skill),
			modifier: sheet.skillModifiers[skill],
			attributeValue: skill,
			label: SkillLabels[skill]
		}))
	};
</script>

<AttributeList {data} />
