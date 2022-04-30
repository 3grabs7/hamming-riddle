<script lang='ts'>
    import type  { BitTypeAndPosition, DataIndex, ParityIndex } from "../models/bit.types";
    import type { Bit } from "../models/bit.class";
    import { onMount } from "svelte";
    import { DataBit } from "../models/data-bit.class";
    import { ParityBit } from "../models/parity-bit.class";
import BitService from "../scripts/bit.stream";
import bitService from "../scripts/bit.stream";

    export let config: BitTypeAndPosition;

    const { bitType, position } = config;

    let bit: Bit;
    $: value = bit?.value;

    onMount(() => {
        if(config.bitType === 'data') 
            bit = new DataBit(<DataIndex>position);
        
        if(config.bitType === 'parity') 
            bit = new ParityBit(<ParityIndex>position)
        
        bit.setRandomValue();
    })

    const handleOnClick = (): void => {
        bitService.flipBit(bit)
    }
</script>

<!-- a {bitType} bit at position {position} with value {bit?.value} -->
<main class='bit' on:click="{handleOnClick}">
    {value}
</main>

<style>
    .bit {
        width: 100px;
        aspect-ratio: 4/5;
        border:2px solid black;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 62px;
        user-select: none;
    }
    .bit:hover {
        background-color: rgb(209, 209, 209);
        cursor: pointer;
    }
</style>