<script context="module">
    import h1 from "./h1.svelte";
    import h3 from "./h3.svelte";
    import p from "./p.svelte";
    export { h1, h3, p };
</script>

<style>
    .svx-layout :global(*):not(.math *, code, code *) {
        font-family: "DM Sans", sans-serif;
        color: #333;
    }

    .svx-layout :global(code) {
        counter-reset: step;
        counter-increment: step 0;

        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        font-size: 1.5rem;
    }

    .svx-layout :global(code .line)::before {
        display: inline-block;
        content: counter(step);
        counter-increment: step;
        width: 1.5em;
        margin-right: 1em;
        text-align: right;
        font-variant-numeric: tabular-nums;
        color: #AAA;
    }
</style>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css" integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X" crossorigin="anonymous">
</svelte:head>

<div class="svx-layout grid justify-items-center">
    <slot/>
</div>