<script lang="ts">
    import type {PageData} from './$types';
    import {goto} from "$app/navigation";
    import {fly} from "svelte/transition";
    import Example from "$lib/slides/example.svx";

    export let data: PageData
    let goingForward = true;

    const slideAnimation = (node, left) => fly(node, {
        x: 1000 * (left ? -1 : 1), duration: 1000
    });

    const slideIn = (node) => slideAnimation(node, !goingForward);
    const slideOut = (node) => slideAnimation(node, goingForward);

    function nextSlide() {
        goingForward = false;
        const newSlideIndex = Math.max(1, data.currentSlideIndex - 1);
        goto(`/${newSlideIndex}`);
    }

    function previousSlide() {
        goingForward = true;
        const newSlideIndex = Math.min(data.totalSlides, data.currentSlideIndex + 1);
        goto(`/${newSlideIndex}`);
    }

    function onKeyDown(event) {
        if (event.keyCode == 37) {
            return nextSlide();
        }
        if (event.keyCode == 39) {
            return previousSlide();
        }
    }

</script>

<svelte:window on:keydown|preventDefault={onKeyDown}/>

<div class="h-auto w-auto overflow-hidden">
    {#key data.currentSlideIndex}
        <div in:slideIn out:slideOut
             class="top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2 justify-items-center grid">
            <Example/>
        </div>
    {/key}
</div>
