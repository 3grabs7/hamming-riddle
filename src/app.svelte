<script lang="ts">
	import HammingCodeContainer from "./components/hamming-code-container.svelte";
import bitService from "./scripts/bit.stream";

	$: appState = bitService.appState$;
</script>

<main >
	<h1>{$appState}</h1>
	<HammingCodeContainer />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		position: relative;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>