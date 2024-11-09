<script lang="ts">
	import { env } from '$env/dynamic/public';
	import { WebSocketConnection } from '$lib/WebSocket';
	import { setContext } from 'svelte';
	import type { PageData } from './$types';
	import Chat from './Chat.svelte';
	import ViewCollection from '$lib/components/view/ViewCollection.svelte';

	export let data: PageData;

	const { sheet } = data;

	const connection = new WebSocketConnection(`ws://${env.PUBLIC_API_URL}/ws`, sheet.id);
	setContext<WebSocketConnection>('ws', connection);
</script>

<div class="bg-gray-600">
	<h2 class="text-white">Sheet Data</h2>
	<div></div>
</div>
<div class="flex h-full">
	<div class="w-full columns-4 gap-4">
		<ViewCollection views={sheet.views} />
	</div>

	<Chat />
</div>
