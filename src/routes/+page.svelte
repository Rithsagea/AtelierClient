<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const { sheets } = data;
</script>

<h1>Atelier</h1>

<h2>Sheets</h2>

<table>
	<thead>
		<tr>
			<th>Id</th>
			<th>Link</th>
		</tr>
	</thead>
	<tbody>
		{#each sheets as sheet}
			<tr>
				<td>
					{sheet.id}
				</td>
				<td>
					<a href={`/sheets/${sheet.id}`}> Link </a>
				</td>
			</tr>
		{/each}
	</tbody>
</table>
