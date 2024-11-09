<script lang="ts" context="module">
	interface AttributeTableData {
		title: string;
		items: AttributeTableItem[];
		attributeType: string;
	}

	interface AttributeTableItem {
		value: number;
		modifier: number;
		label: string;
		attributeValue: string;
	}
</script>

<script lang="ts">
	import { getContext } from 'svelte';
	import type { WebSocketConnection } from '$lib/WebSocket';
	import { formatModifier } from '$lib/Util';

	export let data: AttributeTableData;

	const ws = getContext<WebSocketConnection>('ws');
	function handleRoll(item: AttributeTableItem) {
		console.log(`Rolling ${data.attributeType} check ${item.attributeValue}`);
		ws.send('roll', { type: data.attributeType, value: item.attributeValue });
	}
</script>

<div class="card flex flex-col border-slate-400 bg-slate-200">
	<h2>{data.title}</h2>
	{#each data.items as item}
		<div class="m-1 flex items-center">
			<button on:click={() => handleRoll(item)} class="size-16 bg-slate-300">
				<span class="block text-2xl">
					{formatModifier(item.modifier)}
				</span>
				<span class="text-s block">
					({item.value})
				</span>
			</button>
			<span class="block px-2 text-xl">{item.label}</span>
		</div>
	{/each}
</div>
