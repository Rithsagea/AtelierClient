<script lang="ts">
	import Icon from '@iconify/svelte';
	const messages = [...Array(100).keys()].map((i) => `Test asdfasdfsa f sdfasdf Message ${i}`);
</script>

<div class="flex h-screen flex-col bg-slate-200">
	<h1>Chat</h1>

	<!-- Messages -->
	<div class="flex-auto overflow-scroll">
		{#each messages as message}
			<div class="m-2 rounded-3xl border-2 border-slate-400 bg-slate-300 p-2">
				<p>{message}</p>
			</div>
		{/each}
	</div>

	<div class="flex items-center">
		<textarea class="m-2 box-border resize-none rounded-2xl border-4 border-slate-600 p-2" />
		<button
			class="m-2 size-fit rounded-full border-4 border-slate-500 bg-slate-300 p-2 hover:bg-slate-400"
		>
			<Icon icon="mdi:paper-airplane" />
		</button>
	</div>
</div>
