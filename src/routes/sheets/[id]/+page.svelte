<script lang="ts">
	import { env } from '$env/dynamic/public';
	import { WebSocketConnection } from '$lib/WebSocket';
	import { setContext } from 'svelte';
	import type { PageData } from './$types';
	import Chat from './Chat.svelte';
	import ViewCollection from '$lib/components/ViewCollection.svelte';

	export let data: PageData;

	const { sheet } = data;

	const connection = new WebSocketConnection(`ws://${env.PUBLIC_API_URL}/ws`, sheet.id);
	setContext<WebSocketConnection>('ws', connection);
</script>

<div class="flex h-full">
	<div class="grid grid-cols-3">
		<div>
			<h1>Sheet Data</h1>
			<ViewCollection views={sheet.views} />
		</div>
	</div>

	<Chat />
</div>
