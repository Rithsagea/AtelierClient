<script lang="ts">
	import { env } from '$env/dynamic/public';
	import { WebSocketConnection } from '$lib/WebSocket';
	import { setContext } from 'svelte';
	import Chat from './Chat.svelte';
	import ViewCollection from '$lib/components/view/ViewCollection.svelte';
	import TabBar from '$lib/components/tabs/TabBar.svelte';
	import TabContainer from '$lib/components/tabs/TabContainer.svelte';
	import TabPanel from '$lib/components/tabs/TabPanel.svelte';

	const { data } = $props();
	const { sheet } = data;

	const connection = new WebSocketConnection(`ws://${env.PUBLIC_API_URL}/ws`, sheet.id);
	setContext<WebSocketConnection>('ws', connection);

	const tabs: Record<string, string> = { stats: 'Stats', foo: 'Foo', bar: 'Bar' };
	let selected = $state('');
</script>

<div class="bg-gray-600">
	<h2 class="text-white">Sheet Data</h2>
	<TabBar {tabs} bind:selected />
</div>

<div class="flex h-full">
	<div class="m-2 grow">
		<TabContainer {selected}>
			<TabPanel tabId="stats">
				<div class="w-full columns-4 gap-4">
					<ViewCollection views={sheet.views} />
				</div>
			</TabPanel>
			<TabPanel tabId="foo">Foo!</TabPanel>
			<TabPanel tabId="bar">Bar!</TabPanel>
		</TabContainer>
	</div>

	<div class="grow-0">
		<Chat />
	</div>
</div>
