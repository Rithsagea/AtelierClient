import { browser } from '$app/environment';

type Listener<T> = (e: T) => void;

class Emitter<TypeMap extends { [key: string]: object }> {
	listeners: {
		[Key in keyof TypeMap]?: Set<Listener<TypeMap[Key]>>;
	};

	constructor() {
		this.listeners = {};
	}

	on<K extends keyof TypeMap>(event: K, listener: (data: TypeMap[K]) => void) {
		if (!this.listeners[event]) this.listeners[event] = new Set();
		this.listeners[event]?.add(listener);
	}

	dispatchEvent<K extends keyof TypeMap>(event: K, data: TypeMap[K]) {
		this.listeners[event]?.forEach((l) => l(data));
	}
}

interface ChatData {
	sender: string;
	message: string;
}

type EventMap = {
	chat: ChatData;
};

export class WebSocketConnection extends Emitter<EventMap> {
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
				this.dispatchEvent(command, data);
			};
		}
	}

	send<T>(command: string, data: T) {
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
