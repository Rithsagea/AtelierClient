<script lang="ts">
	import ViewCollection from './ViewCollection.svelte';

	interface DisplayColumnData {
		items: any[];
	}

	let { items }: DisplayColumnData = $props();
</script>

<div class="h-full break-inside-avoid space-y-4">
	<ViewCollection views={items} />
</div>
