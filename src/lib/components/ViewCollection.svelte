<script lang="ts">
	import AttributeList from './AttributeList.svelte';
	import AttributeTable from './AttributeTable.svelte';

	export let views: any[];

	const ViewTypes: Record<string, any> = {
		AttributeList: AttributeList,
		AttributeTable: AttributeTable
	};
</script>

{#each views as view}
	<svelte:component this={ViewTypes[view.id]} data={view.data} />
{/each}
