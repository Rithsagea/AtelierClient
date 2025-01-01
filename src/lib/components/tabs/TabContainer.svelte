<script lang="ts">
	import { setContext, type Snippet } from 'svelte';
	import { writable } from 'svelte/store';

	interface Props {
		selected: string;
		children: Snippet;
	}

	const { selected, children }: Props = $props();
	const selectedTab = writable(selected);
	setContext('selectedTab', selectedTab);

	$effect(() => {
		$selectedTab = selected;
	});
</script>

{@render children()}
