<script lang="ts">
	import AttributeList from './AttributeList.svelte';
	import AttributeTable from './AttributeTable.svelte';
	import DisplayColumn from './DisplayColumn.svelte';

	export let views: any[];

	const ViewTypes: Record<string, any> = {
		AttributeList: AttributeList,
		AttributeTable: AttributeTable,
		DisplayColumn: DisplayColumn
	};
</script>

{#each views as view}
	<svelte:component this={ViewTypes[view.id]} data={view.data} />
{/each}
