<!-- 
    HOME COMPONENT
    This is the home page that displays when the app loads, and also
    when the 'Home' link on the navigation bar is clicked.
 -->
<script>
    export let theImmigrants;
    import { Container } from 'sveltestrap';
    import Family from './Family.svelte'

//  When the Family component raises a mouseclicked event
//  or a biorequested event, bubble that event up to the 
//  App component, where it will be handled.
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
	function handleClick(event) {
        dispatch("mouseclicked", event.detail);
    }
    function handleBioRequest(event) {
        dispatch("biorequested", event.detail)
    }

</script>

<Container>

<h3>Bruce and Paula's Immigrant Ancestors</h3>

<!-- Walk through the data family by family -->
{#each theImmigrants as thisFamily}
    <div class="p-2 mb-4 familyBorder rounded shadow">
        <p class="intro">{@html thisFamily.intro}</p>
        <Family 
            people={thisFamily.people}
            on:mouseclicked={handleClick} 
            on:biorequested={handleBioRequest}
        />
    </div>
{/each}

<div>&nbsp;</div>

</Container>

<style>
    .intro {
        /* font-weight: bold; */
        /* border: 1px solid black; */
        margin-bottom: 0;
        font-family: Georgia, 'Times New Roman', Times, serif;
        font-size: 1.1rem;
    }

    .familyBorder {
        border: 1px solid #DDD;
    }
</style>