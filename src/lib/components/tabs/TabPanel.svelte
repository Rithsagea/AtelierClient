<script lang="ts">
	import { getContext, type Snippet } from 'svelte';
	import type { Writable } from 'svelte/store';

	interface Props {
		tabId: string;
		children: Snippet;
	}

	let { tabId = '', children }: Props = $props();

	const selectedTab = getContext<Writable<string>>('selectedTab');
</script>

{#if $selectedTab === tabId}
	{@render children()}
{/if}
