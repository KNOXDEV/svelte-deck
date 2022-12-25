<script lang="ts">
    import type {PageData} from './$types';
    import {goto} from "$app/navigation";
    export let data: PageData

    function slideLeft() {
        const newSlideIndex = Math.max(1, data.currentSlideIndex - 1);
        goto(`/${newSlideIndex}`);
    }

    function slideRight() {
        const newSlideIndex = Math.min(data.totalSlides, data.currentSlideIndex + 1);
        goto(`/${newSlideIndex}`);
    }

    function onKeyDown(event) {
        if (event.keyCode == 37) {
            return slideLeft();
        }
        if(event.keyCode == 39) {
            return slideRight();
        }
    }

</script>

<svelte:window on:keydown={onKeyDown} />

<h1>Welcome to slide number {data.currentSlideIndex}</h1>
