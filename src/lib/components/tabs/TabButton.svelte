<script lang="ts" module>
	export interface TabButtonProps {
		id: string;
		label: string;
		onclick: () => void;
		selected: boolean;
	}
</script>

<script lang="ts">
	const { label, selected, onclick }: TabButtonProps = $props();
</script>

<button {onclick} class={`p-0.5 text-lg text-white ${selected ? 'bg-gray-400' : 'bg-gray-600'}`}>
	{label}
</button>
