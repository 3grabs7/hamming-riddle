<script lang='ts'>
    import Bit from "./bit.svelte";   

    const bits: Bit[] = [];

</script>

<main>
    <Bit config={{bitType: "data", position: 1}}/>
    <Bit config={{bitType: "data", position: 2}}/>
    <Bit config={{bitType: "data", position: 3}}/>
    <Bit config={{bitType: "data", position: 4}}/>
    <div class="spacer"></div>
    <Bit config={{bitType: "parity", position: 1}}/>
    <Bit config={{bitType: "parity", position: 2}}/>
    <Bit config={{bitType: "parity", position: 3}}/>
</main>

<style>
    main {
        width:60%;
        margin: 0 auto;
        margin-top: 3rem;
        padding:5rem;
        justify-content: center;
        display: flex;
        gap:1rem;
        border: 1px solid black;
    }

    .spacer {
        position: relative;
        margin: 0 1.5rem;
    }
    .spacer:before {
        content: "";
        position: absolute;
        width: 6px;
        left:-3px;
        height:140%;
        top: -20%;
        background-color: black;
    }
</style>