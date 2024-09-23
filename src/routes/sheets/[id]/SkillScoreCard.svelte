<script lang="ts">
	import { Skills, type Skill, type Sheet, SkillLabels } from '$lib/Types';
	import { formatModifier } from '$lib/Util';
	import { WebSocketConnection } from '$lib/WebSocket';
	import { getContext } from 'svelte';

	export let sheet: Sheet;

	const ws = getContext<WebSocketConnection>('ws');
	function handleRoll(skill: Skill) {
		console.log(`Rolling skill check ${skill}`);
		ws.send('roll', { type: 'skill', value: skill });
	}
</script>

<div class="card flex flex-col border-slate-400 bg-slate-200">
	<h2>Saving Throws</h2>
	{#each Skills as skill}
		<div class="flex">
			<button on:click={() => handleRoll(skill)} class="flex h-8 w-14 bg-slate-300">
				<input
					class="m-1"
					type="radio"
					disabled
					checked={sheet.skillProficiencies.includes(skill)}
				/>
				<span class="block w-full text-center">
					{formatModifier(sheet.skillModifiers[skill])}
				</span>
			</button>
			<span class="px-2">
				{SkillLabels[skill]}
			</span>
		</div>
	{/each}
</div>
