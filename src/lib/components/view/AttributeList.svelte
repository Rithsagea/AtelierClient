<script lang="ts" context="module">
	interface AttributeListData {
		title: string;
		items: AttributeListItem[];
		attributeType: string;
	}

	interface AttributeListItem {
		proficiency: boolean;
		modifier: number;
		label: string;
		attributeValue: string;
	}
</script>

<script lang="ts">
	import { formatModifier } from '$lib/Util';
	import type { WebSocketConnection } from '$lib/WebSocket';
	import { getContext } from 'svelte';

	export let data: AttributeListData;

	const ws = getContext<WebSocketConnection>('ws');
	function handleRoll(item: AttributeListItem) {
		console.log(`Rolling ${data.attributeType} check ${item.attributeValue}`);
		ws.send('roll', { type: data.attributeType, value: item.attributeValue });
	}
</script>

<div class="card flex flex-col border-slate-400 bg-slate-200">
	<h2>Saving Throws</h2>
	{#each data.items as item}
		<div class="flex">
			<button on:click={() => handleRoll(item)} class="flex h-8 w-14 bg-slate-300">
				<input class="m-1" type="radio" disabled checked={item.proficiency} />
				<span class="block w-full text-center">
					{formatModifier(item.modifier)}
				</span>
			</button>
			<span class="px-2">
				{item.label}
			</span>
		</div>
	{/each}
</div>
