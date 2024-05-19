import { browser } from '$app/environment';
import { env } from '$env/dynamic/public';

export class WebsocketEvent extends Event {
	readonly command: string;
	readonly data: any;

	constructor(command: string, data: any) {
		super(command);

		this.command = command;
		this.data = data;
	}
}

export class WebSocketConnection extends EventTarget {
	readonly ws?: WebSocket;
	readonly user: string;

	constructor(url: string, user: string) {
		super();

		this.user = user;

		if (browser) {
			this.ws = new WebSocket(url);

			this.ws.onopen = () => {
				console.log('Connection Opened!');
				this.login();
			};

			this.ws.onmessage = (e) => {
				const { command, data } = JSON.parse(e.data);
				this.dispatchEvent(new WebsocketEvent(command, data));
			};
		}
	}

	send(command: string, data: any) {
		if (browser) this.ws?.send(JSON.stringify({ command, data }));
	}

	login() {
		console.log(`Logging in as ${this.user}`);
		this.send('login', this.user);
	}

	sendMessage(message: string) {
		this.send('chat', message);
	}
}

const websockets: Record<string, WebSocketConnection> = {};
export function getWebsocket(user: string) {
	if (!websockets[user]) {
		websockets[user] = new WebSocketConnection(`ws://${env.PUBLIC_API_URL}/ws`, user);
	}
	return websockets[user];
}
