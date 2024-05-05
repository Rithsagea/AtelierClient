<script lang="ts">
	import { writable } from 'svelte/store';

	let ws: WebSocket;
	let username: string;
	let chatInput: string;
	let chat: string[];
	const chatStore = writable<string[]>([]);
	chatStore.subscribe((s) => (chat = s));

	function connect(username: string) {
		if (ws?.readyState === WebSocket.OPEN) ws.close();
		ws = new WebSocket('ws://localhost:8080/ws');
		ws.onopen = () => {
			console.log('Connection Opened!');
			console.log('Logging In!');
			send('login', username);
		};
		ws.onmessage = (e) => {
			const { command, data } = JSON.parse(e.data);
			if (command === 'chat' && data.sender !== username) {
				chatStore.update((chat) => [...chat, `[${data.sender}]: ${data.message}`]);
			}
		};
	}

	function send(command: string, data: any) {
		ws.send(JSON.stringify({ command, data }));
	}

	function sendMessage(message: string) {
		chatStore.update((chat) => [...chat, `[${username}]: ${message}`]);
		send('chat', message);
	}
</script>

<h1>Websocket Test</h1>

<div>
	<span>Username</span>
	<input bind:value={username} />
	<button on:click={() => connect(username)}>Login</button>
</div>

<div>
	<input bind:value={chatInput} />
	<button on:click={() => sendMessage(chatInput)}>Send Message!</button>
	<div>
		{#each chat as message}
			{message}
			<br />
		{/each}
	</div>
</div>
