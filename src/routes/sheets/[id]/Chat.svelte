<script lang="ts">
	import Icon from '@iconify/svelte';
	const messages = [...Array(100).keys()].map((i) => `Test asdfasdfsa f sdfasdf Message ${i}`);
</script>

<div class="flex flex-col h-screen bg-slate-200">
	<h1>Chat</h1>

	<!-- Messages -->
	<div class="flex-auto overflow-scroll">
		{#each messages as message}
			<div class="m-2 p-2 rounded-3xl border-2 bg-slate-300 border-slate-400">
				<p>{message}</p>
			</div>
		{/each}
	</div>

	<div class="flex items-center">
		<textarea class="resize-none m-2 p-2 box-border rounded-2xl border-4 border-slate-600" />
		<button
			class="m-2 p-2 rounded-full size-fit bg-slate-300 hover:bg-slate-400 border-4 border-slate-500"
		>
			<Icon icon="mdi:paper-airplane" />
		</button>
	</div>
</div>
