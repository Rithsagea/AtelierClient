<script lang="ts">
	import type { Component } from 'svelte';
	import TabButton, { type TabButtonProps } from './TabButton.svelte';

	interface Props {
		tabs: Record<string, string>;
		selected: string;
		button?: Component<TabButtonProps>;
	}

	let { tabs, selected = $bindable() }: Props = $props();

	if (!Object.keys(tabs).includes(selected)) selected = Object.keys(tabs)[0];
</script>

<div class="grid w-full grid-flow-col auto-rows-max">
	{#each Object.entries(tabs) as [k, v]}
		<TabButton
			id={k}
			label={v}
			selected={selected === k}
			onclick={() => {
				selected = k;
			}}
		/>
	{/each}
</div>
