<script lang="ts">
	import { WebSocketConnection } from '$lib/WebSocket';
	import Icon from '@iconify/svelte';
	import { getContext } from 'svelte';
	import { writable } from 'svelte/store';

	let messages: string[] = [];
	const messagesStore = writable<string[]>([]);
	messagesStore.subscribe((s) => (messages = s));

	const connection = getContext<WebSocketConnection>('ws');
	connection.on('chat', (data) => {
		messagesStore.update((messages) => [...messages, `[${data.sender}]: ${data.message}`]);
	});

	let chatInput: string;
</script>

<div class="flex h-screen flex-auto flex-col bg-slate-200">
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
		<textarea
			bind:value={chatInput}
			class="m-2 box-border flex-auto resize-none rounded-2xl border-4 border-slate-600 p-2"
		>
		</textarea>
		<button
			on:click={() => connection.sendMessage(chatInput)}
			class="m-2 size-fit rounded-full border-4 border-slate-500 bg-slate-300 p-2 hover:bg-slate-400"
		>
			<Icon icon="mdi:paper-airplane" />
		</button>
	</div>
</div>
