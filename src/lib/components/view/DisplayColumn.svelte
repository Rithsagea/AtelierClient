<script lang="ts" context="module">
	interface DisplayColumnData {
		items: any[];
	}
</script>

<script lang="ts">
	import ViewCollection from './ViewCollection.svelte';

	export let data: DisplayColumnData;
</script>

<div class="h-full break-inside-avoid space-y-4">
	<ViewCollection views={data.items} />
</div>
