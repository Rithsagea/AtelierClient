<script lang="ts">
	import AttributeList from './AttributeList.svelte';
	import AttributeTable from './AttributeTable.svelte';
	import DisplayColumn from './DisplayColumn.svelte';

	let { views }: { views: any[] } = $props();

	const ViewTypes: Record<string, any> = {
		AttributeList: AttributeList,
		AttributeTable: AttributeTable,
		DisplayColumn: DisplayColumn
	};
</script>

{#each views as view}
	{@const ViewComponent = ViewTypes[view.id]}
	<ViewComponent {...view.data} />
{/each}
