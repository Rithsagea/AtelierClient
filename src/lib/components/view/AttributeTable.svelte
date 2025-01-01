<script lang="ts">
	import { getContext } from 'svelte';
	import type { WebSocketConnection } from '$lib/WebSocket';
	import { formatModifier } from '$lib/Util';

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

	let { title, items, attributeType }: AttributeTableData = $props();

	const ws = getContext<WebSocketConnection>('ws');
	function handleRoll(item: AttributeTableItem) {
		console.log(`Rolling ${attributeType} check ${item.attributeValue}`);
		ws.send('roll', { type: attributeType, value: item.attributeValue });
	}
</script>

<div class="card flex flex-col border-slate-400 bg-slate-200">
	<h2>{title}</h2>
	{#each items as item}
		<div class="m-1 flex items-center">
			<button onclick={() => handleRoll(item)} class="size-16 bg-slate-300">
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
