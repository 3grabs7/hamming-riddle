<script lang="ts">
import HammingCodeKeyGameContainer from "./components/hamming-code-key-game-container.svelte";
import HammingCodeParityCalculatorContainer from "./components/hamming-code-parity-calculator-container.svelte";
import bitService from "./scripts/bit.stream";

	$: appState = bitService.appState$;
</script>

<main >
	<h1>{$appState}</h1>
	<HammingCodeKeyGameContainer />
	<HammingCodeParityCalculatorContainer />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		position: relative;
	}


	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>